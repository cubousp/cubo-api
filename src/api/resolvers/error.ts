export class TransparentError extends Error {
    constructor(message: string) {
        super(message)
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, TransparentError.prototype)
    }
}