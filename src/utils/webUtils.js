/**
 * Web & Developer Utilities
 */

// Text Analysis
export const analyzeText = (text) => {
    const chars = text.length
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const sentences = text.split(/[.!?]+/).filter(Boolean).length
    const readingTime = Math.ceil(words / 200) // approx 200 wpm

    return { chars, words, sentences, readingTime }
}

// Password Generation
export const generatePassword = (length = 12, options = {}) => {
    const { uppercase = true, lowercase = true, numbers = true, symbols = true } = options

    let charset = ""
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (numbers) charset += "0123456789"
    if (symbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    if (!charset) return ""

    let password = ""
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return password
}

// Case Conversion
export const convertCase = (text, type) => {
    switch (type) {
        case 'upper': return text.toUpperCase()
        case 'lower': return text.toLowerCase()
        case 'title': return text.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
        case 'camel': return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        default: return text
    }
}

// JSON Formatting
export const formatJSON = (jsonString, space = 2) => {
    try {
        const obj = JSON.parse(jsonString)
        return JSON.stringify(obj, null, space)
    } catch (e) {
        return null
    }
}
