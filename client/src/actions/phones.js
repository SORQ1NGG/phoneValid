export const phonesFetchDataSuccess = (phones) => {    return {        type: "PHONES_FETCH_DATA_SUCCESS",        phones    }}export const phonesFetchData = (url) => {    return (dispatch) => {        fetch(url)            .then(response => {                if(!response.ok) {                    throw new Error(response.statusText);                }                return response;            })            .then(response => response.json())            .then(phones => dispatch(phonesFetchDataSuccess(phones)))            .catch(()=>{});    }}