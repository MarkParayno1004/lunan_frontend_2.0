interface LoginCredentials {
  userName: string;
  userPassword: string;
}

export const loginHelper = (
  userName: string,
  password: string
): LoginCredentials => {
  return {
    userName: userName,
    userPassword: password,
  };
};
