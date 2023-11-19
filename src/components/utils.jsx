import React from "react";

import {
  MdOutlineSignalCellularAlt,
  MdOutlineSignalCellularAlt2Bar,
  MdOutlineSignalCellularAlt1Bar,
  MdCancel
} from "react-icons/md";
import { IoMdWarning } from "react-icons/io";
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { RiStackFill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";

export const getPriorityIcon = ({ priority, style }) => {
  switch (priority) {
    case 4:
      return <IoMdWarning style={{ ...style, color: "#FC7941" }} />;

    case 3:
      return <MdOutlineSignalCellularAlt style={style} />;

    case 2:
      return <MdOutlineSignalCellularAlt2Bar style={style} />;

    case 1:
      return <MdOutlineSignalCellularAlt1Bar style={style} />;

    default:
      return <GoKebabHorizontal {...style} />;
  }
};

export const getStatusIcon = ({ status, style }) => {
  switch (status) {
    case "Todo":
      return <FaRegCircle style={{ ...style, color: 'rgb(149,163,180)' }} />;
    case "In progress":
      return <RxLapTimer style={{ ...style, color: "#F1C948" }} />;
    case "Done":
      return <AiFillCheckCircle style={{ ...style, color: "#5E6AD2" }} />;
    case "Backlog":
      return <RiStackFill style={{ ...style, color: 'rgb(149,163,180)' }} />;
    case "Cancelled":
      return <MdCancel style={{ ...style, color: 'rgb(149,163,180)' }} />
    default:
      return <GoKebabHorizontal />;
  }
};

const bgColors = ["#C06D25", "#868700", "#2B963A", "#5681EB", "#5E6AD2"];
export function getUserIcon(
  { title, available },
  shouldRenderAvailabilityIcon,
) {
  const [firstName, lastName] = title.split(" ");

  const f = firstName[0].toUpperCase();
  const l = lastName ? lastName[0]?.toUpperCase() : "";
  const randomBgColor = bgColors[Math.min(4, Math.floor(Math.random() * 10))];
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: randomBgColor,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 11,
        fontWeight: "bold",
        position: "relative",
      }}
    >
      <div style={{ margin: "auto" }}>{`${f}${l}`}</div>
      {shouldRenderAvailabilityIcon && (
        <div
          style={{
            position: "absolute",
            border: "2px solid white",
            backgroundColor: available ? "#03B346" : "#DFE1E4",
            width: 8,
            height: 8,
            borderRadius: "50%",
            bottom: -5,
            right: -3,
            zIndex: 2,
          }}
        />
      )}
    </div>
  );
}

export const rendertag = (title) => {
  return (
    <div
      style={{
        border: "1px solid #eeeeee",
        borderRadius: "4px",
        display: "flex",
        padding: "2px",
        alignItems: "center",
        margin: "auto 2px",
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#BEC2C8",
          marginRight: 6,
        }}
      />
      <div
        style={{ color: "rgb(107,111,118)", fontSize: 11, fontWeight: "600" }}
      >
        {title}
      </div>
    </div>
  );
};