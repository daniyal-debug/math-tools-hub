export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
    const variants = {
        primary: 'bg-gradient-to-r from-primary-olive to-primary-mint text-black font-semibold',
        secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    }

    return (
        <button
            onClick={onClick}
            className={`btn-primary ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
