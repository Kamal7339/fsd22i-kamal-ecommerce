import React from 'react'
import Product from './Product'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/AppActions';
import Loading from './Loading';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';


const ProductList = () => {
   const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
   
    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        dispatch(setProducts(data));
        setIsLoading(true);
    }
   
       

     
      
 
    useEffect(() => {
        if(searchQuery){
        const searchProduct=products.filter((product)=>product.title.toLowerCase().includes(searchQuery.toLowerCase()));
        dispatch(setProducts(searchProduct));
        }else{
            fetchData()
        }
        
    }, [searchQuery]);
    const selectCategory = async (category) => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const data = await response.json()
            dispatch(setProducts(data));
            setIsLoading(true);
        }
    
    const products = useSelector((state) => state.allProducts.products);

    const handleSearchClick = () => {
        
        setSearchQuery('');
        fetchData();
    }
   

    
    
    return (
        <>
        <Navbar/>

            {
                isLoading ? (
                    <>
                        <div className='d-flex justify-content-between border border-bottom px-1'>
                            <div className='p-3 text-warning'>
                                {products.length} results
                            </div>
                            <div className="input-group mt-3 mb-3 w-50">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search products"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                           
                        </div>
                            <div className="dropdown my-auto mx-2">
                                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter
                                </button>
                               
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" role="button" onClick={() => fetchData()}>All</a>
                                    <a className="dropdown-item" role="button" onClick={() => selectCategory("men's clothing")}>Men's clothing</a>
                                    <a className="dropdown-item" role="button" onClick={() => selectCategory("women's clothing")}>Women's clothing</a>
                                    <a className="dropdown-item" role="button" onClick={() => selectCategory("electronics")}>Electronics</a>
                                    <a className="dropdown-item" role="button" onClick={() => selectCategory("jewelery")}>Jewellery</a>
                                </div>
                            </div>
                        </div>
                       
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                                {
                                    products.map(product => {
                                        return <Product product={product} key={product.id}/>
                                    })
                                }
                            
                            </div>
                        
                    </>
                ) : <Loading />
            }
        </>
    )
}


export default ProductList;