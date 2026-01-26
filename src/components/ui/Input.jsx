export default function Input({ label, type = 'text', value, onChange, placeholder, className = '', ...props }) {
    return (
        <div className="form-control w-full space-y-2">
            {label && (
                <label className="label py-0">
                    <span className="label-text text-gray-400 font-medium">{label}</span>
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`input input-bordered bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10 text-white placeholder:text-white/20 transition-all duration-300 w-full ${className}`}
                {...props}
            />
        </div>
    )
}
