import phones from "../api/mockPhones";
//import {reject} from "ramda";

export const fetchPhones = async () => {
    return new Promise((resolve, reject) => {
        resolve(phones)
        // reject(phones)
    })
};

export const loadMorePhones = async ({offset}) => {
    return new Promise((resolve, reject) => {
        resolve(phones)
        // reject(phones)
    })
};