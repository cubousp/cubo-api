import jwt = require('express-jwt')
import { post } from 'got'
import jwksRsa = require('jwks-rsa')
import { TransparentError } from '../api/utils/error'
import { Context } from '../context'

export const checkJwt = jwt({
    algorithms: ['RS256'],
    audience: process.env.AUTH_AUDIENCE,
    credentialsRequired: false,
    issuer: `https://cubousp.auth0.com/`,
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://cubousp.auth0.com/.well-known/jwks.json`,
        rateLimit: true,
    }),
})

export const getCurrentUser = async (req, res, next, context: Context) => {
    if (!req.user) { return next() }
    const currentUser = await context.participant.getByAuthId(req.user.sub)
    context.currentUser = currentUser!
    next()
}

export class AuthService {
    private TOKEN_ENDPOINT = `${process.env.AUTH_API}/oauth/token`

    public async signIn(email: string, password: string) {
        return this.getToken(password, email)
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
