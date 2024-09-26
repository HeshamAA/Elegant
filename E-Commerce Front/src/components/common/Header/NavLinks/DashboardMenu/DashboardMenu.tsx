import DetailsMenu from "../../../DetailsMenu/DetailsMenu";

function DashboardMenu() {
  const dashboardLinks = ["products", "users", "orders"];
  return (
    <>
      <DetailsMenu
        summaryTitle="Dashboard"
        data={dashboardLinks}
        link="dashboard"
        style={{ position: "relative",backgroundColor:"var(--third-color)",boxShadow:"none" }}
      ></DetailsMenu>
    </>
  );
}

export default DashboardMenu;
