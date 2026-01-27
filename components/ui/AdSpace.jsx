'use client';

export default function AdSpace({ className = '', size = 'responsive', label = 'Advertisement' }) {

    // Standard AdSense Sizes
    const sizes = {
        '728x90': 'min-h-[90px] max-w-[728px]',
        '300x250': 'min-h-[250px] max-w-[300px]',
        '300x600': 'min-h-[600px] max-w-[300px]',
        'responsive': 'min-h-[90px] w-full'
    }

    const sizeClass = sizes[size] || sizes.responsive

    return (
        <div className={`w-full flex flex-col items-center justify-center gap-2 py-6 overflow-hidden ${className}`}>
            <div className={`${sizeClass} bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="text-center relative z-10">
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-black mb-1">{label}</p>
                    <div className="flex items-center gap-2 justify-center text-gray-400">
                        <span className="w-4 h-[1px] bg-gray-700" />
                        <span className="text-xs font-medium">Google AdSpace</span>
                        <span className="w-4 h-[1px] bg-gray-700" />
                    </div>
                </div>

                {/* 
                <ins className="adsbygoogle"
                     style={{ display: 'block', textAlign: 'center' }}
                     data-ad-layout="in-article"
                     data-ad-format="fluid"
                     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                     data-ad-slot="XXXXXXXXXX"></ins>
                */}
            </div>
        </div>
    )
}
