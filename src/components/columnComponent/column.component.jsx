import React from "react";
import { ColumnHeader } from "../columnHeader/columnHeader";
import { ColumnBody } from "../columnBody/columnBody";

import './column.css'

export function ColumnComponent(props) {
  return (
    <div className="columns-parent">
      <ColumnHeader {...props} />
      <ColumnBody {...props} />
    </div>
  );
}
