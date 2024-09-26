export type TCategories = {
  id?: number;
  title: string;
  prefix: string;
  img: string;
};

export interface ICategoriesState {
  data: TCategories[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

export type TCategoryResponse = TCategories[]