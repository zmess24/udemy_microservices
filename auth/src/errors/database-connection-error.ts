import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error Connecting to Database';

    constructor() {
        super('Error Connecting to db');

        // Only because we are extendnig a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    };

    serializeErrors() {
        return [{ message: this.reason }]
    }
}