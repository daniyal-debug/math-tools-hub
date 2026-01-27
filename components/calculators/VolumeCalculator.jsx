'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { calculateSphereVolume, calculateCylinderVolume, calculateCubeVolume } from '../../utils/mathUtils'
import { Ruler } from 'lucide-react'

export default function VolumeCalculator({ color }) {
    const [shape, setShape] = useState('sphere')
    const [val1, setVal1] = useState('5')
    const [val2, setVal2] = useState('10')
    const [results, setResults] = useState(null)

    useEffect(() => {
        let res = null
        const v1 = parseFloat(val1)
        const v2 = parseFloat(val2)

        if (shape === 'sphere' && v1) res = calculateSphereVolume(v1)
        if (shape === 'cylinder' && v1 && v2) res = calculateCylinderVolume(v1, v2)
        if (shape === 'cube' && v1) res = calculateCubeVolume(v1)

        setResults(res)
    }, [shape, val1, val2])

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-6">
                    <div className="form-control space-y-2">
                        <label className="label py-0">
                            <span className="label-text text-gray-400 font-medium">Select 3D Shape</span>
                        </label>
                        <select
                            className="select select-bordered bg-white/5 border-white/10 text-white rounded-xl"
                            value={shape}
                            onChange={(e) => setShape(e.target.value)}
                        >
                            <option value="sphere">Sphere</option>
                            <option value="cylinder">Cylinder</option>
                            <option value="cube">Cube</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        <Input
                            label={shape === 'sphere' ? 'Radius' : shape === 'cylinder' ? 'Radius' : 'Side Length'}
                            value={val1}
                            onChange={(e) => setVal1(e.target.value)}
                        />
                        {shape === 'cylinder' && (
                            <Input
                                label="Height"
                                value={val2}
                                onChange={(e) => setVal2(e.target.value)}
                            />
                        )}
                    </div>
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-4 border-primary-mint/20">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Calculated Volume</span>
                        <div className="text-6xl font-black text-white">
                            {results ? results.volume.toFixed(2) : '0.00'}
                        </div>
                    </div>

                    {results && results.surfaceArea && (
                        <ResultDisplay
                            value={results.surfaceArea.toFixed(2)}
                            label="Surface Area"
                        />
                    )}
                </div>
            </div>

            <div className="glass-card p-8 bg-gradient-to-br from-primary-cyan/10 to-transparent">
                <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <Ruler className="w-10 h-10 text-primary-cyan" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">3D Measurement Guide</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Volume is measured in cubic units (e.g., cm³, m³). Surface area is the total area of all outward-facing surfaces of the object.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

