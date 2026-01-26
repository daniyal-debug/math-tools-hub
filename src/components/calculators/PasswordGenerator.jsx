'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { generatePassword } from '../../utils/webUtils'
import { Lock, RefreshCw, Copy, Check } from 'lucide-react'

export default function PasswordGenerator({ color }) {
    const [length, setLength] = useState(16)
    const [options, setOptions] = useState({ uppercase: true, lowercase: true, numbers: true, symbols: true })
    const [password, setPassword] = useState('')
    const [copied, setCopied] = useState(false)

    const handleGenerate = () => {
        setPassword(generatePassword(length, options))
        setCopied(false)
    }

    useEffect(handleGenerate, [length, options])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-400">Password Length: <span className="text-white font-bold">{length}</span></label>
                        </div>
                        <input
                            type="range" min="4" max="50" value={length}
                            onChange={(e) => setLength(e.target.value)}
                            className="range range-primary range-sm accent-primary-mint"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(options).map(([key, val]) => (
                            <label key={key} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={val}
                                    onChange={() => setOptions({ ...options, [key]: !val })}
                                    className="checkbox checkbox-primary border-white/20"
                                />
                                <span className="text-sm font-medium text-white capitalize">{key}</span>
                            </label>
                        ))}
                    </div>
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-6 border-primary-mint/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <Lock className="w-20 h-20 text-white/5 -rotate-12" />
                        </div>
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest relative z-10">Secure Password</span>
                        <div className="text-3xl md:text-4xl font-mono font-black text-white break-all bg-black/20 p-6 rounded-2xl border border-white/10 select-all relative z-10">
                            {password}
                        </div>

                        <div className="flex gap-4 relative z-10">
                            <Button onClick={copyToClipboard} className="flex-1 gap-2 py-4">
                                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                {copied ? 'Copied' : 'Copy'}
                            </Button>
                            <Button variant="secondary" onClick={handleGenerate} className="px-6">
                                <RefreshCw className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-card p-8 bg-gradient-to-r from-primary-mint/10 to-transparent border-none">
                <h4 className="text-lg font-bold text-white mb-2">Security Tip</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Always use passwords with at least 12 characters and a mix of letters, numbers, and symbols. We generate these passwords locally in your browser—nothing is ever sent to our servers.
                </p>
            </div>
        </div>
    )
}

