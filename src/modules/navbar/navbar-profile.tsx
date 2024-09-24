'use client';

import { AvatarImage } from '@/shared/components/ui/avatar';
import { Button } from '@/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { PROFILE_MENU } from './constants';
import Link from 'next/link';
import { useUserStore } from '../auth/_store';
import { ACCESS_TOKEN_STORAGE_KEY } from '../auth/_constants';
import { useCallback } from 'react';

export function NavbarProfile() {
  const user = useUserStore((state) => state.user);
  const { setCredentials, setUser } = useUserStore((state) => state.actions);

  const logout = useCallback(() => {
    setCredentials(null);
    setUser(null);
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  }, [setCredentials, setUser]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative flex h-10 w-10 items-center justify-center rounded-full"
        >
          <Avatar className="h-full w-full">
            <AvatarImage
              src={user?.profileImage}
              alt="@shadcn"
              className="absolute right-0 top-0 h-10 w-10 rounded-full"
            />
            <AvatarFallback className="bg-red-200">SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            {user?.firstname && user?.lastname && (
              <p className="text-sm font-medium leading-none">
                {user?.firstname} {user?.lastname[0]}.
              </p>
            )}
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {PROFILE_MENU.map((profileMenu) => (
            <Link href={profileMenu.path} key={profileMenu.id}>
              <DropdownMenuItem>{profileMenu.title}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>ออกจากระบบ</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
