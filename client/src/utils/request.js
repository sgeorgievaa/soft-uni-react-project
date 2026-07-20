const request = async (method, url, data, options = {}) => {

    if (method !== 'GET') { 
        options.method = method;
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        };
    }

    const response = await fetch(url, options);
    const responseContentType = response.headers.get('Content-Type');

    let result;
    if (responseContentType && responseContentType.includes('application/json')) {
        result = await response.json();
    }

    if (!response.ok) {
        const error = new Error(result?.message || 'Request failed');
        error.status = response.status;
        throw error;
    }

    return result;
};

export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
}