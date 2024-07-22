const conta = {
  id: '1',
  email: 'isaque@gmail.com',
  passowrd: '123456',
  name: 'Isaque',
  balance: 2000.00
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})