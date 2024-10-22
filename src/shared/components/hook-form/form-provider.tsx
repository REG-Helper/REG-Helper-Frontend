'use client';

import type { PropsWithChildren } from 'react';
import type {
  UseFormReturn,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

export type Props<T extends FieldValues = FieldValues> = {
  onSubmit?: SubmitHandler<T>;
  methods: UseFormReturn<T>;
};

export function Form<T extends FieldValues>({
  methods,
  children,
  onSubmit,
}: PropsWithChildren<Props<T>>) {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}
        noValidate
        autoComplete="off"
      >
        {children}
      </form>
    </FormProvider>
  );
}
