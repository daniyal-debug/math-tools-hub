import { Helmet } from 'react-helmet-async'

export default function SEO({
    title,
    description,
    path,
    type = 'website',
    schemaData = null
}) {
    const siteName = 'Math Tools Hub'
    const fullTitle = `${title} | ${siteName}`
    const url = `https://mathtoolshub.com${path || ''}`

    return (
        <Helmet>
            {/* Standard SEO Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {/* Structured Data (Schema.org) */}
            {schemaData && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            )}
        </Helmet>
    )
}
