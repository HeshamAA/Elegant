import useHeader from "../../../../../hooks/useHeader";
import DetailsMenu from "../../../DetailsMenu/DetailsMenu";



function CategoriesMenu() {
  const { categories } = useHeader();

  return (
    <DetailsMenu
      summaryTitle="Categories"
      data={categories}
      link="products"
    ></DetailsMenu>
  );
}

export default CategoriesMenu;
