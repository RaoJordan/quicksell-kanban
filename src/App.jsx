import React, { useEffect, useState } from "react";

import "./App.css";
import { ColumnContainer } from "./containers/columnContainer/columnContainer";
import { HeaderContainer } from "./containers/headerContainer/headerContainer";

import { MyContext } from './app.context'
import { GROUP_BY, ORDER_BY } from "./testing.constant";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const [groupBy, setGroupBy] = useState(
    localStorage.getItem("groupBy") || GROUP_BY.STATUS
  );
  const [orderBy, setOrderBy] = useState(
    localStorage.getItem("orderBy") || ORDER_BY.PRIORITY
  );

  async function fetchData() {
    const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
    const data = await response.json();
    setTickets(data.tickets);
    setUsers(data.users);
  }

  useEffect(() => {
    if (tickets.length === 0 || users.length === 0) {
      fetchData();
    }
  }, [tickets.length, users.length]);

  useEffect(() => {
    // Save filters to localStorage whenever they change
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("orderBy", orderBy);
  }, [groupBy, orderBy]);

  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <HeaderContainer setGroupBy={setGroupBy} setOrderBy={setOrderBy} />
      <MyContext.Provider value={{ groupBy, orderBy, users, tickets }}>
        <ColumnContainer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
