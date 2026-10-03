type UserAccountStatus = 'active' | 'inactive'

interface UserAccount {
  id: number
  firstName: string
  lastName: string
  birthDate?: Date
  status: UserAccountStatus
}

const peterPevensie: UserAccount = {
  id: 0,
  firstName: 'Peter',
  lastName: 'Pevensie',
  status: 'active'
}


const susanPevensie: UserAccount = {
  id: 1,
  firstName: 'Susan',
  lastName: 'Pevensie',
  status: 'active'
}

const edmundPevensie: UserAccount = {
  id: 2,
  firstName: 'Edmund',
  lastName: 'Pevensie',
  status: 'active'
}

const lucyPevensie: UserAccount = {
  id: 3,
  firstName: 'Lucy',
  lastName: 'Pevensie',
  status: 'active'
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName]
}

console.log(getValue(peterPevensie, 'firstName'))
console.log(getValue(peterPevensie, 'lastName'))
