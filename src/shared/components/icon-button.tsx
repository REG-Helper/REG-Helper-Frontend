import type { PropsWithChildren } from 'react';
import type { ButtonProps } from './ui/button';
import { Button } from './ui/button';
import { cn } from '../utils';
import { Icon } from '@iconify/react';

type Props = {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  icon: string;
};

export function IconButton({
  children,
  className,
  disabled = false,
  size = 'default',
  variant = 'default',
  onClick,
  icon,
}: PropsWithChildren<Props>) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(className)}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon icon={icon} className='text-2xl mr-2' />
      {children}
    </Button>
  );
}
