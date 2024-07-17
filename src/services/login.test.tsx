import { login } from "./login"

describe('login', () =>{

  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('Deve exibir um alert com Boas Vindas', () =>{
    login()
    expect(mockAlert).toBeCalled()
  })
})