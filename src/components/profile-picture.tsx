import Image from 'next/image';

import { type UserWithUsername } from '~/helpers/user';

type ProfilePictureProps = {
  user: UserWithUsername;
  className?: string;
  size?: number | `${number}`;
  priority?: boolean;
};

export function ProfilePicture(props: ProfilePictureProps) {
  const {
    user,
    priority,
    size = 64,
    className = 'min-h-max min-w-max h-12 w-12 rounded-full',
  } = props;

  return (
    <Image
      src={user.imageUrl}
      alt={`@${user.username} profile`}
      width={size}
      height={size}
      className={className}
      placeholder="empty"
      priority={priority}
    />
  );
}
