import { notFound } from 'next/navigation'
import { getConverterById, getAllConverterIds } from '../../../utils/unitDefinitions'
import ConverterLayout from '../../../components/converters/ConverterLayout'

// ─── Static Generation ───────────────────────────────────────────────────

export async function generateStaticParams() {
    return getAllConverterIds().map(id => ({ category: id }))
}

export async function generateMetadata({ params }) {
    const category = getConverterById(params.category)
    if (!category) return { title: 'Converter Not Found' }

    const baseUrl = 'https://math-tools-hub.vercel.app'

    return {
        title: category.seoTitle,
        description: category.metaDescription,
        alternates: {
            canonical: `${baseUrl}/converter/${category.id}`,
        },
        openGraph: {
            title: category.seoTitle,
            description: category.metaDescription,
            url: `${baseUrl}/converter/${category.id}`,
            siteName: 'Math Tools Hub',
            type: 'website',
        },
    }
}

// ─── Page ────────────────────────────────────────────────────────────────

export default function ConverterPage({ params }) {
    const category = getConverterById(params.category)

    if (!category) {
        notFound()
    }

    return (
        <>
            <ConverterLayout category={category} />

            {/* WebApplication Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebApplication',
                        name: `${category.name} Converter — Math Tools Hub`,
                        url: `https://math-tools-hub.vercel.app/converter/${category.id}`,
                        applicationCategory: 'UtilityApplication',
                        operatingSystem: 'Any',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                        },
                    }),
                }}
            />
        </>
    )
}
