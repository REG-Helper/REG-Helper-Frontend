'use client';

import { SnackbarProvider as NotistackProvider } from 'notistack';
import React, { PropsWithChildren } from 'react';

export function SnackbarProvider({ children }: PropsWithChildren) {
  return (
    <NotistackProvider
      autoHideDuration={2000}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
    >
      {children}
    </NotistackProvider>
  );
}
