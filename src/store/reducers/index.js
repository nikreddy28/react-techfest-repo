import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, productDetails, pageDetails } from './items';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    productDetails,
    pageDetails
});