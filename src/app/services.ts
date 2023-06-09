export function getUserFromStorage(): string | null {
  return localStorage.getItem('@user');
}

export function setUserToStorage(user: any): void {
  localStorage.setItem('@user', JSON.stringify(user));
}

export function removeUserFromStorage(): void {
  return localStorage.removeItem('@user');
}

export const generateHeadersIfAny = (headers: Headers): Headers => {
  const userJson: string | null = getUserFromStorage();

  const user = userJson && JSON.parse(userJson);

  if (user && user.token) {
    headers.append(`Authorization`, `Bearer ${user.token}`);
  }
  return headers;
};
