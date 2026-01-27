export default function Home() {
    return (
        <div className="py-20 text-center space-y-8">
            <h1 className="text-6xl font-bold text-white">Math Tools Hub (Safe Mode)</h1>
            <p className="text-xl text-gray-400">If you see this, the homepage is building correctly.</p>
            <div className="flex justify-center gap-4">
                <a href="/sitemap" className="text-blue-400 hover:underline">Sitemap</a>
                <a href="/contact" className="text-blue-400 hover:underline">Contact</a>
            </div>
        </div>
    )
}
