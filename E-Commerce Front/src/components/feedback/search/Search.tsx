import useHeader from "../../../hooks/useHeader";

function Search() {
  const { filteredData, isOpen, searchHandler, getProductHandler } =
    useHeader();

  return (
    <div>
      <input
        onChange={searchHandler}
        type="search"
        placeholder="Search..."
      ></input>
      <div
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none",
        }}
      >
        {filteredData?.length === 0 ? (
          <span style={{ display: "block", textAlign: "center" }}>
            No results found
          </span>
        ) : (
          filteredData?.map((el, index) => {
            return (
              <div key={index} onClick={() => getProductHandler(el.id)}>
                {el.title}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Search;
