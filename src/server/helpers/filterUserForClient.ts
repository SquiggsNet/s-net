import type { User } from "@clerk/nextjs/dist/api";

export const filterUserForClient = (user: User) => {
  const username = user.username;
  return {
    id: user.id,
    username,
    profileImageUrl: user.profileImageUrl,
  };
};