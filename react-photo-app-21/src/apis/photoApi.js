import httpRequest from "services/httpRequest";

export const fetchPhotos = async () => {
    const res = await httpRequest.get(`https://cms-connector-be.herokuapp.com/api/user`)
    return res.data;
}

export async function fetchSinglePhoto(id) {
    const res = await httpRequest.get(`https://cms-connector-be.herokuapp.com/api/user/${id}`);
    return res.data;
}