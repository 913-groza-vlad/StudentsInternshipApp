import { LoginRequest } from "../../models/LoginRequest";
import { userService } from "../../services/userService";


export const loginUser = (loginRequest: LoginRequest): boolean => {
  const { username, password } = loginRequest;

  const users = userService.getAllUsers();
  if (users.find((u) => u.email === username && u.password === password)) {
    console.log("User logged in:", username);
    return true;
  } else {
    console.error("Login failed for:", username);
    return false;
  }
};