'use client';
import { useState } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { formatJSON } from '../../utils/webUtils'
import { FileCode, Check, Copy, AlertCircle } from 'lucide-react'

export default function JSONFormatter({ color }) {
    const [input, setInput] = useState('{"key":"value","array":[1,2,3]}')
    const [output, setOutput] = useState('')
    const [error, setError] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleFormat = () => {
        const formatted = formatJSON(input)
        if (formatted) {
            setOutput(formatted)
            setError(false)
        } else {
            setError(true)
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(output)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Area */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <FileCode className="w-5 h-5 text-primary-mint" />
                        Raw JSON
                    </h3>
                    <Card color={color} hover={false} className="p-0 overflow-hidden min-h-[400px]">
                        <textarea
                            className="w-full h-full min-h-[400px] p-6 bg-white/5 border-none focus:ring-0 text-white font-mono text-sm placeholder:text-white/10 resize-none transition-all"
                            placeholder="Paste your unformatted JSON here..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </Card>
                    <Button onClick={handleFormat} className="w-full py-4 uppercase tracking-widest font-bold">
                        Format JSON
                    </Button>
                </div>

                {/* Output Area */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight">Pretty Result</h3>
                        {output && (
                            <button onClick={copyToClipboard} className="text-primary-mint hover:text-white transition-colors flex items-center gap-1 text-sm font-bold">
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied ? 'COPIED' : 'COPY'}
                            </button>
                        )}
                    </div>
                    <Card color={color} hover={false} className={`p-0 overflow-hidden min-h-[400px] border-2 ${error ? 'border-primary-coral/50' : 'border-transparent'} transition-colors`}>
                        <div className="relative h-full">
                            <pre className="w-full h-full min-h-[400px] p-6 bg-black/40 text-primary-mint font-mono text-sm overflow-auto whitespace-pre-wrap">
                                {error ? (
                                    <div className="flex flex-col items-center justify-center h-full pt-20 gap-4 text-primary-coral">
                                        <AlertCircle className="w-12 h-12" />
                                        <span className="font-bold">Invalid JSON Format</span>
                                    </div>
                                ) : (
                                    output || '// Formatted output will appear here'
                                )}
                            </pre>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

