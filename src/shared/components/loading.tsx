export function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex items-center space-x-2">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        <span className="text-lg text-gray-700">Loading...</span>
      </div>
    </div>
  );
}
