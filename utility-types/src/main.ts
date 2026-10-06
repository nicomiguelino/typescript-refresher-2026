import { createAlbum } from '#/lib/album'
import { createTrack } from '#/lib/track'

const thunderstruck = createTrack({ name: 'Thunderstruck' })
const theRazorsEdge = createAlbum({
  name: 'The Razors Edge',
  year: 1990,
  tracks: [thunderstruck]
})

console.log(theRazorsEdge)
