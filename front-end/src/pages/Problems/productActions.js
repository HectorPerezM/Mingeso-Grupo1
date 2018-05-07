import axios from 'axios';

export function addProducts(product) {
    return dispatch =>{
    axios.post('http://165.227.48.161:8082/products', { product })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };
}

export function addProducts2(product){
  return dispatch => {
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
        getProducts();
        //dispatch(setProducts(response.data));
    })
    .catch(error => {
        console.error(error);
    });
}
}

export function editProducts(product) {
  return dispatch => {
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
        //dispatch(setProducts(response.data));
    })
    .catch(error => {
        console.error(error);
    });
}
}


export function deleteProducts(id) {
  return dispatch => {
      axios.delete('http://165.227.48.161:8082/products/'+id)
          .then(response => {
          })
          .catch(error => {
              console.error(error);
          });
  };
}

export function getProducts() {
    return dispatch => {
        axios.get('http://165.227.48.161:8082/products')
            .then(response => {

            })
            .catch(error => {
                console.error(error);
            });
    };
}

export function getProblems() {
    return dispatch => {
        axios.get('http://www.mocky.io/v2/59b994573a0000f501f7fb05')
            .then(response => {
              return response.data;
            })
            .catch(error => {
                console.error(error);
            });
    };
}

export function getProblems2() {
    axios.get('http://www.mocky.io/v2/59b994573a0000f501f7fb05')
      .then(response => {
        return response.data;
      })
  }
