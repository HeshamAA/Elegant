import styles from "./topBar.module.css";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import Search from "../../feedback/search/Search";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { logout } from "../../../store/auth/authSlice";
import { clearWatchList } from "../../../store/addToWatchList/addToWatchListSlice";
import toast from "react-hot-toast";
const { topBar } = styles;
function TopBar() {
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearWatchList());

    toast.success("You're logged out now", {
      duration: 2000,
      className: "custom-toast-warning",
      position: "top-center",
      iconTheme: {
        primary: "#856404",
        secondary: "#FFFAEE",
      },
    });
  };

  return (
    <div className={topBar}>
      <div className="container flexBetween">
        <Search></Search>

        <div className="flex" style={{ gap: "20px" }}>
          {accessToken ? (
            <>
              <div className="flex" style={{ gap: "10px" }}>
                <RxAvatar size={30} />
                <div style={{ textTransform: "capitalize" }}>
                  {user.firstName}
                  <span> {user.lastName}</span>
                </div>
              </div>

              <Link onClick={logoutHandler} to="/">
                Logout
              </Link>
            </>
          ) : (
            <>
              <div className="flex" style={{ gap: "10px" }}>
                <RxAvatar size={30} />
                <div>Hi Guest</div>
              </div>
              <Link to="/login">Sign in</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
