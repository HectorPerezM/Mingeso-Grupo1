import React from 'react';
import {NavLink} from 'react-router-dom';
// Child components
import Pagination from './Pagination';

const ProductList = ({products, onDeleteProduct, pages, currentPage}) => {
    return (
        !products.length ?
            <p className="alert alert-warning text-center">No products found.</p>
            :
            <div className="product-list">
                <div className="responsive-table">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Fecha de vencimiento</th>
                            <th>Categoria</th>
                            <th>Codigo</th>
                            <th>Preccio</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map(product =>
                            <tr key={product.productId}>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>{product.productDueDate}</td>
                                <td>{
                                  product.category ? product.category.categoryName : 'Sin Categoría'
                                }</td>
                                <td>{product.productCode}</td>
                                <td>{product.productPrice}</td>
                                <td>
                                    <NavLink className="btn btn-primary btn-sm"
                                             to={'/edit/' + product.productId}>Editar</NavLink>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-danger"
                                            onClick={() => onDeleteProduct(product.productId)}>
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                { /* show pagination if there are more than 1 page */
                    pages > 1 && <Pagination pages={pages} currentPage={currentPage}/>
                }
            </div>
    )
};

export default ProductList;
