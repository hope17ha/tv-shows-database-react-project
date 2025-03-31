const requester = async (method, url, data) => {
    const options = {
        method,
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
}