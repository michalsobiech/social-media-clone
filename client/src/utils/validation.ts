export const isValidEmail = (email: string): boolean => {
  if (email.trim().length === 0) return false;

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

  return emailPattern.test(email);
};

export const isValidPassword = (password: string): boolean => {
  if (password.trim().length === 0) return false;

  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passwordPattern.test(password);
};
