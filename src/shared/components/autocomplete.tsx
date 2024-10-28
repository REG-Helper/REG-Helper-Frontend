'use client'

import { cn } from '@/shared/utils';
import { Command as CommandPrimitive } from 'cmdk';
import { Check } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from './ui/command';
import { Input } from './ui/input';
import { Popover, PopoverAnchor, PopoverContent } from './ui/popover';
import { Skeleton } from './ui/skeleton';
import { FixedSizeList } from 'react-window';
import debounce from 'lodash.debounce';

export type AutocompleteProps<T extends string> = {
  selectedValue: T;
  onSelectedValueChange: (value: T) => void;
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  items: { value: T; label: string }[];
  isLoading?: boolean;
  emptyMessage?: string;
  placeholder?: string;
  onEnterSelected?: () => void;
  commandClassName?: string;
};

// Row rendering function with props
const Row = <T extends string>({
  index,
  style,
  autocompletedItems,
  selectedValue,
  onSelectItem,
}: {
  index: number;
  style: React.CSSProperties;
  autocompletedItems: { value: T; label: string }[];
  selectedValue: T;
  onSelectItem: (inputValue: string) => void;
}) => {
  const option = autocompletedItems[index];
  return (
    <CommandItem
      key={option.value}
      value={option.value}
      onMouseDown={(e) => e.preventDefault()}
      onSelect={() => onSelectItem(option.value)}
      style={style}
      className="px-4 py-2 text-base hover:bg-gray-200" // Added hover effect
    >
      <Check
        className={cn(
          'mr-2 h-4 w-4',
          selectedValue === option.value ? 'opacity-100' : 'opacity-0',
        )}
      />
      {option.label}
    </CommandItem>
  );
};

// --------------------------------------------------

export function AutoComplete<T extends string>({
  selectedValue,
  onSelectedValueChange,
  searchValue,
  onSearchValueChange,
  items,
  isLoading,
  emptyMessage = 'No items.',
  placeholder = 'Search...',
  onEnterSelected,
  commandClassName,
}: AutocompleteProps<T>) {
  const [open, setOpen] = useState(false);
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedSearchValue(searchValue);
    }, 300);

    handler();

    return () => {
      handler.cancel(); // Clean up the debounce handler on unmount or searchValue change
    };
  }, [searchValue]);

  const labels = useMemo(
    () =>
      items.reduce(
        (acc, item) => {
          acc[item.value] = item.label;
          return acc;
        },
        {} as Record<string, string>,
      ),
    [items],
  );

  const autocompletedItems = useMemo(
    () =>
      items.filter((item) =>
        item.label.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
      ),
    [items, debouncedSearchValue],
  );

  const reset = () => {
    onSelectedValueChange('' as T);
    onSearchValueChange('');
  };

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      !e.relatedTarget?.hasAttribute('cmdk-list') &&
      labels[selectedValue] !== searchValue
    ) {
      reset();
    }
  };

  const onSelectItem = (inputValue: string) => {
    if (inputValue === selectedValue) {
      reset();
    } else {
      onSelectedValueChange(inputValue as T);
      onSearchValueChange(labels[inputValue] ?? '');
    }
    setOpen(false);
  };

  return (
    <div className="flex flex-grow items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <Command shouldFilter={false} className={commandClassName}>
          <PopoverAnchor asChild>
            <CommandPrimitive.Input
              asChild
              value={searchValue}
              onValueChange={onSearchValueChange}
              onKeyDown={(e) => {
                setOpen(e.key !== 'Escape');

                if (
                  e.key === 'Enter' &&
                  (selectedValue === searchValue || searchValue === '') &&
                  onEnterSelected
                )
                  onEnterSelected();
              }}
              onMouseDown={() => setOpen((open) => !!searchValue || !open)}
              onFocus={() => setOpen(true)}
              onBlur={onInputBlur}
            >
              <Input
                placeholder={placeholder}
                className="placeholder:text-gray h-auto rounded-md border border-gray-300 px-4 py-3 text-black" // Added border and rounded corners
              />
            </CommandPrimitive.Input>
          </PopoverAnchor>
          {!open && <CommandList aria-hidden="true" className="hidden" />}

          <PopoverContent
            asChild
            onOpenAutoFocus={(e) => e.preventDefault()}
            onInteractOutside={(e) => {
              if (
                e.target instanceof Element &&
                e.target.hasAttribute('cmdk-input')
              ) {
                e.preventDefault();
              }
            }}
            className="w-[--radix-popover-trigger-width] rounded-md border border-gray-300 p-0 shadow-lg" // Added border and shadow
          >
            <CommandList>
              {isLoading && (
                <CommandPrimitive.Loading>
                  <div className="p-1">
                    <Skeleton className="bg-linear-purple-black flex h-[40px] w-full items-center justify-center text-black">
                      Loading...
                    </Skeleton>
                  </div>
                </CommandPrimitive.Loading>
              )}
              {autocompletedItems.length > 0 && !isLoading ? (
                <CommandGroup>
                  <FixedSizeList
                    width="100%"
                    height={200}
                    itemCount={autocompletedItems.length}
                    itemSize={40}
                  >
                    {({ index, style }) => (
                      <Row
                        index={index}
                        style={style}
                        autocompletedItems={autocompletedItems}
                        selectedValue={selectedValue}
                        onSelectItem={onSelectItem}
                      />
                    )}
                  </FixedSizeList>
                </CommandGroup>
              ) : null}
              {!isLoading && autocompletedItems.length === 0 ? (
                <CommandEmpty className="bg-linear-purple-black flex w-full items-center justify-center px-[40px] py-2 text-base text-black backdrop-blur-[70.5px]">
                  {emptyMessage ?? 'No items.'}
                </CommandEmpty>
              ) : null}
            </CommandList>
          </PopoverContent>
        </Command>
      </Popover>
    </div>
  );
}
