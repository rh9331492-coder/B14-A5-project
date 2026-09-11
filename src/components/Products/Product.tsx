import { useState } from 'react'
import type { Type } from '../../types/Types'

interface ProductType {
    product: Type
}

const Product = ({ product }: ProductType) => {
    const [selected, setSelected] = useState(false)

    const HendleButton = () => {
        setSelected(true)
    }

    console.log(product)

    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <figure className="relative overflow-hidden">
                <img
                    src={product.level}
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4">
                    <span className="badge badge-primary px-3 py-3 font-semibold">
                        NEW
                    </span>
                </div>

                <button className="btn btn-circle btn-sm absolute right-4 top-4 bg-base-100/90 backdrop-blur hover:bg-base-100">
                    ♡
                </button>
            </figure>

            <div className="card-body gap-3">

                <span className="text-sm font-medium text-primary">
                    {product.category}
                </span>

                <h2 className="text-2xl font-bold tracking-tight">
                    {product.name}
                </h2>

                <p className="line-clamp-2 text-sm leading-6 text-base-content/60">
                    {product.description}
                </p>

                <div className="flex flex-wrap justify-between gap-2">
                    <span className="badge badge-outline">
                        Frontend
                    </span>
                    <span className="badge badge-outline">
                        Beginner-Friendly
                    </span>

                    <div className="flex items-center gap-1 text-sm">
                        ⭐ <span>4.8</span>
                    </div>
                </div>

                <button
                    onClick={HendleButton}
                    className="btn btn-primary rounded-xl px-6"
                    disabled={selected}
                >
                    {selected ? 'Selected' : 'Add to Cart'}
                </button>
            </div>

        </div>
    )
}

export default Product