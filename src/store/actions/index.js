import axios from 'axios';
 
 
 
 
export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}
 
 
 
export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        axios.get(url)
            .then(response => {
                dispatch(itemsIsLoading(false));
                dispatch(itemsFetchDataSuccess(response.data))
            })
            .catch(() => {
                dispatch(itemsHasErrored(true))
            });
    };
}
 
export function productDetailsSuccess(productDetails) {
    return {
        type: 'PRODUCT_DETAILS_DATA_SUCCESS',
        productDetails
    };
}
 
 
 
export function fetchProductDetails(url) {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                /* dispatch(itemsIsLoading(false));*/
                dispatch(productDetailsSuccess(response.data))
            })
            .catch(() => {
 
            });
    };
}
 
 
export function articlesFetchData(url,data) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        let formData = getFormData(data);
        axios({
            method: 'post',
            url: url,
            data: formData,
            headers: {
                'content-type':  'application/x-www-form-urlencoded; charset=UTF-8',
                },
 
            })
            .then(response => {
                dispatch(itemsIsLoading(false));
               // dispatch(itemsFetchDataSuccess(response.data))
                dispatch(itemsFetchDataSuccess(response.data))
 
            })
            .catch(() => {
                dispatch(itemsHasErrored(true))
            });
    };
}
 
export function getFormData(item) {
    const formData = new FormData();
    for ( var key in item ) {
    formData.append(key, item[key]);
}
    return formData;
}
 
export function FetchPageData(url) {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                /* dispatch(itemsIsLoading(false));*/
                dispatch(pageDetailsSuccess(response.data))
            })
            .catch(() => {
 
            });
    };
}
 
export function pageDetailsSuccess(items) {
    return {
        type: 'PAGE_FETCH_DATA_SUCCESS',
        items
    };
}