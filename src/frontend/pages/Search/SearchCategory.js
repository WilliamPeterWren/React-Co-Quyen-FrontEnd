import React,{useState,useEffect} from 'react'
import {Link, useParams } from 'react-router-dom';

import apiProduct from '../../../api/apiProduct';

import FilterTop from '../Product/FilterTop';
import ItemFound from '../Product/ItemFound';
import ProductItem from '../Product/ProductItem';

function SearchCategory() {
    
    const [products, setProducts] = useState([]);

    const {query} = useParams()

    useEffect(() => {
        apiProduct.getProductByCatSlug(query).then(res => {
          console.log(res);
            const productData = res.data.map(product => {               
                    return {
                    id: product.id,
                    name: product.attributes.product_name,
                    catid: product.attributes.cat_id,
                    description: product.attributes.description,   
                    price: product.attributes.price,   
                    is_on_sale: product.attributes.is_on_sale,
                    sale_price: product.attributes.sale_price,
                    slug: product.attributes.slug,               
                    brand_id: product.attributes.brand_id,
                    image: product.attributes.image,
                    category_name: product.attributes.category.data.attributes.category_name,
                    category_slug: product.attributes.category.data.attributes.slug,
                    brand_name: product.attributes.brand.data.attributes.brand_name,    
                    }                
              });
                
            setProducts(productData);
            console.log(productData);
        })
        

    },[query])


    return (
        <div>      
      <section className="section-content padding-y">
      <div className="container">
        
        <FilterTop />      
        <ItemFound />

        <div className="row">      
        {
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))
        }
        </div>      
      

        <div className="box text-center">
          <p>Did you find what you were looking for？</p>
          <Link to="/" className="btn btn-light">Yes</Link>
          <Link to="/" className="btn btn-light">No</Link>
        </div>

      </div>
    </section>
    </div>
    )
}

export default SearchCategory
