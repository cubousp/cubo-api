import { post } from 'got'
import { TransparentError } from '../api/resolvers/error'

type IToken = string

export class AuthService {
    private TOKEN_ENDPOINT = `${process.env.AUTH_API}/token`

    public async signIn(email: string, password: string):
        Promise<IToken> {
        try {
            const { body } = await post(this.TOKEN_ENDPOINT, {
                body: {
                    audience: process.env.AUTH_AUDIENCE,
                    client_id: process.env.AUTH_CLIENT_ID,
                    client_secret: process.env.AUTH_CLIENT_SECRET,
                    grant_type: 'password',
                    password,
                    username: email,
                },
                json: true,
            })
            return body.access_token
        } catch (err) {
            if (err.response.body.error === 'invalid_grant') {
                throw new TransparentError(
                    'Wrong email or password',
                    'InvalidGrant',
                )
            }
            throw err
        }

    }
}
