'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import { analyzeText } from '../../utils/webUtils'
import { Type, FileText, Clock, Hash } from 'lucide-react'

export default function WordCounter({ color }) {
    const [text, setText] = useState('')
    const [stats, setStats] = useState({ words: 0, chars: 0, sentences: 0, readingTime: 0 })

    useEffect(() => {
        setStats(analyzeText(text))
    }, [text])

    return (
        <div className="space-y-8">
            <Card color={color} hover={false} className="p-0 overflow-hidden">
                <textarea
                    className="w-full h-64 p-8 bg-white/5 border-none focus:ring-0 text-white text-lg placeholder:text-white/10 resize-none transition-all"
                    placeholder="Paste or type your text here to analyze..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="glass-card p-6 text-center space-y-2 group hover:bg-white/10 transition-all">
                    <div className="flex justify-center">
                        <FileText className="w-5 h-5 text-primary-mint" />
                    </div>
                    <div className="text-3xl font-black text-white">{stats.words}</div>
                    <div className="text-xs text-gray-500 uppercase font-black">Words</div>
                </div>

                <div className="glass-card p-6 text-center space-y-2 group hover:bg-white/10 transition-all">
                    <div className="flex justify-center">
                        <Type className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-black text-white">{stats.chars}</div>
                    <div className="text-xs text-gray-500 uppercase font-black">Characters</div>
                </div>

                <div className="glass-card p-6 text-center space-y-2 group hover:bg-white/10 transition-all">
                    <div className="flex justify-center">
                        <Hash className="w-5 h-5 text-primary-purple" />
                    </div>
                    <div className="text-3xl font-black text-white">{stats.sentences}</div>
                    <div className="text-xs text-gray-500 uppercase font-black">Sentences</div>
                </div>

                <div className="glass-card p-6 text-center space-y-2 group hover:bg-white/10 transition-all">
                    <div className="flex justify-center">
                        <Clock className="w-5 h-5 text-primary-coral" />
                    </div>
                    <div className="text-3xl font-black text-white">{stats.readingTime}m</div>
                    <div className="text-xs text-gray-500 uppercase font-black">Read Time</div>
                </div>
            </div>
        </div>
    )
}

