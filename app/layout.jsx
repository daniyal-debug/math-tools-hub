import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    metadataBase: new URL('https://mathtoolshub.com'),
    title: {
        default: 'Math Tools Hub - 50+ Free Online Calculators',
        template: '%s | Math Tools Hub'
    },
    description: 'A premium suite of lightning-fast calculators built for precision and speed. Free online math, finance, health, and unit conversion tools.',
    keywords: ['calculators', 'online tools', 'math tools', 'finance calculator', 'unit converter', 'free calculator'],
    authors: [{ name: 'Math Tools Hub' }],
    creator: 'Math Tools Hub',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        title: 'Math Tools Hub - 50+ Free Online Calculators',
        description: 'A premium suite of lightning-fast calculators built for precision and speed.',
        siteName: 'Math Tools Hub',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Math Tools Hub - 50+ Free Online Calculators',
        description: 'A premium suite of lightning-fast calculators built for precision and speed.',
    },
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
