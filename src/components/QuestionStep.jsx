export default function QuestionStep({
  question,
  currentStep,
  totalSteps,
  selectedValue,
  onSelect,
  onNext,
  onPrev,
}) {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-sm p-8 my-8">
      {/* Progress bar and steps */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs uppercase text-essens-blue font-semibold">
          Otázka {currentStep} z {totalSteps}
        </span>
        <div className="flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-300 ${
                i + 1 <= currentStep
                  ? 'w-8 bg-essens-blue'
                  : 'w-3 bg-essens-back'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question title */}
      <h2 className="text-2xl font-light text-essens-pink mb-6">
        {question.title}
      </h2>

      {/* List of answer options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option) => {
          const isSelected = selectedValue === option.value
          return (
            <button
              key={option.value}
              onClick={() => onSelect(question.id, option.value)}
              className={`w-full text-left p-4 border border-essens-blue transition-colors duration-300 cursor-pointer flex items-center justify-between ${
                isSelected
                  ? ' bg-white text-esens-blue'
                  : ' bg-essens-blue text-white hover:bg-white hover:text-essens-blue'
              }`}
            >
              <span className="font-medium">{option.label}</span>
              <div
                className={`w-5 h-5 rounded-full bg-white border border-essens-blue flex items-center justify-center `}
              >
                {isSelected && (
                  <div className="w-2.5 h-2.5 rounded-full bg-essens-blue" />
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-essens-back">
        <button
          onClick={onPrev}
          className="px-5 py-2.5 text-sm font-medium text-essens-blue hover:text-essens-black transition-colors cursor-pointer"
        >
          ← Zpět
        </button>
        <button
          onClick={onNext}
          disabled={!selectedValue}
          className={`px-6 py-3 font-medium text-sm transition-colors duration-300 ${
            selectedValue
              ? 'bg-essens-blue border border-essens-blue text-white hover:bg-white hover:text-essens-blue cursor-pointer'
              : ' border border-essens-back bg-essens-back text-gray-400 cursor-not-allowed'
          }`}
        >
          {currentStep === totalSteps ? 'Zobrazit výsledky' : 'Další krok →'}
        </button>
      </div>
    </div>
  )
}
