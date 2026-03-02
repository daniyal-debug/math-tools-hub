'use client'

import { ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function UnitInput({ label, value, onChange, units, selectedUnit, onUnitChange, color = 'cyan', readOnly = false }) {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
                setSearch('')
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const selected = units.find(u => u.id === selectedUnit)
    const filteredUnits = units.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.symbol.toLowerCase().includes(search.toLowerCase())
    )

    // Group units if they have a 'group' property
    const hasGroups = units.some(u => u.group)
    const grouped = hasGroups
        ? filteredUnits.reduce((acc, u) => {
            const g = u.group || 'Other'
            if (!acc[g]) acc[g] = []
            acc[g].push(u)
            return acc
        }, {})
        : null

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">{label}</label>
            <div className="flex gap-2">
                {/* Number Input */}
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    readOnly={readOnly}
                    placeholder="0"
                    className={`
                        flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-lg font-mono
                        placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary-${color}/40
                        focus:border-primary-${color}/50 transition-all duration-300
                        ${readOnly ? 'cursor-default opacity-80' : ''}
                    `}
                    step="any"
                />

                {/* Unit Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => { setIsOpen(!isOpen); setSearch('') }}
                        className={`
                            flex items-center gap-2 px-4 py-3.5 rounded-xl border border-white/10
                            bg-white/5 hover:bg-white/10 transition-all duration-300 min-w-[120px]
                            text-white font-medium text-sm whitespace-nowrap
                        `}
                        type="button"
                    >
                        <span className={`text-primary-${color} font-bold`}>{selected?.symbol}</span>
                        <span className="text-gray-400 hidden sm:inline truncate max-w-[80px]">{selected?.name}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 top-full mt-2 w-64 max-h-72 overflow-hidden bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 flex flex-col">
                            {/* Search */}
                            <div className="p-2 border-b border-white/10">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search units..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
                                    autoFocus
                                />
                            </div>
                            {/* Options */}
                            <div className="overflow-y-auto flex-1">
                                {hasGroups ? (
                                    Object.entries(grouped).map(([group, groupUnits]) => (
                                        <div key={group}>
                                            <div className="px-3 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider bg-white/[0.02]">{group}</div>
                                            {groupUnits.map(u => (
                                                <button
                                                    key={u.id}
                                                    onClick={() => { onUnitChange(u.id); setIsOpen(false); setSearch('') }}
                                                    className={`w-full text-left px-3 py-2.5 flex items-center gap-3 hover:bg-white/10 transition-colors ${u.id === selectedUnit ? `bg-primary-${color}/10` : ''}`}
                                                    type="button"
                                                >
                                                    <span className={`text-sm font-bold min-w-[40px] ${u.id === selectedUnit ? `text-primary-${color}` : 'text-gray-300'}`}>{u.symbol}</span>
                                                    <span className="text-sm text-gray-400">{u.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    ))
                                ) : (
                                    filteredUnits.map(u => (
                                        <button
                                            key={u.id}
                                            onClick={() => { onUnitChange(u.id); setIsOpen(false); setSearch('') }}
                                            className={`w-full text-left px-3 py-2.5 flex items-center gap-3 hover:bg-white/10 transition-colors ${u.id === selectedUnit ? `bg-primary-${color}/10` : ''}`}
                                            type="button"
                                        >
                                            <span className={`text-sm font-bold min-w-[40px] ${u.id === selectedUnit ? `text-primary-${color}` : 'text-gray-300'}`}>{u.symbol}</span>
                                            <span className="text-sm text-gray-400">{u.name}</span>
                                        </button>
                                    ))
                                )}
                                {filteredUnits.length === 0 && (
                                    <div className="px-3 py-4 text-sm text-gray-500 text-center">No units found</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
