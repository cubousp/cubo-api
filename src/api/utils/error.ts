export class TransparentError extends Error {

    public code: string

    constructor(message: string, code: string) {
        super(message)
        this.code = code
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, TransparentError.prototype)
    }
}

export const isTransparent = (error: any): error is TransparentError =>
    error instanceof TransparentError
