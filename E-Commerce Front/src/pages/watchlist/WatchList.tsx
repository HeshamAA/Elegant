import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";
import { useAppSelector } from "../../store/hooks/hooks";
import styles from "./watchList.module.css";

const { watchListSection } = styles;
function WatchList() {
//   const watchListIds = useAppSelector(
//     (state) => state.addToWatchListSlice.watchListIds
//   );

  return (
    <>
      <PagesFirstSection title="Watchlist"></PagesFirstSection>
      <section className={watchListSection}></section>
    </>
  );
}

export default WatchList;
