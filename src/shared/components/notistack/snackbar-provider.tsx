"use client";

import { SnackbarProvider as NotistackProvider } from "notistack";
import React, { PropsWithChildren } from "react";

export function SnackbarProvider({ children }: PropsWithChildren) {
  return <NotistackProvider>{children}</NotistackProvider>;
}
