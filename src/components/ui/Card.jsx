export default function Card({ children, className = '', color = 'olive', onClick, hover = true }) {
    const colorClasses = {
        olive: 'from-primary-olive/20 to-primary-olive/5 border-primary-olive/30',
        purple: 'from-primary-purple/20 to-primary-purple/5 border-primary-purple/30',
        coral: 'from-primary-coral/20 to-primary-coral/5 border-primary-coral/30',
        mint: 'from-primary-mint/20 to-primary-mint/5 border-primary-mint/30',
        blue: 'from-primary-blue/20 to-primary-blue/5 border-primary-blue/30',
        teal: 'from-primary-teal/20 to-primary-teal/5 border-primary-teal/30',
        pink: 'from-primary-pink/20 to-primary-pink/5 border-primary-pink/30',
        indigo: 'from-primary-indigo/20 to-primary-indigo/5 border-primary-indigo/30',
        green: 'from-primary-green/20 to-primary-green/5 border-primary-green/30',
        yellow: 'from-primary-yellow/20 to-primary-yellow/5 border-primary-yellow/30',
        orange: 'from-primary-orange/20 to-primary-orange/5 border-primary-orange/30',
        cyan: 'from-primary-cyan/20 to-primary-cyan/5 border-primary-cyan/30',
        red: 'from-primary-red/20 to-primary-red/5 border-primary-red/30',
        amber: 'from-primary-amber/20 to-primary-amber/5 border-primary-amber/30',
        violet: 'from-primary-violet/20 to-primary-violet/5 border-primary-violet/30',
    }

    return (
        <div
            onClick={onClick}
            className={`
        glass-card bg-gradient-to-br ${colorClasses[color]}
        ${hover ? 'glass-card-hover cursor-pointer' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    )
}
