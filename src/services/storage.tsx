const diobak = {
  login: false
}


export const getAllLocalStorage = async () => {
  return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
  localStorage.setItem('diobank', JSON.stringify(diobak))
}