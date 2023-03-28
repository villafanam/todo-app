import React, { useContext, useState } from "react";
import { Pagination } from '@mantine/core';
import { SettingContext } from "../../Context/Settings";

const List = ({ list, toggleComplete }) => {
  const { displayCount, showComplete, sort } = useContext(SettingContext);
  const [activePage, setPage] = useState(1);
  console.log(sort);

  const listToRender = showComplete ? list : list.filter(item => !item.complete);
  const listStart = displayCount * (activePage - 1);
  const listEnd = listStart + displayCount;
  const pageCount = Math.ceil(listToRender.length / displayCount);

  const displayList = listToRender.slice(listStart, listEnd);

  return (
    <>
      {displayList.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

      <Pagination page={activePage} onChange={setPage} total={pageCount} />
    </>
  );
};


export default List;