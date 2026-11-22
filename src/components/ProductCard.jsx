export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-essens-back overflow-hidden flex flex-col transition-all ">
      {/* Product name */}
      <h3 className="text-md text-center font-bold text-essens-blue p-4">
        {product.name}
      </h3>
      {/* Image */}
      <div className="h-56 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Description and price */}
      <div className="p-6 flex flex-col grow justify-between">
        <p className="text-sm text-essens-black mb-6">{product.description}</p>
        <span className="text-lg text-center font-semibold text-essens-blue">
          {product.price}
        </span>
      </div>
      {/* Select button */}
      <button
        onClick={() => alert(`Produkt ${product.name} byl vybrán!`)}
        className="py-3 bg-essens-blue border border-essens-blue text-white text-sm font-medium hover:text-essens-blue hover:bg-white transition-colors duration-300 cursor-pointer"
      >
        Vybrat vůni
      </button>
    </div>
  )
}
