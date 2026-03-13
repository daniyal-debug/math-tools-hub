import { calculators, categories } from '../utils/calculatorData'

export default function sitemap() {
    const baseUrl = 'https://mathtoolshub.com'

    // Static Routes
    const staticRoutes = ['', '/about', '/contact', '/privacy', '/terms'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
    }))

    // Category Routes
    const categoryRoutes = categories.map((category) => ({
        url: `${baseUrl}/category/${category.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }))

    // Calculator Routes
    const calculatorRoutes = calculators.map((calculator) => ({
        url: `${baseUrl}/calculator/${calculator.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }))

    return [...staticRoutes, ...categoryRoutes, ...calculatorRoutes]
}
