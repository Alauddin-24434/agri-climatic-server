import Auth from "./auth.model";
import bcrypt from "bcryptjs";
export const registerIntoDB = async (
    name: string,
    email: string,
    hasedPassword: string
  ) => {
    const user = await Auth.find({ email });
    if (user.length > 0) {
      throw new Error("User already exists");
    }
  
    const newUser = await Auth.create({ name, email, password: hasedPassword });
  
 
    const { password, ...safeUser } = newUser.toObject();
    return safeUser;
  };
  

export const loginIntoDB = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  try {
    const user = await Auth.findOne({ email }).select('+password');
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const { password: _, ...safeUser } = user.toObject();
    return safeUser;

  } catch (err) {
    console.error('Login error:', err);
    throw new Error("Login failed");
  }
};
