import { LoginRequest } from "../../models/LoginRequest";
import { users } from "../../models/User";


export const loginUser = (loginRequest: LoginRequest): boolean => {
  const { username, password } = loginRequest;

  if (users.find((u) => u.email === username && u.password === password)) {
    console.log("User logged in:", username);
    return true;
  } else {
    console.error("Login failed for:", username);
    return false;
  }
};