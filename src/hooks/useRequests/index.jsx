import axios from "axios";

export const useRequests = () => {
    const BASE_URL = "/";

    const stringifyData = (data) => {
        if(data === {}) {
            return "";
        }
        let str = [];
        for (let property in data)
            if (data.hasOwnProperty(property)) {
                str.push(encodeURIComponent(property) + "=" + encodeURIComponent(data[property]));
            }
        return "?" + str.join("&");
    }
    const getData = async (url, data = {}) => {
        const dataString = stringifyData(data);
        let res;
        await axios.get(BASE_URL + url + dataString)
            .then((response) => {
                res = response;
            }).catch((error) => {
            console.error(error);
            res = error;
        });
        return res;
    }
    const postData = async (url, data) => {
        let res;
        await axios.post(url, data)
            .then((response) => {
                res = response;
            }).catch((error) => {
            res = error;
        });
        return res;
    }

    const getFile = async (url, data = {}) => {
        const dataString = stringifyData(data);
        let res;
        await axios({
            url: BASE_URL + url + dataString, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            res = {...response};
            res.responseURL = window.URL.createObjectURL(new Blob([response.data]));
        }).catch((error) => {
            res = error;
        });
        return res;
    }


    return {getData, postData, getFile};
}