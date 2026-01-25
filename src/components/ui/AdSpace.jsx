export default function AdSpace({ className = '', size = 'responsive', label = 'Advertisement' }) {
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-2 py-6 ${className}`}>
            <div className="w-full max-w-[728px] min-h-[90px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden relative">
                {/* Placeholder for AdSense Code */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">{label}</p>
                        <p className="text-sm text-gray-400">Google Ad Space</p>
                        <p className="text-[10px] text-gray-600 mt-1">({size})</p>
                    </div>
                </div>

                {/* Actual AdSense Script would go here */}
                {/* 
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        */}
            </div>
        </div>
    )
}
