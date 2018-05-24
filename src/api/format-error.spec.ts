import { buildGraphQLError } from '../../test-utils/error'
import { formatError } from './format-error'
import { TransparentError } from './resolvers/error'

describe('formatError', () => {

    it('should set code InternalServerError when non-transparent error', () => {
        expect(formatError(buildGraphQLError(new Error('opaque error'))))
            .toHaveProperty('code', 'InternalServerError')
    })

    it('should not set code InternalServerError when transparent error', () => {
        expect(formatError(buildGraphQLError(new TransparentError(
            'transparent error',
            'SomeErrorCode',
        )))).toHaveProperty('code', 'SomeErrorCode')
    })
})
