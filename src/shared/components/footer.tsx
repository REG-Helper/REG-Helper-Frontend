import { Icon } from '@iconify/react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-deep-blue-light p-4 py-16 text-center">
      <h6 className="text-4xl font-medium text-white">REG Helper</h6>
      <div className="mt-4 flex items-center justify-center">
        <p className="mr-2 text-lg text-light-gray">Source code available on</p>
        <Link
          href="https://github.com/orgs/REG-Helper/repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-light-gray"
        >
          <Icon icon="mdi:github" />
        </Link>
      </div>
    </footer>
  );
}
