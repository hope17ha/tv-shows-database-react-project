const requester = async (method, url, data, options = {}) => {
    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options = {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            body: JSON.stringify(data),
        };
    }

    const response = await fetch(url, options);

    const responseContentType = response.headers.get("Content-Type");
    if (!responseContentType) {
        return;
    }

    if (!response.ok) {
        if (response.status === 403) {
            localStorage.removeItem("auth");

            let errorMessage = "Request failed!";
            try {
                const errorData = await response.json();
                errorMessage = errorData?.message || errorMessage;
            } catch {}

            throw new Error(errorMessage);
        }
    }

    const result = await response.json();

    return result;
};

export default {
    get: requester.bind(null, "GET"),
    post: requester.bind(null, "POST"),
    put: requester.bind(null, "PUT"),
    delete: requester.bind(null, "DELETE"),
    baseRequest: requester,
};
