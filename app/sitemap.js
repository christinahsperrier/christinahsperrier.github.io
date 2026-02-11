const domain = 'christinaperrier.com'

export default function sitemap() {
    return [
        {
            url: `https://${domain}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `https://${domain}/about/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority:1,
        },
        {
            url: `https://${domain}/portfolio/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `https://${domain}/resume/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
