export function generateUUID(): string {
  return crypto.randomUUID().replaceAll('-', '').toUpperCase()
}
