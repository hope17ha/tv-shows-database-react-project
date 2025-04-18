const requester = async (method, url, data, options = {}) => {
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
        }
    }

    const response = await fetch(url, options);

    const responseContentType = response.headers.get('Content-Type');
    if (!responseContentType) {
        return;
    }

    if (!response.ok) {
        const result = await response.json()

        throw result;
    }

    if (response.status === 403){
        localStorage.removeItem('auth');
    }

    const result = await response.json();

    return result;

};

export default {
    get: requester.bind(null, 'GET'),
    post: requester.bind(null, 'POST'),
    put: requester.bind(null, 'PUT'),
    delete: requester.bind(null, 'DELETE'),
    baseRequest: requester,
}
