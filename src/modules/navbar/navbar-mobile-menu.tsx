'use client';

import { Icon } from '@iconify/react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from '@/shared/components/ui/sheet';
import { NavbarLogo } from './navbar-logo';
import { NavbarLinks } from './navbar-links';
import { GoogleLoginBtn } from '../auth';
import { useBoolean } from '@/shared/hooks';
import { useUserStore } from '../auth/_store';
import Link from 'next/link';
import { paths } from '@/shared/routes';
import { buttonVariants } from '@/shared/components/ui/button';
import { useCallback } from 'react';
import { ACCESS_TOKEN_STORAGE_KEY } from '../auth/_constants';

export function NavbarMobileMenu() {
  const user = useUserStore((state) => state.user);
  const openNavbar = useBoolean(false);
  const { setCredentials, setUser } = useUserStore((state) => state.actions);

  const logout = useCallback(() => {
    setCredentials(null);
    setUser(null);
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);

    openNavbar.onFalse();
  }, [setCredentials, setUser, openNavbar]);

  return (
    <Sheet open={openNavbar.value} onOpenChange={openNavbar.onToggle}>
      <SheetTrigger asChild>
        <Icon icon="grommet-icons:menu" className="text-3xl" />
      </SheetTrigger>
      <SheetContent side="right">
        <div className="mb-8 mt-4 flex justify-center">
          <NavbarLogo />
        </div>
        <NavbarLinks onClick={openNavbar.onFalse} />
        <div className="mt-8 flex justify-center">
          {user ? (
            <div className="flex flex-col gap-8 text-center">
              <Link
                href={paths.profile.root}
                className={buttonVariants({ variant: 'ghost' })}
                onClick={openNavbar.onFalse}
              >
                โปรไฟล์
              </Link>
              <Link
                href={paths.profile.root}
                className={buttonVariants({ variant: 'ghost' })}
                onClick={logout}
              >
                ออกจากระบบ
              </Link>
            </div>
          ) : (
            <GoogleLoginBtn />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
