const TOKEN_KEY = 'token_key'

export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}

export function fetchToken() {
  return JSON.parse(localStorage.getItem(TOKEN_KEY) || '""')
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
}