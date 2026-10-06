import { Track } from '#/lib/track'
import { generateUUID } from '#/lib/utils'

export interface Album {
  id: string
  name: string
  year: number
  tracks: Track[]
}

export function createAlbum(options: Omit<Album, 'id' | 'tracks'> & Partial<Pick<Album, 'tracks'>>): Album {
  const { tracks = [], ...rest } = options
  return {
    id: generateUUID(),
    tracks,
    ...rest
  }
}
