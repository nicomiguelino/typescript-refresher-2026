interface Album {
  id: string
  name: string
  year: number
}

interface Track {
  id: string
  order: number
  name: string
  albumId: Album['id']
}

const revolver: Album = {
  id: crypto.randomUUID().toUpperCase(),
  name: 'Revolver',
  year: 1966
}

const taxman: Track = {
  id: crypto.randomUUID().toUpperCase(),
  order: 1,
  name: 'Taxman',
  albumId: revolver.id
}
const loveYouTo: Track = {
  id: crypto.randomUUID().toUpperCase(),
  order: 4,
  name: 'Love You To',
  albumId: revolver.id
}
const tomorrowNeverKnows: Track = {
  id: crypto.randomUUID().toUpperCase(),
  order: 14,
  name: 'Tomorrow Never Knows',
  albumId: revolver.id
}

console.log(revolver)
console.log(taxman)
console.log(tomorrowNeverKnows)

console.log()

console.log(typeof revolver.id)
console.log(typeof taxman.albumId)
