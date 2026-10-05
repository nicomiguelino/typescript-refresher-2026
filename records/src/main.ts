import { createUserAccount } from '#/users'

const userAccount1 = createUserAccount({
  firstName: 'Guido',
  lastName: 'van Rossum',
  username: 'gvanrossum',
  email: 'gvanrossum@example.com',
  metadata: {
    'notes': [
      'Created the Python programming language'
    ]
  }
})

console.log(userAccount1)
