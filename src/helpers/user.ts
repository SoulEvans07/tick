type WithRequired<T, K extends keyof T> = T & { [P in K]-?: NonNullable<T[P]> };

type User = {
  id: string;
  username?: string | null;
  imageUrl: string;
};

export type UserWithUsername = WithRequired<User, 'username'>;

export function userExistsWithUsername(
  user: User | null | undefined
): user is UserWithUsername {
  return !!user?.username;
}

export function filterUserForClient(user: UserWithUsername) {
  return {
    id: user.id,
    username: user.username,
    imageUrl: user.imageUrl,
  };
}
