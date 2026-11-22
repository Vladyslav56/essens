import { useState } from 'react'
import questionsData from './data/questions.json'
import { findProducts } from './utils/findProducts.js'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionStep from './components/QuestionStep'
import ResultsScreen from './components/ResultsScreen'

export default function App() {
  // Current step
  const [step, setStep] = useState('welcome')

  // Current question index (0-based)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // User's answers to the questions
  const [answers, setAnswers] = useState({})

  // Products that match the user's answers
  const [results, setResults] = useState([])

  // Handler for selecting an option for the current question
  const handleSelectOption = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  // Next question or show results if it's the last question
  const handleNextStep = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      const matched = findProducts(answers)
      setResults(matched)
      setStep('results')
    }
  }

  // Return to the previous step
  const handlePrevStep = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    } else {
      setStep('welcome')
    }
  }

  // Full reset of the test
  const handleRestart = () => {
    setAnswers({})
    setCurrentQuestionIndex(0)
    setResults([])
    setStep('welcome')
  }

  const currentQuestion = questionsData[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between">
      {/* Header */}
      <header className="w-full py-6 px-8 border-b border-essens-back bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold tracking-wider uppercase text-essens-blue">
            ESSENS
          </span>
          <span className="text-xs text-essens-black uppercase tracking-widest font-medium">
            Parfémový Poradce
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="grow px-4 py-8">
        {step === 'welcome' && (
          <WelcomeScreen onStart={() => setStep('quiz')} />
        )}

        {step === 'quiz' && (
          <QuestionStep
            question={currentQuestion}
            currentStep={currentQuestionIndex + 1}
            totalSteps={questionsData.length}
            selectedValue={answers[currentQuestion.id]}
            onSelect={handleSelectOption}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        )}

        {step === 'results' && (
          <ResultsScreen products={results} onRestart={handleRestart} />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 px-8 border-t border-essens-back bg-white text-center text-xs text-essens-black">
        © 2026 Vladyslav Masliukov
      </footer>
    </div>
  )
}
