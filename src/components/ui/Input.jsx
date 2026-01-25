export default function Input({
    label,
    type = 'number',
    value,
    onChange,
    placeholder,
    error,
    ...props
}) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-medium text-gray-300">
                    {label}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
          w-full input-glass
          ${error ? 'border-red-500 focus:ring-red-500/30' : ''}
        `}
                {...props}
            />
            {error && (
                <p className="text-sm text-red-400">{error}</p>
            )}
        </div>
    )
}
