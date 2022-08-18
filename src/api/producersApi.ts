import axios from "axios";
import { Producer } from "../interfaces/IProductList";

export const producersApi = axios.create({
    baseURL: "https://artizanaliiwebapp.azurewebsites.net/api/producer/",
});

export const getProducers = async ():Promise<Producer[]> => {
    const response = await producersApi.get("");
    return response.data;
}