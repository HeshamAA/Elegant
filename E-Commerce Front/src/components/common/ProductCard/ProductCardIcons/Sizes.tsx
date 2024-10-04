import React from "react";

type TSizesProps = {
  availableSizes?: string[]; // Make it optional or include undefined
};
const Sizes: React.FC<TSizesProps> = ({ availableSizes = [] }) => {
 
  return (
    <>
      {availableSizes.map((size, index) => (
        <div key={index}>
          <input type="checkbox" />
          <label htmlFor={`size-${index}`}>{size}</label>
        </div>
      ))}
    </>
  );
};

export default React.memo(Sizes)
