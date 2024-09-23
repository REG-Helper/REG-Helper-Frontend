export const addParamsToUrl = (
  url: string,
  params: Record<string, unknown>,
) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([param, value]) => {
    searchParams.append(param, String(value));
  });

  return `${url}?${searchParams.toString()}`;
};
