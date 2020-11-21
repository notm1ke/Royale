/**
 * Localizes a standard HTTP status code.
 * @param status the status code
 * @returns the localized message
 */
export function localizeHttpStatus(status: number): string {
    switch(status) {
        case 400: return 'Bad Request';
        case 401: return 'Unauthorized';
        case 403: return 'Forbidden';
        case 404: return 'Not Found';
        case 405: return 'Method not allowed';
        case 409: return 'Conflict';
        case 500: return 'Internal Server Error';
        case 502: return 'Bad Gateway';
        case 503: return 'Service Unavailable';
        case 504: return 'Gateway Timeout';
        default: 'Error';
    }
}