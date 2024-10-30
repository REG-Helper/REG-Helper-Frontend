'use client';

import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useUserStore } from '../_store';
import { paths } from '@/shared/routes';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useBoolean } from '@/shared/hooks';
import { Loading } from '@/shared/components';

type Props = {
  checkTranscript?: boolean;
};

export function AuthGuard({
  children,
  checkTranscript = false,
}: PropsWithChildren<Props>) {
  const router = useRouter();
  const checking = useBoolean(true);

  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);

  const validateAuthentication = useCallback(() => {
    if (loading) return;

    if (checkTranscript && !user?.transcript?.url) {
      router.replace(paths.root);
    }

    if (!user) {
      router.replace(paths.root);
    } else {
      checking.onFalse();
    }
  }, [loading, user, router, checking]);

  useEffect(() => {
    validateAuthentication();
  }, [validateAuthentication]);

  if (loading || checking.value) {
    return <Loading />;
  }

  return <>{children}</>;
}
