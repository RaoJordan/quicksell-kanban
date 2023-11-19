import React, { useContext } from "react";
import { ColumnComponent } from "../../components/columnComponent/column.component";

import { GROUP_BY, ORDER_BY, priority, status } from "../../testing.constant";
import { MyContext } from "../../app.context";

import "./columnContainer.css";

export function ColumnContainer() {
  const { groupBy, users, tickets, orderBy } = useContext(MyContext);

  const sortTickets = (ticketsArray) => {
    return ticketsArray.sort((a, b) => {
      if (orderBy === ORDER_BY.PRIORITY) {
        return b.priority - a.priority;
      }

      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  };

  const getColumnsList = () => {
    if (groupBy === GROUP_BY.STATUS) {
      return status.map((st) => ({
        title: st,
        groupBy,
        status: st,
        tickets: [
          ...sortTickets(tickets.filter((ticket) => ticket.status === st)),
        ],
      }));
    } else if (groupBy === GROUP_BY.PRIORITY) {
      return priority.map((pr) => ({
        title: pr.title,
        priority: pr.level,
        groupBy,
        tickets: [
          ...sortTickets(
            tickets.filter((ticket) => ticket.priority === pr.level),
          ),
        ],
      }));
    } else {
      return users.map((user) => ({
        title: user.name,
        groupBy,
        userId: user.id,
        tickets: [
          ...sortTickets(tickets.filter((ticket) => ticket.userId === user.id)),
        ],
      }));
    }
  };
  return (
    <div className="column-container">
      <div
        className="column-inner-container"
        style={{
          gridTemplateColumns: `repeat(${getColumnsList().length}, 1fr)`,
        }}
      >
        {getColumnsList().map((column) => {
          return <ColumnComponent {...column} />;
        })}
      </div>
    </div>
  );
}
