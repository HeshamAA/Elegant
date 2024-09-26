export type TProductFormInputs = {
  title: string;
  img: string;
  desc: string;
  price: number;
  cat_prefix: string;
  sizes: { value: string; label: string }[];
};
export type TProductManagementProps = {
  actionType: string;
  productId?: string;
  defaultValues?: TProductFormInputs;
  sizesDefaultValues?: string[];
};
export type TFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};