/**
 * Format date to readable string
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Format number with thousand separators
 */
export function formatNumber(num: number): string {
  return num.toLocaleString()
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

/**
 * Convert string to slug for URLs
 */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
}

/**
 * Parse years from range string
 */
export function parseYearRange(range: string): { start: number; end: number | null } {
  const [start, end] = range.split('-').map((s) => {
    const num = parseInt(s.trim())
    return isNaN(num) ? null : num
  })
  return { start: start!, end: end ?? null }
}
