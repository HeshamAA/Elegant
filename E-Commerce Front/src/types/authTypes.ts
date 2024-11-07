export type TAuthState = {
  accessToken: string;
  user: TUser;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};
export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  watchlist: string[];
  role: "user" | "admin";
};

export type TFormData = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type TUserResponse = {
  accessToken: string;
  user: TUser
};

export type TUsersResponse = TUser[];

export type TUsersState = {
  data: TUser[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}