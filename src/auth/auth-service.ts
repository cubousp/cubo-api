import { get, post } from 'got'
import { TransparentError } from '../api/resolvers/error'

export interface IAuthUserInfo {
    email: string,
    name: string,
    picture: string,
    role: AuthRole,
}

export interface IAuthInfo {
    user: IAuthUserInfo,
    token: string,
}

export enum AuthRole {
    ADMIN = 'admin',
    USER = 'user',
}

export class AuthService {
    private TOKEN_ENDPOINT = `${process.env.AUTH_API}/oauth/token`
    private USER_ENDPOINT = `${process.env.AUTH_API}/userinfo`

    public async signIn(email: string, password: string):
        Promise<IAuthInfo> {
        const token = await this.getToken(password, email)
        const user = await this.getUserInfo(token)
        this.validateRole(AuthRole.USER, user)
        return { token, user }
    }

    public async signInAsAdmin(email: string, password: string):
        Promise<IAuthInfo> {
        const token = await this.getToken(password, email)
        const user = await this.getUserInfo(token)
        this.validateRole(AuthRole.ADMIN, user)
        return { token, user }
    }

    public async getUserInfo(token): Promise<IAuthUserInfo> {
        try {
            const { body: profilePayload } = await get(this.USER_ENDPOINT, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            const userInfo = JSON.parse(profilePayload)
            const { email, name, picture } = userInfo
            const role = userInfo['https://cubousp.com/roles'][0]
            return { email, name, picture, role }
        } catch (err) {
            if (err.response.body === 'Unauthorized') {
                throw new TransparentError(
                    'Unauthorized',
                    'Unauthorized',
                )
            }
            throw err
        }
    }

    public validateRole(role: AuthRole, userInfo: IAuthUserInfo) {
        if (userInfo.role !== role) {
            throw new TransparentError(
                'Unauthorized',
                'Unauthorized',
            )
        }
    }

    private async getToken(password: string, email: string) {
        try {
            const { body: tokenPayload } = await post(this.TOKEN_ENDPOINT, {
                body: {
                    audience: process.env.AUTH_AUDIENCE,
                    client_id: process.env.AUTH_CLIENT_ID,
                    client_secret: process.env.AUTH_CLIENT_SECRET,
                    grant_type: 'password',
                    password,
                    scope: 'openid',
                    username: email,
                },
                json: true,
            })
            return tokenPayload.access_token
        } catch (err) {
            if (err.response && err.response.body.error === 'invalid_grant') {
                throw new TransparentError(
                    'Wrong email or password',
                    'InvalidGrant',
                )
            }
            throw err
        }
    }
}
