export const fetchPhotos = async () => {
    const res = await fetch (`https://tony-json-server.herokuapp.com/api/photos`, {
        method: 'GET'
    })
    const data = await res.json();
    return data;
}