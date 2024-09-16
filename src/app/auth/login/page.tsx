import { GoogleLoginBtn } from '@/modules/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เข้าสู่ระบบ',
};

export default function LoginPage() {
  return (
    <div>
      <GoogleLoginBtn />
    </div>
  );
}
