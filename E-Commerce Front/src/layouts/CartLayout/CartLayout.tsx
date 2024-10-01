
import { Outlet } from "react-router-dom";
import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";

function CartLayout() {
  return (
    <>
    <PagesFirstSection title="Cart"></PagesFirstSection>
    
      <Outlet></Outlet>
    </>
  );
}

export default CartLayout;
