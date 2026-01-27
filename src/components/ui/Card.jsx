'use client';
export default function Card({ children, className = '', color = 'olive', onClick, hover = true }) {

    const colorClasses = {
        olive: 'from-primary-olive/25 to-primary-olive/5 border-primary-olive/30 ring-primary-olive/20',
        purple: 'from-primary-purple/25 to-primary-purple/5 border-primary-purple/30 ring-primary-purple/20',
        coral: 'from-primary-coral/25 to-primary-coral/5 border-primary-coral/30 ring-primary-coral/20',
        mint: 'from-primary-mint/25 to-primary-mint/5 border-primary-mint/30 ring-primary-mint/20',
        blue: 'from-primary-blue/25 to-primary-blue/5 border-primary-blue/30 ring-primary-blue/20',
        teal: 'from-primary-teal/25 to-primary-teal/5 border-primary-teal/30 ring-primary-teal/20',
        pink: 'from-primary-pink/25 to-primary-pink/5 border-primary-pink/30 ring-primary-pink/20',
        indigo: 'from-primary-indigo/25 to-primary-indigo/5 border-primary-indigo/30 ring-primary-indigo/20',
        green: 'from-primary-green/25 to-primary-green/5 border-primary-green/30 ring-primary-green/20',
        yellow: 'from-primary-yellow/25 to-primary-yellow/5 border-primary-yellow/30 ring-primary-yellow/20',
        orange: 'from-primary-orange/25 to-primary-orange/5 border-primary-orange/30 ring-primary-orange/20',
        cyan: 'from-primary-cyan/25 to-primary-cyan/5 border-primary-cyan/30 ring-primary-cyan/20',
        red: 'from-primary-red/25 to-primary-red/5 border-primary-red/30 ring-primary-red/20',
        amber: 'from-primary-amber/25 to-primary-amber/5 border-primary-amber/30 ring-primary-amber/20',
        violet: 'from-primary-violet/25 to-primary-violet/5 border-primary-violet/30 ring-primary-violet/20',
    }

    return (
        <div
            onClick={onClick}
            className={`
        glass-card bg-gradient-to-br ${colorClasses[color]}
        ${hover ? 'hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/5 ring-1 cursor-pointer' : ''}
        transition-all duration-500 ease-out
        ${className}
      `}
        >
            {children}
        </div>
    )
}
