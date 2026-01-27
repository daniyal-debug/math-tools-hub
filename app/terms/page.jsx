export const metadata = {
    title: 'Terms of Service - Math Tools Hub',
    description: 'Terms and conditions for using Math Tools Hub.',
}

export default function Terms() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 animate-fade-in">
            <section className="space-y-6">
                <h1 className="text-5xl font-black text-white">Terms of Service</h1>
                <p className="text-gray-400">Last Updated: January 26, 2026</p>
            </section>

            <section className="glass-card p-8 md:p-12 space-y-8 text-gray-400 leading-relaxed prose prose-invert max-w-none">
                <p>
                    By accessing and using Math Tools Hub, you agree to comply with and be bound by the following terms and conditions.
                </p>

                <h2 className="text-2xl font-bold text-white"> acceptance of Terms</h2>
                <p>
                    The tools and information provided on this website are for educational and informational purposes only. We make no guarantees regarding the accuracy or completeness of the results provided by our calculators.
                </p>

                <h2 className="text-2xl font-bold text-white">2. Use of Site</h2>
                <p>
                    You agree to use this site only for lawful purposes. You may not use this site in any way that could damage, disable, or impair the platform or interfere with any other party's use.
                </p>

                <h2 className="text-2xl font-bold text-white">3. Disclaimer of Liability</h2>
                <p>
                    Math Tools Hub and its owners shall not be held liable for any damages resulting from the use or inability to use the tools provided on this website. Users perform calculations at their own risk.
                </p>

                <h2 className="text-2xl font-bold text-white">4. Governing Law</h2>
                <p>
                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the website operator resides.
                </p>
            </section>
        </div>
    )
}
