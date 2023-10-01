import { type User, clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';

import { filterUserForClient, userExistsWithUsername } from '~/helpers/user';

export type AuthoredItem = { id: string; authorId: string };
export function linkAuthorToData<P extends AuthoredItem>(
  item: P,
  author: User | undefined,
  typeName?: string,
) {
  if (!userExistsWithUsername(author)) {
    const forData = typeName ? ` for ${typeName} item (${item.id})` : '';
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: `Author by id (${item.authorId})${forData} not found`,
    });
  }

  return {
    ...item,
    author: filterUserForClient(author),
  };
}

export async function addAuthorToItems<P extends AuthoredItem>(
  items: P[],
  typeName?: string,
) {
  const users = await clerkClient.users.getUserList({
    userId: items.map((item) => item.authorId),
  });

  return items.map((item) => {
    const author = users.find((user) => user.id === item.authorId);
    return linkAuthorToData(item, author, typeName);
  });
}
