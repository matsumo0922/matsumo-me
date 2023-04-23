const axios = require("axios");
const isArray = require("lodash.isarray");
const isObject = require("lodash.isobject");
const camelCase = require("lodash.camelcase");
const mapValues = require("lodash.mapvalues");
const mapKeys = require("lodash.mapkeys");

const mapKeysDeep = (data, callback) => {
    if (isArray(data)) {
        return data.map(innerData => mapKeysDeep(innerData, callback));
    } else if (isObject(data)) {
        return mapValues(mapKeys(data, callback), val =>
            mapKeysDeep(val, callback)
        );
    } else {
        return data;
    }
};

const mapKeysCamelCase = data =>
    mapKeysDeep(data, (_value, key) => camelCase(key));

export const applyCaseAxios = axios.create();

// 一番重要なところ！
applyCaseAxios.interceptors.response.use(
    response => {
        const { data } = response;
        const convertedData = mapKeysCamelCase(data);
        return { ...response, data: convertedData };
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);