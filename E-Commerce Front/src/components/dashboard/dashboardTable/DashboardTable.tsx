import React from "react";
import { TDashboardTableProps } from "../../../types/dashboardTypes";
import styles from "./dashboardTable.module.css";
import useDashboardTable from "../../../hooks/useDashboardTable";
import Tbody from "./TBody/Tbody";
import Empty from "../../feedback/empty/Empty";

const { dashboardTable } = styles;

// Type Guards

// eslint-disable-next-line react-refresh/only-export-components
function DashboardTable({ type, thead, data }: TDashboardTableProps) {
  const { searchValue, searchHandler, filteredData } = useDashboardTable(data);

  return (
    <div className={dashboardTable}>
      <input
        placeholder="Search"
        value={searchValue}
        onChange={searchHandler}
      />

      <div>
        {`${
          !searchValue && filteredData.length !== 0
            ? `You have ${filteredData.length} items in the list`
            : `There's ${filteredData.length} results`
        }`}
      </div>

      {filteredData.length !== 0 ? (
        <table className="container">
          <thead>
            <tr>
              {thead.map((el, index) => (
                <th key={index}>{el}</th>
              ))}
            </tr>
          </thead>
          <Tbody filteredData={filteredData} data={data} type={type} />
        </table>
      ) : (
        <Empty text="No Items Found"></Empty>
      )}
    </div>
  );
}

export default React.memo(DashboardTable);
