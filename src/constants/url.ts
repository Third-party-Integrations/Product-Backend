export const EMPTY_ROUTE = '/';
export const BASE_URL = '/v1/';

export const BASE_ROUTES = {
    HEALTH_CHECK: `${BASE_URL}healthcheck`,
    PRODUCT: `${BASE_URL}product`,
};

export const ROUTES = {
    PING: '/ping',
    SUBMIT_FORM: '/api/submit-form',
    API_GET_FROM_DATA: '/api/get-form-data',
    UDATE_PRODUCT: '/api/update-product/:productId',
    DELETE_PRODUCT: '/api/delete-product/:productId',
    GET_PRODUCT: '/api/product/:productId'
};
