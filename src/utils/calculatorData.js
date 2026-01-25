import {
    Percent,
    GraduationCap,
    Divide,
    TrendingUp,
    Scale,
    Clock,
    Tag,
    Calculator as CalcIcon,
    Activity,
    Calendar,
    DollarSign,
    Ruler,
    CreditCard,
    Coins,
    CalendarDays
} from 'lucide-react'

export const calculators = [
    {
        id: 'percentage',
        name: 'Percentage',
        description: 'Calculate percentages, percentage of numbers, and percentage changes',
        icon: Percent,
        color: 'olive',
        category: 'Basic'
    },
    {
        id: 'grade',
        name: 'Grade',
        description: 'Calculate final grades and convert points to letter grades',
        icon: GraduationCap,
        color: 'purple',
        category: 'Education'
    },
    {
        id: 'fraction',
        name: 'Fraction',
        description: 'Add, subtract, multiply, and divide fractions',
        icon: Divide,
        color: 'coral',
        category: 'Basic'
    },
    {
        id: 'average',
        name: 'Average',
        description: 'Calculate mean, median, and mode of numbers',
        icon: TrendingUp,
        color: 'mint',
        category: 'Statistics'
    },
    {
        id: 'ratio',
        name: 'Ratio',
        description: 'Solve ratio and proportion problems',
        icon: Scale,
        color: 'blue',
        category: 'Basic'
    },
    {
        id: 'time',
        name: 'Time',
        description: 'Add and subtract time durations',
        icon: Clock,
        color: 'teal',
        category: 'Utility'
    },
    {
        id: 'discount',
        name: 'Discount',
        description: 'Calculate discounts and final prices',
        icon: Tag,
        color: 'pink',
        category: 'Finance'
    },
    {
        id: 'scientific',
        name: 'Scientific',
        description: 'Advanced scientific calculations',
        icon: CalcIcon,
        color: 'indigo',
        category: 'Advanced'
    },
    {
        id: 'bmi',
        name: 'BMI',
        description: 'Calculate Body Mass Index',
        icon: Activity,
        color: 'green',
        category: 'Health'
    },
    {
        id: 'age',
        name: 'Age',
        description: 'Calculate age from birth date',
        icon: Calendar,
        color: 'yellow',
        category: 'Utility'
    },
    {
        id: 'currency',
        name: 'Currency',
        description: 'Convert between currencies',
        icon: DollarSign,
        color: 'orange',
        category: 'Finance'
    },
    {
        id: 'unit',
        name: 'Unit',
        description: 'Convert between units of measurement',
        icon: Ruler,
        color: 'cyan',
        category: 'Utility'
    },
    {
        id: 'loan',
        name: 'Loan',
        description: 'Calculate loan payments and interest',
        icon: CreditCard,
        color: 'red',
        category: 'Finance'
    },
    {
        id: 'tip',
        name: 'Tip',
        description: 'Calculate tips and split bills',
        icon: Coins,
        color: 'amber',
        category: 'Finance'
    },
    {
        id: 'date',
        name: 'Date',
        description: 'Calculate date differences and add/subtract days',
        icon: CalendarDays,
        color: 'violet',
        category: 'Utility'
    }
]

export const getCalculatorById = (id) => {
    return calculators.find(calc => calc.id === id)
}

export const getCalculatorsByCategory = (category) => {
    return calculators.filter(calc => calc.category === category)
}
