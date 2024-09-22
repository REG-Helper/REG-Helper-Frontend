'use client';

import { Icon } from '@iconify/react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from '@/shared/components/ui/sheet';
import { useState } from 'react';
import { NavbarLogo } from './navbar-logo';
import { NavbarLinks } from './navbar-links';
import { GoogleLoginBtn } from '../auth';

export function NavbarMobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Icon icon="grommet-icons:menu" className="text-3xl" />
      </SheetTrigger>
      <SheetContent side="right">
        <div className="mb-16 mt-4 text-center">
          <NavbarLogo />
        </div>
        <NavbarLinks onClick={() => setOpen(false)} />
        <div className="mt-8 flex justify-center">
          <GoogleLoginBtn />
        </div>
      </SheetContent>
    </Sheet>
  );
}
