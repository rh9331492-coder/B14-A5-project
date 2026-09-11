import { use } from 'react'
import type { Type } from '../../types/Types'
import Product from './Product';
interface Product {
    ProductIconsData: Promise<Type[]>
}
const Products = ({ ProductIconsData }: Product) => {
    const product = use(ProductIconsData);
    // console.log(product)
    return (
        // <div className='grid grid-cols-2'>
            <div className='grid grid-cols-3 gap-x-7 max-w-[1100px] mx-auto'>
                {
                    product.map((product) => <Product product={product} key={product.id}></Product>)
                }
            </div>
            
        // </div>
    )
}

export default Products
