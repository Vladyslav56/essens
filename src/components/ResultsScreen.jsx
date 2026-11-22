import ProductCard from './ProductCard'

export default function ResultsScreen({ products, onRestart }) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Title and description */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-essens-blue font-semibold mb-3 block">
          Doporučení pro vás
        </span>
        <h2 className="text-3xl font-light text-essens-pink mb-4">
          Vaše ideální parfémy ESSENS
        </h2>
        <p className="text-essens-black max-w-lg mx-auto">
          Na základě vašich odpovědí jsme vybrali ty nejvhodnější vůně, které
          perfektně odpovídají Vašemu vkusu.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Reset button */}
      <div className="text-center">
        <button
          onClick={onRestart}
          className="inline-flex items-center justify-center px-8 py-3.5 bg-essens-blue border border-essens-blue text-white font-medium  hover:bg-white hover:text-essens-blue transition-colors duration-300 cursor-pointer"
        >
          Začít znovu od začátku
        </button>
      </div>
    </div>
  )
}
