import { generateUUID } from '#/lib/utils'

export interface Track {
  id: string
  name: string
}

export function createTrack(options: Required<Pick<Track, 'name'>>) {
  return {
    id: generateUUID(),
    ...options
  }
}
