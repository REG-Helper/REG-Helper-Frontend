import { Icon } from '@iconify/react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-300 p-4 text-center py-16">
      <h6 className="text-4xl font-medium">REG Helper</h6>
      <div className="flex items-center justify-center mt-4">
        <p className="mr-2 text-lg text-gray-600">Source code available on</p>
        <Link
          href="https://github.com/example"
          className="text-4xl text-blue-500"
        >
          <Icon icon="mdi:github" />
        </Link>
      </div>
    </footer>
  );
}
