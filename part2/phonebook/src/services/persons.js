import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const create = async (data) => {
    const response = await axios.post(baseUrl, data);
    return response.data;
};

const deletePerson = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
};
export default { getAll, create, deletePerson };
