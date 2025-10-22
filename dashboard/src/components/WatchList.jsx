import React, { useState, useEffect } from "react";

import { watchlist } from "../data/Data";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoneyRounded,
  MoreHoriz,
  PictureInPictureAltSharp,
} from "@mui/icons-material";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <>
              <WatchListItem stock={stock} key={index} />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <li
      className="list-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="item">
        <span className={stock.isDown ? "down" : "up"}>{stock.name}</span>
        <div className="itemInfo">
          <span className="price">{stock.price}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.percent}</span>
        </div>
      </div>
      {hovered && <WatchListActionTooltip uid={stock.name} />}
    </li>
  );
};

const WatchListActionTooltip = ({ uid }) => {
  return (
    <>
      <span className="actions">
        <span>
          <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
            <button className="buy">Buy</button>
          </Tooltip>
          <Tooltip
            title="Sell"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="sell">Sell</button>
          </Tooltip>

          <Tooltip
            title="Analysis Graph"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button>
              {" "}
              <BarChartOutlined />
            </button>
          </Tooltip>

          <Tooltip
            title="More Analysis"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button>
              {" "}
              <MoreHoriz />
            </button>
          </Tooltip>
        </span>
      </span>
    </>
  );
};
