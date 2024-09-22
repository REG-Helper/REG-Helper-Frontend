import { GoogleLoginBtn } from '../auth';

import { NavbarLogo } from './navbar-logo';
import { NavbarLinks } from './navbar-links';
import { NavbarMobileMenu } from './navbar-mobile-menu';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto flex items-center justify-between px-8 py-6 xl:max-w-screen-xl">
        <div className="flex items-center">
          <div className="mr-8">
            <NavbarLogo />
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
