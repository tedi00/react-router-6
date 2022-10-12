import {ApiHelpers} from "./api-helpers";

export const Api = () => {
    const {getData, getFile} = ApiHelpers();

    const endpoints = {
        get: {
            deities: () => {return getData( 'deities')},
            maps: (data) => {return getData('maps', data)},
            characterSheet: (data) => {return getFile( "getCharacterSheet", data, true)}
        },
        post: {

        }
    }

    return {endpoints};
}
