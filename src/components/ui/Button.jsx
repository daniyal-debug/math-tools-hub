export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
    const variants = {
        primary: 'btn-primary shadow-lg shadow-primary-olive/20 hover:shadow-primary-olive/40',
        secondary: 'btn-outline border-white/20 text-white hover:bg-white/10 hover:border-white/30',
        danger: 'btn-error text-white hover:scale-105',
        ghost: 'btn-ghost text-gray-400 hover:text-white',
    }

    return (
        <button
            onClick={onClick}
            className={`btn normal-case transition-all duration-300 active:scale-95 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
