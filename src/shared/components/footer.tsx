import { Icon } from '@iconify/react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-300 p-4 py-16 text-center">
      <h6 className="text-4xl font-medium">REG Helper</h6>
      <div className="mt-4 flex items-center justify-center">
        <p className="mr-2 text-lg text-gray-600">Source code available on</p>
        <Link
          href="https://github.com/orgs/REG-Helper/repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-blue-500"
        >
          <Icon icon="mdi:github" />
        </Link>
      </div>
    </footer>
  );
}
