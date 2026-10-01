interface Contact {
  id: number
  name: string
  transformed?: boolean
}

function addAttribute(source: Contact): Contact {
  return {
    ...source,
    transformed: true
  }
}

function clone(source: Contact, transform?: (contact: Contact) => Contact): Contact {
  return Object.apply({}, [transform ? transform(source) : source])
}

const a: Contact = {
  id: 42,
  name: 'Douglas Adams'
}

const b = clone(a, addAttribute)

console.log(a)
console.log(b)
