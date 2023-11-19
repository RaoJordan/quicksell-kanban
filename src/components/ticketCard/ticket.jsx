import React from "react";

import "./ticket.css";
import {
  getPriorityIcon,
  getStatusIcon,
  getUserIcon,
  rendertag,
} from "../utils";
import { GROUP_BY } from "../../testing.constant";

export function TicketCard(props) {
  const { id, title, tag, userId, status, priority, groupBy } = props;

  const shouldRenderStatusIcon = groupBy !== GROUP_BY.STATUS;
  const shouldRenderPriorityIcon = groupBy !== GROUP_BY.PRIORITY;
  const shouldRenderUserIcon = groupBy !== GROUP_BY.USER;
  return (
    <div className="card-container">
      <div className="card-inner-container">
        <div className="card-header">
          {id}
          {shouldRenderUserIcon &&
            getUserIcon(
              { id: userId, title: title, available: true },
              true,
            )}
        </div>
        <div className="card-body">
          {shouldRenderStatusIcon && (
            <div style={{ marginRight: 2, paddingTop: 2 }}>
              {getStatusIcon({
                status,
                style: {
                  color: "#6B6F76",
                  width: "14px",
                  height: "14px",
                },
              })}
            </div>
          )}
          {title}
        </div>
        <div className="card-footer">
          {shouldRenderPriorityIcon && (
            <div
              className="footer-icon-container"
            >
              {getPriorityIcon({
                priority,
                style: {
                  color: "#6B6F76",
                  width: "16px",
                  height: "16px",
                },
              })}
            </div>
          )}
          {tag.map((tg) => {
            return rendertag(tg);
          })}
        </div>
      </div>
    </div>
  );
}
