import { getCalculatorById, getCalculatorsByCategory, calculators } from '../../../utils/calculatorData'

import Button from '../../../components/ui/Button'
import AdSpace from '../../../components/ui/AdSpace'
import { ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Import all calculator components mapping
import PercentageCalculator from '../../../components/calculators/PercentageCalculator'
import GradeCalculator from '../../../components/calculators/GradeCalculator'
import FractionCalculator from '../../../components/calculators/FractionCalculator'
import AverageCalculator from '../../../components/calculators/AverageCalculator'
import RatioCalculator from '../../../components/calculators/RatioCalculator'
import TimeCalculator from '../../../components/calculators/TimeCalculator'
import DiscountCalculator from '../../../components/calculators/DiscountCalculator'
import ScientificCalculator from '../../../components/calculators/ScientificCalculator'
import BMICalculator from '../../../components/calculators/BMICalculator'
import AgeCalculator from '../../../components/calculators/AgeCalculator'
import CurrencyConverter from '../../../components/calculators/CurrencyConverter'
import UnitConverter from '../../../components/calculators/UnitConverter'
import LoanCalculator from '../../../components/calculators/LoanCalculator'
import MortgageCalculator from '../../../components/calculators/MortgageCalculator'
import SimpleInterestCalculator from '../../../components/calculators/SimpleInterestCalculator'
import CompoundInterestCalculator from '../../../components/calculators/CompoundInterestCalculator'
import InvestmentReturnCalculator from '../../../components/calculators/InvestmentReturnCalculator'
import SavingsCalculator from '../../../components/calculators/SavingsCalculator'
import InflationCalculator from '../../../components/calculators/InflationCalculator'
import AreaCalculator from '../../../components/calculators/AreaCalculator'
import VolumeCalculator from '../../../components/calculators/VolumeCalculator'
import QuadraticSolver from '../../../components/calculators/QuadraticSolver'
import PythagoreanCalculator from '../../../components/calculators/PythagoreanCalculator'
import WordCounter from '../../../components/calculators/WordCounter'
import PasswordGenerator from '../../../components/calculators/PasswordGenerator'
import JSONFormatter from '../../../components/calculators/JSONFormatter'
import TipCalculator from '../../../components/calculators/TipCalculator'
import DateCalculator from '../../../components/calculators/DateCalculator'

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
    mortgage: MortgageCalculator,
    'simple-interest': SimpleInterestCalculator,
    'compound-interest': CompoundInterestCalculator,
    investment: InvestmentReturnCalculator,
    savings: SavingsCalculator,
    inflation: InflationCalculator,
    area: AreaCalculator,
    volume: VolumeCalculator,
    quadratic: QuadraticSolver,
    pythagorean: PythagoreanCalculator,
    'word-counter': WordCounter,
    'password-generator': PasswordGenerator,
    'json-formatter': JSONFormatter,
    tip: TipCalculator,
    date: DateCalculator
}

export async function generateMetadata({ params }) {
    const calculator = getCalculatorById(params.id)
    if (!calculator) return { title: 'Calculator Not Found' }

    return {
        title: calculator.seoTitle,
        description: calculator.metaDescription,
    }
}

export async function generateStaticParams() {
    return calculators.map((calc) => ({
        id: calc.id,
    }))
}

export default function CalculatorPage({ params }) {
    const calculator = getCalculatorById(params.id)

    if (!calculator) {
        notFound()
    }

    const CalculatorComponent = calculatorComponents[params.id]
    const Icon = calculator.icon
    const relatedCalculators = getCalculatorsByCategory(calculator.category).filter(c => c.id !== params.id).slice(0, 5)

    return (
        <div className="max-w-7xl mx-auto space-y-6 animate-fade-in px-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-400" />
                    </Link>

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

                <div className="flex items-center gap-2">
                    <Button variant="secondary" className="gap-2">
                        <Share2 className="w-4 h-4" /> Share
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-8">
                    <AdSpace size="728x90" className="opacity-80" />

                    <div className="glass-card p-6 md:p-8">
                        {CalculatorComponent && <CalculatorComponent color={calculator.color} />}
                    </div>

                    <AdSpace size="728x90" className="opacity-80" />

                    {/* Content Section */}
                    <div className="glass-card p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-white">How to Use the {calculator.name} Calculator</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Our {calculator.name} calculator is designed for speed and accuracy. Simply enter your values into the fields above, and the results will update in real-time. Whether you are solving for {calculator.category} problems or just need a quick answer, this tool is optimized for all devices.
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="glass-card p-6 space-y-6">
                        <h3 className="text-xl font-bold text-white">Related {calculator.category} Tools</h3>
                        <div className="space-y-4">
                            {relatedCalculators.map(calc => (
                                <Link
                                    key={calc.id}
                                    href={`/calculator/${calc.id}`}
                                    className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group text-left"
                                >
                                    <div className={`p-2 rounded-lg bg-primary-${calc.color}/10 group-hover:bg-primary-${calc.color}/20 transition-colors`}>
                                        <calc.icon className={`w-5 h-5 text-primary-${calc.color}`} />
                                    </div>
                                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{calc.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <AdSpace size="300x600" className="sticky top-6 opacity-80" />
                </div>
            </div>
        </div>
    )
}
