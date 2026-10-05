export interface UserAccount {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  metadata: Record<string, string | number | boolean | string[]>
}

export function createUserAccount<T extends UserAccount>(
  options: Omit<T, 'id'>
): T {
  return {
    id: crypto.randomUUID().replace('-', ''),
    ...options
  } as T
}
