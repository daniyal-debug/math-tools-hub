export const metadata = {
    title: 'Privacy Policy - Math Tools Hub',
    description: 'Our commitment to your privacy and how we handle your data at Math Tools Hub.',
}

export default function Privacy() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 animate-fade-in">
            <section className="space-y-6">
                <h1 className="text-5xl font-black text-white">Privacy Policy</h1>
                <p className="text-gray-400">Last Updated: January 26, 2026</p>
            </section>

            <section className="glass-card p-8 md:p-12 space-y-8 text-gray-400 leading-relaxed prose prose-invert max-w-none">
                <p>
                    At Math Tools Hub, we take your privacy seriously. This policy outlines exactly how we collect, use, and protect your information when you use our website.
                </p>

                <h2 className="text-2xl font-bold text-white">1. Data Collection</h2>
                <p>
                    We do not collect personal identification information unless you voluntarily provide it (e.g., via our contact form). Most tools on our site run locally in your browser and do not send input data to our servers.
                </p>

                <h2 className="text-2xl font-bold text-white">2. Cookies & Advertising</h2>
                <p>
                    We use third-party advertising services, such as Google AdSense, to serve ads when you visit our website. These companies may use cookies to provided personalized ads based on your interests.
                </p>

                <h2 className="text-2xl font-bold text-white">3. Third-Party Links</h2>
                <p>
                    Our website may contain links to other sites. We are not responsible for the privacy practices or content of those websites.
                </p>

                <h2 className="text-2xl font-bold text-white">4. Updates</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
            </section>
        </div>
    )
}
