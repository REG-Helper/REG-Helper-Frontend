import { paths } from "@/shared/routes";
import { JwtPayload } from "../_types";
import { ACCESS_TOKEN_STORAGE_KEY } from "../_constants";
import { axiosInstance } from "@/shared/utils";

export const jwtDecode = (token: string): JwtPayload | null => {
  try {
    if (!token) {
      return null;
    }

    const tokenParts = token.split(".");

    if (tokenParts.length !== 3) {
      throw new Error("Invalid token!");
    }

    const encodedPayload = tokenParts[1];
    const base64Payload = encodedPayload.replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = JSON.parse(atob(base64Payload));

    return decodedPayload;
  } catch (error) {
    throw error;
  }
};

export const isValidToken = (token: string): boolean => {
  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode(token);

    if (!decoded || typeof decoded?.exp !== "number") {
      return false;
    }

    const currentTime = Math.floor(Date.now() / 1000);

    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};

export const tokenExpired = (exp: number): void => {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeLeft = exp - currentTime;

  setTimeout(() => {
    try {
      alert("Token expired!");

      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);

      window.location.href = paths.auth.login;
    } catch (error) {
      throw error;
    }
  }, timeLeft * 1000);
};

export const setSession = (accessToken: string) => {
  try {
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);

      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      const decodedToken = jwtDecode(accessToken);

      if (decodedToken && typeof decodedToken?.exp === "number") {
        tokenExpired(decodedToken.exp);
      } else {
        throw new Error("Invalid access token!");
      }
    } else {
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);

      delete axiosInstance.defaults.headers.common.Authorization;
    }
  } catch (error) {
    throw error;
  }
};
