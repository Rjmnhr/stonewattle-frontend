import React from "react";
import { useDrop } from "react-dnd";
import FilterItem from "./filter-item";

const FilterContainer = ({ category, filters, onFilterMove, style }) => {
  const [, dropRef] = useDrop({
    accept: "FILTER",
    drop: (item) => {
      onFilterMove(item.filter, item.category, category);
    },
  });

  return (
    <>
      <div
        style={{
          padding: "8px",
          margin: "8px",
          ...style,
        }}
        ref={dropRef}
        className="category-container"
      >
        {category === "available" && filters.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              height: "150px",
            }}
          >
            <p>No more filters</p>
          </div>
        ) : (
          <div
            style={{
              padding: "8px",
              margin: "8px",

              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {filters.map((filter) => (
              <FilterItem key={filter} filter={filter} category={category} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilterContainer;

// import React from "react";
// import { useDrop } from "react-dnd";
// import FilterItem from "./filter-item";

// const FilterContainer = ({ category, filters, onFilterMove }) => {
//   const [, dropRef] = useDrop({
//     accept: "FILTER",
//     drop: (item) => {
//       // If dropped into the 'Remove Box'
//       if (category === "remove") {
//         onFilterMove(item.filter, item.category, "available");
//       } else {
//         onFilterMove(item.filter, item.category, category);
//       }
//     },
//   });

//   return (
//     <div
//       style={{ border: "1px solid black", padding: "8px", margin: "8px" }}
//       ref={dropRef}
//     >
//       <h3>{category}</h3>
//       {filters.map((filter) => (
//         <FilterItem key={filter} filter={filter} category={category} />
//       ))}
//       {category !== "available" && (
//         <div
//           style={{
//             border: "1px dashed black",
//             padding: "8px",
//             marginTop: "8px",
//           }}
//           onClick={() => onFilterMove(filters, category, "remove")}
//         >
//           Drag filter here to remove from this category
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterContainer;
