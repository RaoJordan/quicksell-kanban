import React, { useEffect, useState, useRef } from "react";
import './headerContainer.css';
import { GROUP_BY, ORDER_BY } from "../../testing.constant";
import { MdDisplaySettings } from "react-icons/md";

export function HeaderContainer({ setGroupBy, setOrderBy }) {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const [groupValue, setGroupValue] = useState(GROUP_BY.STATUS);
  const [orderValue, setOrderValue] = useState(ORDER_BY.PRIORITY);
  const dropdownRef = useRef(null);

  const handleDisplayClick = () => {
    setDisplayOnClick(!displayOnClick);
  };

  const handleGroupValue = (event, isGrouping) => {
    const selectedValue = event.target.value;

    if (isGrouping) {
      setGroupValue(selectedValue);
      setGroupBy(selectedValue);
    } else {
      setOrderValue(selectedValue);
      setOrderBy(selectedValue);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDisplayOnClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-container" style={{ paddingTop: "0px", paddingBottom: "1.25rem" }}>
      <div className="top-header" style={{ paddingLeft: "0.625rempx" }}>
        <div className="displayButton" ref={dropdownRef}>
          <button
            className="p-10 f-16 disButton"
            onClick={handleDisplayClick}
            style={{ display: "flex", gap: "0.625rem" }}
          >
            <MdDisplaySettings color="#6C7077" size={18} /> <span style={{ fontSize: "0.9375rem" }}>Display</span>
          </button>
          {displayOnClick && (
            <>
              <div className="dropOnClick flex-gap-10 p-10">
                <div className="selectGroup flex-sb">
                  <span style={{ marginRight: "0.625rem" }}>Grouping</span>
                  <select
                    value={groupValue}
                    onChange={(e) => handleGroupValue(e, true)}
                    className="selectStyle"
                    name="group"
                    id="group"
                  >
                    <option value={GROUP_BY.STATUS}>Status</option>
                    <option value={GROUP_BY.USER}>User</option>
                    <option value={GROUP_BY.PRIORITY}>Priority</option>
                  </select>
                </div>
                <div className="selectGroup flex-sb">
                  <span style={{ marginRight: "0.625rem" }}>Ordering</span>
                  <select
                    value={orderValue}
                    onChange={(e) => handleGroupValue(e, false)}
                    className="selectStyle"
                    name="order"
                    id="order"
                  >
                    <option value={ORDER_BY.PRIORITY}>Priority</option>
                    <option value={ORDER_BY.TITLE}>Title</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
