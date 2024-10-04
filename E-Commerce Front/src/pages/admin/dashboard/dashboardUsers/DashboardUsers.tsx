import { useEffect } from "react";
import DashboardTable from "../../../../components/dashboard/dashboardTable/DashboardTable";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import getUsers from "../../../../store/users/thunk/getUsers";

const thead = ["Image", "Email", "Full Name", "Role", "Actions"];
function DashboardUsers() {
  const { data } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(data);
  
  return (
    <section>
      <DashboardTable type="user" thead={thead} data={data}></DashboardTable>
    </section>
  );
}

export default DashboardUsers;
