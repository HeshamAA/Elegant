import DetailsMenu from "../../../DetailsMenu/DetailsMenu";

function DashboardMenu() {
  const dashboardLinks = ["products", "users"];
  return (
    <>
      <DetailsMenu
        summaryTitle="Dashboard"
        data={dashboardLinks}
        link="dashboard"
        style={{
          backgroundColor: "var(--secondary-color)",
          boxShadow: "none",
        }}
      ></DetailsMenu>
    </>
  );
}

export default DashboardMenu;
