/**
 * Finance Mortgage/Loan Calculation Utilities
 */

export const calculateEMI = (principal, annualRate, years) => {
    const p = parseFloat(principal)
    const r = parseFloat(annualRate) / 100 / 12
    const n = parseFloat(years) * 12

    if (!p || !r || !n) return null

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPayment = emi * n
    const totalInterest = totalPayment - p

    return {
        monthlyPayment: emi,
        totalPayment,
        totalInterest
    }
}

export const calculateAmortizationSchedule = (principal, annualRate, years) => {
    const p = parseFloat(principal)
    const r = parseFloat(annualRate) / 100 / 12
    const n = parseFloat(years) * 12

    if (!p || !r || !n) return []

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    let balance = p
    const schedule = []

    for (let i = 1; i <= n; i++) {
        const interest = balance * r
        const principalPaid = emi - interest
        balance -= principalPaid

        schedule.push({
            month: i,
            payment: emi,
            principal: principalPaid,
            interest: interest,
            balance: Math.max(0, balance)
        })
    }

    return schedule
}

export const calculateSimpleInterest = (principal, annualRate, years) => {
    const p = parseFloat(principal)
    const r = parseFloat(annualRate) / 100
    const t = parseFloat(years)

    if (!p || !r || !t) return null

    const interest = p * r * t
    const total = p + interest

    return {
        interest,
        total
    }
}

export const calculateCompoundInterest = (principal, annualRate, years, frequency = 12) => {
    const p = parseFloat(principal)
    const r = parseFloat(annualRate) / 100
    const t = parseFloat(years)
    const n = parseInt(frequency)

    if (!p || !r || !t || !n) return null

    const total = p * Math.pow(1 + r / n, n * t)
    const interest = total - p

    return {
        interest,
        total
    }
}

export const calculateInvestmentReturn = (initial, monthly, rate, years) => {
    const p = parseFloat(initial) || 0
    const m = parseFloat(monthly) || 0
    const r = parseFloat(rate) / 100 / 12
    const n = parseFloat(years) * 12

    if (!r || !n) return null

    // Future Value of a Series: FV = [ P(1+r)^n ] + [ PMT * (((1+r)^n - 1) / r) ]
    const fvPrincipal = p * Math.pow(1 + r, n)
    const fvSeries = m * ((Math.pow(1 + r, n) - 1) / r)
    const total = fvPrincipal + fvSeries
    const invested = p + (m * n)
    const profit = total - invested

    return {
        total,
        invested,
        profit
    }
}
