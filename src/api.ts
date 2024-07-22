const conta = {
  email: 'isaque@gmail.com',
  passowrd: '123456',
  name: 'Isaque'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})