import { paths } from '@/shared/routes';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import logo from '@/../public/kmitl-sublogo.png';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* --------------------------- NavBar -----------------------------------------------------*/}
      <div className="box-border flex h-16 w-full justify-between bg-gray-200 px-8 font-kanit text-base">
        <div className="box-border flex items-center space-x-8 px-8">
          <div>
            <Image src={logo} width={100} height={100} alt="Logo" />
          </div>
          <div>ค้นหาวิชาเรียน</div>
          <div>แนะนำวิชาเรียน</div>
        </div>
        <div className="box-border flex items-center px-8">My Account</div>
      </div>
      <div className="font-roboto mx-16 my-8 mb-2 me-2 w-[220px] box-border rounded-[8px] bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-bl hover:text-zinc-600 focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
        <Link href="/view_remaining_credits">View Remaining Credits</Link>
      </div>
      <div className="font-roboto mx-16 my-8 mb-2 me-2 w-[220px] box-border rounded-[8px] bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-bl hover:text-zinc-600 focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
        <Link href="/jobs_suggestion">Jobs Suggestion</Link>
      </div>
    </main>
  );
}
