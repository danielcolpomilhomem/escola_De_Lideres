// auth.js

export const authenticate = (username, password) => {

  if (username === "eu" && password === "1234") {
      return true; 
  } else {
    return false; 
  }
};
