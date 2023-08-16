import React from "react";
import Style from "./FlexGrid.module.css";

export type FlexGridProps = {
  columns?: number;
};

/**
 * N column project grid; if column property is not specified,
 * defaults to 2
 */
export const FlexGrid = (props: React.PropsWithChildren<FlexGridProps>) => {
  const children = React.Children.toArray(props.children);
  const columns = props.columns ? props.columns : 2;
  const rows = [];

  for (let ind = 0; ind < children.length; ind += columns) {
    rows.push(
      <div className={Style.flexGridRow}>
        {children.slice(ind, ind + columns).map((child) => child)}
      </div>
    );
  }
  return <div className={Style.flexGrid}>{rows}</div>;
};
