export const addParamsToUrl = (url: string, params: Record<string, string>) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([param, value]) => {
    searchParams.append(param, value);
  });

  return `${url}?${searchParams.toString()}`;
};
