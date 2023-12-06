export const validateEmail = (email) => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return isValid;
};

export const validatePhone = (phone) => {
  const isValid = /^\d{10}$/.test(phone);
  return isValid;
};
