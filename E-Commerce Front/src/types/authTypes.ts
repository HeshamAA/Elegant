export type TAuthState = {
  accessToken: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    watchlist: string[];
    role: string;
  };
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

export type TFormData = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

export type TUserResponse = {
  accessToken: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    watchlist: string[];
    role: string;
  };
};

export type TUsersResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  watchlist: string[];
  role: string;
};
