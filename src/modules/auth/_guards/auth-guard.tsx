'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useUserStore } from '../_store';
import { paths } from '@/shared/routes';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function AuthGuard({ children }: PropsWithChildren) {
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);

  const validateAuthentication = useCallback(() => {
    if (loading) {
      return;
    }

    if (!user) {
      router.replace(paths.auth.login);
      return;
    }
  }, [loading, user, router]);

  useEffect(() => {
    validateAuthentication();
  }, [validateAuthentication]);

  return <>{children}</>;
}

export function AlreadyAuthenticatedGuard({ children }: PropsWithChildren) {
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);

  const checkAlreadyAuthenticated = useCallback(() => {
    if (loading) {
      return;
    }

    if (user) {
      router.replace(paths.root);
      return;
    }
  }, [loading, user, router]);

  useEffect(() => {
    checkAlreadyAuthenticated();
  }, [checkAlreadyAuthenticated]);

  return <>{children}</>;
}
