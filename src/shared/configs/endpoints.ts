const ROOTS = {
  OAUTH: "/oauth",
  USERS: "/users",
};

export const endpoints = {
  oauth: {
    google: `${ROOTS.OAUTH}/google`,
    googleLogin: `${ROOTS.OAUTH}/google/login`,
  },
  users: {
    me: `${ROOTS.USERS}/me`,
  },
};
