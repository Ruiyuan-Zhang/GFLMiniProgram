const USER_KEY = 'user';

export function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function fetchUser() {
  return JSON.parse(localStorage.getItem(USER_KEY) || '""');
}

export function removeUser() {
  localStorage.removeItem(USER_KEY);
}
