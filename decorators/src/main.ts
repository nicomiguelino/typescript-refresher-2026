function logger<This, Args extends unknown[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) {
  return function(this: This, ...args: Args): Return {
    console.log('Logging START')
    const result = originalMethod.apply(this, args)
    console.log('Logging END')
    return result
  }
}

class Track {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

class Album {
  name: string
  year: number
  track: Track[]

  constructor(name: string, year: number) {
    this.name = name
    this.year = year
    this.track = []
  }

  @logger
  addTrack(track: Track): void {
    this.track.push(track)
  }
}

const revolver = new Album('Revolver', 1966)
const taxman = new Track('Taxman')
revolver.addTrack(new Track('Taxman'))

console.log(revolver)
