import Link from 'next/link';
import { NAV_LINKS } from './constants';
import { buttonVariants } from '@/shared/components/ui/button';
import { cn } from '@/shared/utils';

type Props = {
  onClick?: () => void;
};

export function NavbarLinks({ onClick }: Props) {
  return (
    <div className="flex flex-col items-center gap-8 text-white md:flex-row">
      {NAV_LINKS.map((navLink) => (
        <Link
          key={navLink.id}
          href={navLink.path}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'text-black hover:text-deep-blue-dark md:text-white',
          )}
          onClick={onClick}
        >
          {navLink.title}
        </Link>
      ))}
    </div>
  );
}
