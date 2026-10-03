class Track {
  name: string
  
  constructor(name: string) {
    this.name = name
  }
}

class Album {
  name: string
  year: number
  tracks: Track[] = []

  constructor(name: string, year: number, tracks?: Track[]) {
    this.name = name
    this.year = year
    if (!tracks) {
      return
    }
    this.tracks = [...this.tracks, ...tracks];
  }
}

const taxman = new Track('Taxman')
const revolver = new Album('Revolver', 1966)
revolver.tracks.push(taxman);
