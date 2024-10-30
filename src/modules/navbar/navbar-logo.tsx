import Image from 'next/image';

export function NavbarLogo() {
  return (
    <Image
      src="/assets/illustrations/logo.png"
      alt="Logo"
      width={100}
      height={50}
    />
  );
}
