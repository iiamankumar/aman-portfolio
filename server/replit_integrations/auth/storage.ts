import { User } from "../../models";
import { connectDB } from "../../db";
import type { IUser } from "../../models";

// Interface for auth storage operations
export interface IAuthStorage {
  getUser(id: string): Promise<any>;
  upsertUser(user: Partial<IUser> & { id?: string }): Promise<any>;
}

class AuthStorage implements IAuthStorage {
  async getUser(id: string): Promise<any> {
    await connectDB();
    const user = await User.findById(id);
    if (!user) return undefined;
    
    return {
      id: user._id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImageUrl: user.profileImageUrl,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async upsertUser(userData: Partial<IUser> & { id?: string }): Promise<any> {
    await connectDB();
    
    const { id, ...data } = userData;
    
    let user;
    if (id) {
      // Update existing user by ID
      user = await User.findByIdAndUpdate(id, data, { upsert: true, new: true });
    } else if (userData.email) {
      // Upsert by email
      user = await User.findOneAndUpdate(
        { email: userData.email },
        data,
        { upsert: true, new: true }
      );
    } else {
      // Create new user
      user = await User.create(data);
    }
    
    return {
      id: user._id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImageUrl: user.profileImageUrl,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}

export const authStorage = new AuthStorage();
