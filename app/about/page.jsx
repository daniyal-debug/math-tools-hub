export const metadata = {
    title: 'About Us - Math Tools Hub',
    description: 'Learn more about Math Tools Hub - your reliable source for free online calculators and converters.',
}

export default function About() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 animate-fade-in">
            <section className="space-y-6">
                <h1 className="text-5xl font-black text-white">About Math Tools Hub</h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Math Tools Hub was built with a simple mission: to provide the fastest, most accurate, and most accessible mathematical tools for students, professionals, and curious minds alike.
                </p>
            </section>

            <section className="glass-card p-8 md:p-12 space-y-8">
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
                <p className="text-gray-400 leading-relaxed">
                    Started as a small collection of basic math tools, we have grown into a comprehensive platform hosting over 50 specialized calculators and converters. Our team of developers and mathematicians works tirelessly to ensure that every calculation performed on our site meets the highest standards of precision.
                </p>

                <div className="grid md:grid-cols-2 gap-8 pt-6">
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-primary-mint">Free & Accessible</h3>
                        <p className="text-gray-500">We believe that powerful tools should be free. Our platform is supported by unobtrusive advertising to keep our tools available to everyone globally.</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-primary-blue">Privacy First</h3>
                        <p className="text-gray-500">We respect your data. Most of our calculations are performed locally in your browser, and we never store sensitive user inputs.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
