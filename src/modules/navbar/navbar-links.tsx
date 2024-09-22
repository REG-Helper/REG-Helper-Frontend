import Link from 'next/link';
import { navLinks } from './constants';
import { buttonVariants } from '@/shared/components/ui/button';

type Props = {
  onClick?: () => void;
};

export function NavbarLinks({ onClick }: Props) {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row">
      {navLinks.map((navLink) => (
        <Link
          key={navLink.id}
          href={navLink.path}
          className={buttonVariants({ variant: 'ghost' })}
          onClick={onClick}
        >
          {navLink.title}
        </Link>
      ))}
    </div>
  );
}
