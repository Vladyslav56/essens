export default function WelcomeScreen({ onStart }) {
  return (
    <div className="max-w-xl mx-auto text-center py-12 px-6 bg-white shadow-sm  my-12">
      {/* Title and description */}
      <span className="text-xs uppercase tracking-widest text-essens-blue font-semibold mb-3 block">
        ESSENS Parfémový Poradce
      </span>
      <h1 className="text-3xl font-light text-essens-pink mb-4">
        Objevte svou ideální vůni
      </h1>
      <p className="text-essens-black mb-8 leading-relaxed">
        Odpovězte na několik rychlých otázek o vašich preferencích a my Vám
        pomůžeme vybrat perfektní parfém, který podtrhne Vaši osobnost.
      </p>
      {/* Start button */}
      <button
        onClick={onStart}
        className="inline-flex items-center justify-center border border-essens-blue px-8 py-4 bg-essens-blue text-white font-medium hover:bg-white transition-colors duration-300 hover:text-essens-blue cursor-pointer"
      >
        Začít výběr
      </button>
    </div>
  )
}
