export class CustomError extends Error {
    public code: string;

    constructor(message: string, code: string = 'CUSTOM_ERROR') {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
    }
}
