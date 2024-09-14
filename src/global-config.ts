export type ConfigValue = {
  env: "development" | "production" | "test";
  site: {
    apiUrl: string;
  };
};

export const CONFIG: ConfigValue = {
  env: process.env.NODE_ENV,
  site: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
  },
};
