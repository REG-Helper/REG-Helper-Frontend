import { GoogleLoginBtn } from '../auth';

import { NavbarLogo } from './navbar-logo';
import { NavbarLinks } from './navbar-links';
import { NavbarMobileMenu } from './navbar-mobile-menu';
import Link from 'next/link';
import { paths } from '@/shared/routes';

export function Navbar() {
  return (
    <nav className="sticky right-0 top-0 w-full bg-white shadow-lg">
      <div className="mx-auto flex items-center justify-between px-4 py-5 md:px-8 xl:max-w-screen-xl">
        <div className="flex items-center">
          <div className="mr-8">
            <Link href={paths.root}>
              <NavbarLogo />
            </Link>
          </div>
          <div className="hidden md:block">
            <NavbarLinks />
          </div>
        </div>
        <div className="flex">
          <div className="hidden md:block">
            <GoogleLoginBtn />
          </div>
          <div className="block md:hidden">
            <NavbarMobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
