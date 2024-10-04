import { z } from "zod";

const productsManagementSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  img: z.string().min(1, { message: "Image Link is required" }),
  sizes: z.array(z.string()).min(1, "Please select at least one size"),
  desc: z.string().min(1, { message: "Description is required" }),
  price: z.string().min(1, { message: "Price is required" }),
  cat_prefix: z.enum(["men", "women", "kids", "sport"], {
    errorMap: () => ({ message: "Please select a category" }),
  }),
});
type productsManagementType = z.infer<typeof productsManagementSchema>;

export { productsManagementSchema, type productsManagementType };
