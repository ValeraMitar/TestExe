export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  address: {
    city: string,
    street: string,
    suite: string,
  },
  company: {
    name: string,
  },
}
