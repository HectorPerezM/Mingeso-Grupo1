import axios from 'axios';
import { push } from 'react-router-redux';

export function addProducts(product) {
    return dispatch =>{
    dispatch(ajaxLoading(true));
    axios.post('http://165.227.48.161:8082/products', { product })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };
}

export function addProducts2(product){
  return dispatch => {
    dispatch(ajaxLoading(true));
    console.log(product);
    console.log(product.productCode);
    fetch('http://165.227.48.161:8082/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "productCode": product.productCode,
        "productName": product.productName,
        "productDueDate": product.productDueDate,
        "productPrice": product.productPrice,
        "category": {
          "categoryId": product.category
        }
      })
    })
    .then(response => {
        dispatch(push('/products/1'));
        //dispatch(setProducts(response.data));
        dispatch(ajaxLoading(false));
    })
    .catch(error => {
        console.error(error);
        dispatch(ajaxLoading(false));
    });
}
}

export function editProducts(product) {
  return dispatch => {
    dispatch(ajaxLoading(true));
    fetch('http://165.227.48.161:8082/products/'+product.productId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "productCode": product.productCode,
        "productName": product.productName,
        "productDueDate": product.productDueDate,
        "productPrice": product.productPrice,
        "category": {
          "categoryId": product.category
        }
      })
    })
    .then(response => {
        getProducts();
        dispatch(push('/products/1'));
        //dispatch(setProducts(response.data));
        dispatch(ajaxLoading(false));
    })
    .catch(error => {
        console.error(error);
        dispatch(ajaxLoading(false));
    });
}
}


export function deleteProducts(id) {
  return dispatch => {
      dispatch(ajaxLoading(true));
      axios.delete('http://165.227.48.161:8082/products/'+id)
          .then(response => {

            const store = configureStore();
            store.dispatch(getProducts());

            //dispatch(push('/products/1'));
            dispatch(ajaxLoading(false));
          })
          .catch(error => {
              console.error(error);
              dispatch(ajaxLoading(false));
          });
  };
}

export function getProblems() {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('http://www.mocky.io/v2/59b994573a0000f501f7fb05')
            .then(response => {
                dispatch(setProducts(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    };
}
