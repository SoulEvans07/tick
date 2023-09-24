type WithRequired<T, K extends keyof T> = T & { [P in K]-?: NonNullable<T[P]> };

type User = {
  id: string;
  username?: string | null;
  imageUrl: string;
};

type UserWithUsername = WithRequired<User, 'username'>;

export function userExistsWithUsername(
  user: User | null | undefined,
): user is UserWithUsername {
  return !!user?.username;
}
