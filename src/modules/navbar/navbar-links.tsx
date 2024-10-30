import Link from 'next/link';
import { NAV_LINKS } from './constants';
import { buttonVariants } from '@/shared/components/ui/button';
import { cn } from '@/shared/utils';

type Props = {
  onClick?: () => void;
};

export function NavbarLinks({ onClick }: Props) {
  return (
    <div className="text-deep-blue-dark flex flex-col items-center gap-8 md:flex-row">
      {NAV_LINKS.map((navLink) => (
        <Link
          key={navLink.id}
          href={navLink.path}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'hover:text-deep-blue-dark',
          )}
          onClick={onClick}
        >
          {navLink.title}
        </Link>
      ))}
    </div>
  );
}
