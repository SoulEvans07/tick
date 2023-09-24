import Image from 'next/image';
import cn from 'classnames';

import { UserWithUsername } from '~/helpers/user';

type ProfilePictureProps = {
  user: UserWithUsername;
  className?: string;
  size?: number | `${number}`;
  priority?: boolean;
};

export function ProfilePicture(props: ProfilePictureProps) {
  const { user, priority, size = 64, className = 'h-14 w-14 rounded-full' } = props;

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
