import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GoKebabHorizontal } from "react-icons/go";
import "./columnHeader.css";
import { getPriorityIcon, getStatusIcon, getUserIcon } from "../utils";
import { GROUP_BY } from "../../testing.constant";

export function ColumnHeader({ title, groupBy, tickets, status, priority }) {
  const getHeaderIcon = () => {
    switch (groupBy) {
      case GROUP_BY.STATUS:
        return getStatusIcon({ status });
      case GROUP_BY.PRIORITY:
        return getPriorityIcon({ priority });
      default:
        return getUserIcon({ title }, false);
    }
  };

  const count = tickets.length
  return (
    <div className="column-header">
      <div>
        <div style={{ marginRight: 8 }}>{getHeaderIcon()}</div>
        <div style={{ marginRight: 8 }}>{title}</div>
        <div style={{ color: "#6B6F76" }}>{count}</div>
      </div>
      <div>
        <AiOutlinePlus color="#6C7077" style={{ margin: "auto 4px" }} />
        <GoKebabHorizontal color="#6C7077" />
      </div>
    </div>
  );
}
