'use client';

import { useUserStore } from '@/modules/auth/_store';

export default function ProfilePage() {
  const user = useUserStore((state) => state.user);
  return (
    <div>
      <h1>Profile Page</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
