import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getCalculatorById } from '../utils/calculatorData'
import Button from '../components/ui/Button'

// Import calculator components
import PercentageCalculator from '../components/calculators/PercentageCalculator'
import GradeCalculator from '../components/calculators/GradeCalculator'
import FractionCalculator from '../components/calculators/FractionCalculator'
import AverageCalculator from '../components/calculators/AverageCalculator'
import RatioCalculator from '../components/calculators/RatioCalculator'
import TimeCalculator from '../components/calculators/TimeCalculator'
import DiscountCalculator from '../components/calculators/DiscountCalculator'
import ScientificCalculator from '../components/calculators/ScientificCalculator'
import BMICalculator from '../components/calculators/BMICalculator'
import AgeCalculator from '../components/calculators/AgeCalculator'
import CurrencyConverter from '../components/calculators/CurrencyConverter'
import UnitConverter from '../components/calculators/UnitConverter'
import LoanCalculator from '../components/calculators/LoanCalculator'
import TipCalculator from '../components/calculators/TipCalculator'
import DateCalculator from '../components/calculators/DateCalculator'

const calculatorComponents = {
    percentage: PercentageCalculator,
    grade: GradeCalculator,
    fraction: FractionCalculator,
    average: AverageCalculator,
    ratio: RatioCalculator,
    time: TimeCalculator,
    discount: DiscountCalculator,
    scientific: ScientificCalculator,
    bmi: BMICalculator,
    age: AgeCalculator,
    currency: CurrencyConverter,
    unit: UnitConverter,
    loan: LoanCalculator,
    tip: TipCalculator,
    date: DateCalculator
}

export default function CalculatorPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const calculator = getCalculatorById(id)

    if (!calculator) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-white mb-4">Calculator not found</h2>
                <Button onClick={() => navigate('/')}>Go Home</Button>
            </div>
        )
    }

    const CalculatorComponent = calculatorComponents[id]
    const Icon = calculator.icon

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 text-gray-400" />
                </button>

                <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-primary-${calculator.color}/20`}>
                        <Icon className={`w-6 h-6 text-primary-${calculator.color}`} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-white">{calculator.name} Calculator</h1>
                        <p className="text-gray-400">{calculator.description}</p>
                    </div>
                </div>
            </div>

            {/* Calculator Component */}
            <CalculatorComponent color={calculator.color} />
        </div>
    )
}
