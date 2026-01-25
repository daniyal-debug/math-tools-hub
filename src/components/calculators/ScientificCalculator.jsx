import { useState } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import ResultDisplay from '../ui/ResultDisplay'

export default function ScientificCalculator({ color }) {
    const [display, setDisplay] = useState('0')
    const [equation, setEquation] = useState('')

    const handleNumber = (num) => {
        setDisplay(display === '0' ? num : display + num)
    }

    const handleOperator = (op) => {
        setEquation(display + ' ' + op + ' ')
        setDisplay('0')
    }

    const handleClear = () => {
        setDisplay('0')
        setEquation('')
    }

    const handleEquals = () => {
        try {
            const result = eval(equation + display)
            setDisplay(result.toString())
            setEquation('')
        } catch (e) {
            setDisplay('Error')
        }
    }

    const handleFunction = (func) => {
        const num = parseFloat(display)
        let result
        switch (func) {
            case 'sin': result = Math.sin(num * Math.PI / 180); break
            case 'cos': result = Math.cos(num * Math.PI / 180); break
            case 'tan': result = Math.tan(num * Math.PI / 180); break
            case 'sqrt': result = Math.sqrt(num); break
            case 'square': result = num * num; break
            case 'log': result = Math.log10(num); break
            default: result = num
        }
        setDisplay(result.toString())
    }

    const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
    ]

    const functions = ['sin', 'cos', 'tan', 'sqrt', 'square', 'log']

    return (
        <div className="space-y-6">
            <ResultDisplay value={equation + display} label="Display" />

            <Card color={color} hover={false} className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-2">
                    {functions.map(func => (
                        <Button key={func} onClick={() => handleFunction(func)} variant="secondary" className="text-sm">
                            {func}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {buttons.flat().map((btn, i) => (
                        <Button
                            key={i}
                            onClick={() => {
                                if (btn === '=') handleEquals()
                                else if (['+', '-', '*', '/'].includes(btn)) handleOperator(btn)
                                else handleNumber(btn)
                            }}
                            variant={['+', '-', '*', '/', '='].includes(btn) ? 'primary' : 'secondary'}
                        >
                            {btn}
                        </Button>
                    ))}
                </div>

                <Button onClick={handleClear} variant="danger" className="w-full">Clear</Button>
            </Card>
        </div>
    )
}
