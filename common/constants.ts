export const PORT = process.env.PORT || 3000
export const initApiOnly = process.argv.includes('--api-only')

export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'
