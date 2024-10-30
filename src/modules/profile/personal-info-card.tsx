import { Skeleton } from '@/shared/components/ui/skeleton';

type Props = {
  title: string;
  content: string | undefined;
  isLoading: boolean;
};

export function PersonalInfoCard({ title, content, isLoading }: Props) {
  return (
    <div className="col-span-1 flex flex-col items-start space-y-2">
      <h2 className="font-semibold text-deep-blue">{title}</h2>
      {isLoading ? (
        <Skeleton className="h-10 w-full rounded-lg bg-gray-100 px-5 py-2" />
      ) : (
        <p className="w-full whitespace-nowrap rounded-lg bg-gray-100 px-5 py-2 text-gray-900">
          {content}
        </p>
      )}
    </div>
  );
}
