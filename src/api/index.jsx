import {ApiHelpers} from "./api-helpers";

export const Api = () => {
    const BASE_URL = "/";
    const {getData, getFile} = ApiHelpers();

    const endpoints = {
        get: {
            deities: () => {return getData(BASE_URL, 'deities')},
            maps: (data) => {return getData(BASE_URL, 'maps', data)},
            characterSheet: (data) => {return getFile(BASE_URL, "getCharacterSheet", data)}
        },
        post: {

        }
    }

    return {endpoints};
}
