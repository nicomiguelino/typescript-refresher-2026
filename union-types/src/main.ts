type FlexDate = Date | string

interface Contact {
  firstName: string
  lastName: string
  dateOfBirth?: FlexDate
}

interface Address {
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
}

type ContactWithAddress = Contact & Address;

const johnDoe: Contact = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1992-04-15'
}

const janeDoe: Contact = {
  firstName: 'Jane',
  lastName: 'Doe',
  dateOfBirth: new Date('1997-09-20')
}

const peterPevensie: ContactWithAddress = {
  firstName: 'Peter',
  lastName: 'Pevensie',
  dateOfBirth: '1927-10-12',
  addressLine1: '1212 Narnia St.',
  city: 'San Francisco',
  state: 'California'
}

function normalizeDate<T extends { dateOfBirth?: FlexDate }>(object: T): Date | null {
  const { dateOfBirth } = object;

  if (!dateOfBirth) {
    return null
  }

  if (typeof dateOfBirth === 'string') {
    return new Date(dateOfBirth)
  }

  return dateOfBirth
}

console.log(JSON.stringify(johnDoe, null, 2))
console.log(JSON.stringify(janeDoe, null, 2))

console.log()

console.log(normalizeDate(johnDoe))
console.log(normalizeDate(janeDoe))
console.log(normalizeDate(peterPevensie))
