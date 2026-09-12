import { use, useState } from "react";
import type { Type } from "../../types/Types";
import Product from "./Product";

interface ProductsProps {
    ProductIconsData: Promise<Type[]>;
}

const Products = ({ ProductIconsData }: ProductsProps) => {
    const product = use(ProductIconsData);

    const [selectedProducts, setSelectedProducts] = useState<Type[]>([]);

    const handleAddToStack = (product: Type): void => {
        const alreadySelected = selectedProducts.find(
            (item) => item.id === product.id
        );

        if (alreadySelected) {
            return;
        }

        setSelectedProducts([...selectedProducts, product]);
    };

    // Remove one product
    const handleRemove = (id: number) => {
        setSelectedProducts(
            selectedProducts.filter((item) => item.id !== id)
        );
    };

    const handleRemoveAll = () => {
        setSelectedProducts([]);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {product.map((product) => (
                        <Product
                            product={product}
                            key={product.id}
                            handleAddToStack={handleAddToStack}
                            selectedProducts={selectedProducts}
                        />
                    ))}
                </div>

                <div>
                    <div className="sticky top-6 w-full rounded-[24px] border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                            Your Stack
                        </h3>

                        <p className="text-sm text-slate-400 mb-5">
                            {selectedProducts.length} Technology Selected
                        </p>

                        <div className="space-y-3 mb-5">

                            {selectedProducts.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50/50"
                                >
                                    <div className="flex items-center gap-3">

                                        <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center text-sm">
                                            {[item.name]}
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900">
                                                {item.name}
                                            </h4>

                                            <span className="text-xs text-slate-400">
                                                {item.category}
                                            </span>
                                        </div>

                                    </div>

                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-slate-400 hover:text-red-500 text-base px-2 py-1 cursor-pointer transition"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}

                            {selectedProducts.length === 0 && (
                                <p className="text-sm text-slate-400 text-center py-5">
                                    No technology selected
                                </p>
                            )}

                        </div>

                        {selectedProducts.length > 0 && (
                            <button
                                onClick={handleRemoveAll}
                                className="w-full border border-red-200 text-red-500 hover:bg-red-50 text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                            >
                                Remove All
                            </button>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;