async function postData(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    if (!res.ok) {
        throw new Error();
    }

    return await res.json();
}

async function getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Cloud not fetch: ${res}, status: ${res.status}`);
    }

    return await res.json();
}

export {postData, getResource};