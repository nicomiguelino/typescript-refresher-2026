enum UserAccountStatus {
  Active,
  Inactive
}

interface UserAccount {
  firstName: string
  lastName: string
  dateOfBirth?: Date
  status: UserAccountStatus
}

const johnDoe: UserAccount = {
  firstName: 'John',
  lastName: 'Doe',
  status: UserAccountStatus.Active
};

console.log(johnDoe)
