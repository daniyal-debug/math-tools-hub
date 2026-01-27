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
    CalendarDays,
    Hash,
    Type,
    Code,
    Lock,
    Globe,
    FileJson,
    Shapes,
    Triangle,
    Pi,
    Zap
} from 'lucide-react'

export const categories = [
    {
        id: 'math',
        name: 'Math & Percentage',
        description: 'Basic and advanced mathematical tools for everyday use.',
        icon: Percent,
        color: 'olive'
    },
    {
        id: 'finance',
        name: 'Finance & Money',
        description: 'Calculators for loans, investments, taxes, and money management.',
        icon: DollarSign,
        color: 'green'
    },
    {
        id: 'units',
        name: 'Unit Converters',
        description: 'Convert between different units of measurement instantly.',
        icon: Ruler,
        color: 'cyan'
    },
    {
        id: 'academic',
        name: 'Academic & Geometry',
        description: 'Tools for students, including geometry solvers and grade trackers.',
        icon: GraduationCap,
        color: 'purple'
    },
    {
        id: 'utility',
        name: 'Daily Utilities',
        description: 'Useful tools for daily tasks like age and date calculation.',
        icon: CalendarDays,
        color: 'orange'
    },
    {
        id: 'webdev',
        name: 'Web & Developer',
        description: 'Essential utilities for programmers and web designers.',
        icon: Code,
        color: 'indigo'
    }
]

export const calculators = [
    // Math & Percentage
    {
        id: 'percentage',
        name: 'Percentage',
        description: 'Calculate percentages, percentage of numbers, and percentage changes.',
        seoTitle: 'Percentage Calculator - Free Online Math Tool',
        metaDescription: 'Easy to use online percentage calculator. Calculate percentage of a number, percentage change, and more with instant results.',
        icon: Percent,
        color: 'olive',
        category: 'math'
    },
    {
        id: 'fraction',
        name: 'Fraction',
        description: 'Add, subtract, multiply, and divide fractions.',
        seoTitle: 'Fraction Calculator - Add, Subtract, Multiply Fractions',
        metaDescription: 'Complete fraction calculator for basic and complex fraction operations. Includes decimal conversion.',
        icon: Divide,
        color: 'coral',
        category: 'math'
    },
    {
        id: 'average',
        name: 'Average',
        description: 'Calculate mean, median, and mode of numbers.',
        seoTitle: 'Average Calculator - Calculate Mean, Median & Mode',
        metaDescription: 'Find the average of a series of numbers easily. Supports mean, median, mode, and range calculations.',
        icon: TrendingUp,
        color: 'mint',
        category: 'math'
    },
    {
        id: 'ratio',
        name: 'Ratio',
        description: 'Solve ratio and proportion problems.',
        seoTitle: 'Ratio Calculator - Solve Proportions Online',
        metaDescription: 'Solve ratios and proportions quickly. Find missing values in complex ratios with our free online tool.',
        icon: Scale,
        color: 'blue',
        category: 'math'
    },
    {
        id: 'scientific',
        name: 'Scientific',
        description: 'Advanced scientific calculations.',
        seoTitle: 'Scientific Calculator - Online Advanced Math Tool',
        metaDescription: 'A full-featured scientific calculator in your browser. Handles trigonometry, exponents, and logs.',
        icon: CalcIcon,
        color: 'indigo',
        category: 'math'
    },

    // Finance & Money
    {
        id: 'discount',
        name: 'Discount',
        description: 'Calculate discounts and final prices.',
        seoTitle: 'Discount Calculator - Calculate Sale Price & Savings',
        metaDescription: 'Save money with our discount calculator. Easily find the final price after percentage-off coupons or sales.',
        icon: Tag,
        color: 'pink',
        category: 'finance'
    },
    {
        id: 'currency',
        name: 'Currency',
        description: 'Convert between currencies.',
        seoTitle: 'Currency Converter - Real-Time Exchange Rates',
        metaDescription: 'Fast and reliable currency converter. Get the latest exchange rates for all major world currencies.',
        icon: DollarSign,
        color: 'orange',
        category: 'finance'
    },
    {
        id: 'investment',
        name: 'Investment',
        description: 'Calculate future wealth based on initial investment and monthly contributions.',
        seoTitle: 'Investment Return Calculator - Future Value & ROI Tool',
        metaDescription: 'Plan your long-term wealth with our investment calculator. Estimate future value with compound interest and recurring monthly contributions.',
        icon: TrendingUp,
        color: 'mint',
        category: 'finance'
    },
    {
        id: 'inflation',
        name: 'Inflation',
        description: 'Calculate the impact of inflation on your purchasing power over time.',
        seoTitle: 'Inflation Calculator - Purchasing Power & Future Value Tool',
        metaDescription: 'See how inflation affects your money. Calculate the future cost of goods and the historical buying power of the dollar.',
        icon: TrendingUp,
        color: 'coral',
        category: 'finance'
    },
    {
        id: 'savings',
        name: 'Savings',
        description: 'Plan your savings and see how interest helps your money grow.',
        seoTitle: 'Savings Calculator - Calculate Future Savings Balance',
        metaDescription: 'Calculate the future value of your savings with our easy tool. See how different interest rates impact your financial goals.',
        icon: Coins,
        color: 'blue',
        category: 'finance'
    },
    {
        id: 'simple-interest',
        name: 'Simple Interest',
        description: 'Calculate interest on a principal amount over time.',
        seoTitle: 'Simple Interest Calculator - Easy P*R*T Calculation',
        metaDescription: 'Calculate simple interest on any loan or investment quickly. Perfect for basic financial calculations and educational use.',
        icon: Percent,
        color: 'mint',
        category: 'finance'
    },
    {
        id: 'compound-interest',
        name: 'Compound Interest',
        description: 'Calculate how your money grows over time with compounding.',
        seoTitle: 'Compound Interest Calculator - Calculate Future Value',
        metaDescription: 'Visualize your wealth growth with our compound interest calculator. Supports different compounding frequencies and yearly savings.',
        icon: TrendingUp,
        color: 'purple',
        category: 'finance'
    },
    {
        id: 'mortgage',
        name: 'Mortgage',
        description: 'Calculate mortgage payments with amortization schedules.',
        seoTitle: 'Mortgage Calculator - Home Loan EMI & Payoff Schedule',
        metaDescription: 'Calculate your home loan payments with our mortgage calculator. Includes full amortization schedules and interest breakdown.',
        icon: DollarSign,
        color: 'green',
        category: 'finance'
    },
    {
        id: 'loan',
        name: 'Loan',
        description: 'Calculate loan payments and interest.',
        seoTitle: 'Loan Calculator - Calculate Monthly EMI & Interest',
        metaDescription: 'Plan your finances with our loan calculator. Calculate monthly payments (EMI), total interest, and payoff dates.',
        icon: CreditCard,
        color: 'red',
        category: 'finance'
    },
    {
        id: 'tip',
        name: 'Tip',
        description: 'Calculate tips and split bills.',
        seoTitle: 'Tip Calculator - Split Bill & Calculate Gratuity',
        metaDescription: 'Never struggle with group bills again. Quickly calculate the tip and split the total between multiple people.',
        icon: Coins,
        color: 'amber',
        category: 'finance'
    },

    // Health (Temporary Category until more are added)
    {
        id: 'bmi',
        name: 'BMI',
        description: 'Calculate Body Mass Index.',
        seoTitle: 'BMI Calculator - Check Your Body Mass Index',
        metaDescription: 'Free online BMI calculator. Determine your body mass index based on height and weight for adults.',
        icon: Activity,
        color: 'green',
        category: 'utility'
    },

    // Utility
    {
        id: 'age',
        name: 'Age',
        description: 'Calculate age from birth date.',
        seoTitle: 'Age Calculator - Calculate Exact Age Online',
        metaDescription: 'Calculate your exact age in years, months, days, hours, and minutes with our free birthday calculator.',
        icon: Calendar,
        color: 'yellow',
        category: 'utility'
    },
    {
        id: 'time',
        name: 'Time',
        description: 'Add and subtract time durations.',
        seoTitle: 'Time Calculator - Add or Subtract Time & Hours',
        metaDescription: 'Easily add or subtract hours, minutes, and seconds. Great for tracking work hours or flight durations.',
        icon: Clock,
        color: 'teal',
        category: 'utility'
    },
    {
        id: 'date',
        name: 'Date',
        description: 'Calculate date differences.',
        seoTitle: 'Date Calculator - Days Between Two Dates',
        metaDescription: 'Find the number of days between two dates or add days to a specific date with our date utility.',
        icon: CalendarDays,
        color: 'violet',
        category: 'utility'
    },
    {
        id: 'unit',
        name: 'Unit',
        description: 'Convert between units of measurement.',
        seoTitle: 'Unit Converter - Length, Weight & Volume Conversion',
        metaDescription: 'Comprehensive unit conversion tool. Convert meters to feet, kg to lbs, Celsius to Fahrenheit, and more.',
        icon: Ruler,
        color: 'cyan',
        category: 'units'
    },

    // Web & Developer
    {
        id: 'word-counter',
        name: 'Word Counter',
        description: 'Analyze text for word count, characters, sentences, and reading time.',
        seoTitle: 'Word Counter - Free Online Text Analysis Tool',
        metaDescription: 'Count words, characters, and sentences instantly. Includes reading time estimation and character analysis for writers and developers.',
        icon: FileJson,
        color: 'indigo',
        category: 'webdev'
    },
    {
        id: 'password-generator',
        name: 'Password Generator',
        description: 'Generate secure, random passwords with custom requirements.',
        seoTitle: 'Random Password Generator - Create Secure Passwords',
        metaDescription: 'Protect your accounts with strong, random passwords. Customize length and characters. Generated 100% locally for maximum security.',
        icon: Lock,
        color: 'mint',
        category: 'webdev'
    },
    {
        id: 'json-formatter',
        name: 'JSON Formatter',
        description: 'Prettify and format messy JSON code for better readability.',
        seoTitle: 'JSON Formatter & Validator - Prettify JSON Online',
        metaDescription: 'Format, validate, and prettify JSON strings instantly. Improve readability of complex JSON structures with our free developer tool.',
        icon: Code,
        color: 'purple',
        category: 'webdev'
    },
    // Academic & Geometry
    {
        id: 'area',
        name: 'Area',
        description: 'Calculate area and perimeter for circles, rectangles, and triangles.',
        seoTitle: 'Area & Perimeter Calculator - Geometric Shape Tool',
        metaDescription: 'Calculate the area and perimeter of various geometric shapes instantly. Supports circles, rectangles, and triangles with high precision.',
        icon: Shapes,
        color: 'purple',
        category: 'academic'
    },
    {
        id: 'volume',
        name: 'Volume',
        description: 'Calculate volume and surface area for 3D shapes.',
        seoTitle: 'Volume & Surface Area Calculator - 3D Shape Solver',
        metaDescription: 'Find the volume and surface area of spheres, cylinders, and cubes. Easy to use 3D geometry calculator for students and pros.',
        icon: Ruler,
        color: 'cyan',
        category: 'academic'
    },
    {
        id: 'quadratic',
        name: 'Quadratic',
        description: 'Solve quadratic equations and find real roots.',
        seoTitle: 'Quadratic Equation Solver - Find x-intercepts & Roots',
        metaDescription: 'Solve any quadratic equation in standard form (ax² + bx + c = 0). Get instant roots and discriminant values with our free tool.',
        icon: Pi,
        color: 'coral',
        category: 'academic'
    },
    {
        id: 'pythagorean',
        name: 'Pythagorean',
        description: 'Solve for the hypotenuse or sides of a right triangle.',
        seoTitle: 'Pythagorean Theorem Calculator - Solve Right Triangles',
        metaDescription: 'Quickly find the third side of a right triangle using the Pythagorean Theorem (a² + b² = c²). Simple and accurate geometric tool.',
        icon: Triangle,
        color: 'mint',
        category: 'academic'
    },
    {
        id: 'grade',
        name: 'Grade',
        description: 'Calculate final grades and weighted averages.',
        seoTitle: 'Grade Calculator - Weighted Average & GPA Tool',
        metaDescription: 'Keep track of your academic progress. Calculate weighted grades and find out what you need on your final exam.',
        icon: GraduationCap,
        color: 'purple',
        category: 'academic'
    }
]

export const getCalculatorById = (id) => {
    return calculators.find(calc => calc.id === id)
}

export const getCalculatorsByCategory = (categoryId) => {
    return calculators.filter(calc => calc.category === categoryId)
}

export const getCategoryById = (id) => {
    return categories.find(cat => cat.id === id)
}
