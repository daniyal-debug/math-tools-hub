'use client'

import { useState, useCallback } from 'react'
import { ArrowDownUp, Copy, RotateCcw, Check } from 'lucide-react'
import UnitInput from './UnitInput'
import ConversionTable from './ConversionTable'
import { convert, getQuickConvertTable, formatNumber } from '../../utils/conversionEngine'
import { getConverterById } from '../../utils/unitDefinitions'

export default function ConverterWidget({ categoryId }) {
    // Look up category data client-side (avoids passing functions as props from Server→Client)
    const category = getConverterById(categoryId)

    const defaultFrom = category?.units[0]?.id
    const defaultTo = category?.units.length > 1 ? category.units[1]?.id : defaultFrom

    const [fromUnit, setFromUnit] = useState(defaultFrom)
    const [toUnit, setToUnit] = useState(defaultTo)
    const [fromValue, setFromValue] = useState('')
    const [copied, setCopied] = useState(false)
    const [swapAnim, setSwapAnim] = useState(false)

    if (!category) return null

    // Compute conversion
    const { result, formula, error } = convert(fromValue, fromUnit, toUnit, category.id)

    // Quick table
    const quickTable = getQuickConvertTable(fromUnit, toUnit, category.id)

    const fromUnitObj = category.units.find(u => u.id === fromUnit)
    const toUnitObj = category.units.find(u => u.id === toUnit)

    const handleSwap = () => {
        setSwapAnim(true)
        setTimeout(() => setSwapAnim(false), 400)
        const prevFrom = fromUnit
        const prevTo = toUnit
        setFromUnit(prevTo)
        setToUnit(prevFrom)
        if (result !== null) {
            setFromValue(formatNumber(result))
        }
    }

    const handleCopy = () => {
        if (result !== null) {
            navigator.clipboard.writeText(formatNumber(result))
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    const handleReset = () => setFromValue('')

    return (
        <div className="space-y-6">
            {/* Converter Card */}
            <div className="space-y-4">
                {/* FROM */}
                <UnitInput
                    label="From"
                    value={fromValue}
                    onChange={setFromValue}
                    units={category.units}
                    selectedUnit={fromUnit}
                    onUnitChange={setFromUnit}
                    color={category.color}
                />

                {/* Swap Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSwap}
                        className={`
                            p-3 rounded-full bg-white/5 border border-white/10
                            hover:bg-primary-${category.color}/10 hover:border-primary-${category.color}/30
                            transition-all duration-300 group
                        `}
                        title="Swap units"
                        type="button"
                    >
                        <ArrowDownUp className={`
                            w-5 h-5 text-gray-400 group-hover:text-primary-${category.color}
                            transition-all duration-300
                            ${swapAnim ? 'rotate-180' : ''}
                        `} />
                    </button>
                </div>

                {/* TO (read-only output) */}
                <UnitInput
                    label="To"
                    value={result !== null ? formatNumber(result) : ''}
                    onChange={() => { }}
                    units={category.units}
                    selectedUnit={toUnit}
                    onUnitChange={setToUnit}
                    color={category.color}
                    readOnly
                />
            </div>

            {/* Error */}
            {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            {/* Formula & Actions */}
            {formula && !error && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-sm text-gray-400 font-mono">{formula}</p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-gray-300 transition-all"
                            type="button"
                        >
                            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-gray-300 transition-all"
                            type="button"
                        >
                            <RotateCcw className="w-3.5 h-3.5" /> Reset
                        </button>
                    </div>
                </div>
            )}

            {/* Quick Conversion Table */}
            {fromUnitObj && toUnitObj && (
                <div className="space-y-3 pt-2">
                    <h3 className="text-lg font-semibold text-gray-300">
                        {fromUnitObj.name} to {toUnitObj.name} — Quick Reference
                    </h3>
                    <ConversionTable
                        data={quickTable}
                        fromSymbol={fromUnitObj.symbol}
                        toSymbol={toUnitObj.symbol}
                        color={category.color}
                    />
                </div>
            )}
        </div>
    )
}

