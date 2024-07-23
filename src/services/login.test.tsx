import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockUseNavigate = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    setlsLogedIn: mockSetIsLoggedIn
  })
}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockUseNavigate
}))

describe('login', () => {

  const mockEmail = 'isaque@gmail.com'

  it('Deve exibir um alert com Boas Vindas caso o email seja válido', async () => {
    const response = await login(mockEmail)
    expect(response).toBeTruthy()
  })

  it('Deve exibir um erro caso o email seja inválido', async () => {
    const response = await login('email@invalido.com')
    expect(response).toBeFalsy()
  })
})