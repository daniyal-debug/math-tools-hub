import { Heart } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">
                        © 2026 Math Tools Hub. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Velociti Labs
                    </p>
                </div>
            </div>
        </footer>
    )
}
