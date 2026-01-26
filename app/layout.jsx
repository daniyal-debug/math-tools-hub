import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../src/components/layout/Header'
import Footer from '../src/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Math Tools Hub',
    description: 'A premium suite of lightning-fast calculators built for precision and speed.',
}

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen relative overflow-x-hidden">
                    <Header />
                    <main className="container mx-auto px-4 py-8">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
