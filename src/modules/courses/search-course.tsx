import { Input } from '@/shared/components/ui/input';

export function SearchCourse() {
  return (
    <div>
      <Input
        placeholder="ค้นหาด้วยรหัสวิชา / ชื่อวิชา"
        className="font-medium"
      />
    </div>
  );
}
