interface OldContact {
  id: number
  name: string
  transformed?: boolean
}

function addAttribute(source: OldContact): OldContact {
  return {
    ...source,
    transformed: true
  }
}

function oldClone(source: OldContact, transform?: (contact: OldContact) => OldContact): OldContact {
  return Object.apply({}, [transform ? transform(source) : source])
}

const a: OldContact = {
  id: 42,
  name: 'Douglas Adams'
}

const b = oldClone(a, addAttribute)

console.log(a)
console.log(b)
