import  * as R from 'ramda'

import {FETCH_PHONES_SUCCESS} from "../actionType";

const initialState = {
    ids: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
           return  R.merge(state, {                  //получаем масив id-шников
               ids: R.pluck('id', payload)
           })
        default:
            return state
    }
}