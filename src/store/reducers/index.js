import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, productDetails } from './items';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    productDetails
});