interface Contact {
  firstName: string
  lastName: string
}

interface Album2 {
  name: string
  year: number
  artist: string
}

function clone<T>(source: T): T {
  return Object.apply({}, [source])
}

const jd: Contact = {
  firstName: 'John',
  lastName: 'Doe'
}
const jdClone = clone(jd)

console.log(jd)
console.log(jdClone)

const insomniac: Album2 = {
  name: 'Insomniac',
  year: 1995,
  artist: 'Green Day'
}

const kerplunk = clone(insomniac)
kerplunk.name = 'Kerplunk'
kerplunk.year = 1992

console.log(insomniac)
console.log(kerplunk)
