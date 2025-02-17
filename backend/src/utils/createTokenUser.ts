import { User } from "@prisma/client";
import { TokenUser } from "../types";

export const createTokenUser = (user: User): TokenUser => {
  return {
    name: user.name,
    userId: user.id,
    role: user.role,
    email: user.email,
    image: user?.image,
    company: user?.company,
  };
};
