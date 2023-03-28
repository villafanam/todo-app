import React, { useContext, useState } from "react";
import { Pagination } from '@mantine/core';
import { SettingContext } from "../../Context/Settings";

const List = () => {
  const { list, setList } = useContext(SettingContext);
  const [activePage, setPage] = useState(0);

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }

      return item;
    });

    setList(items);

  }


  return (
    <>
      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

      {/* <div key={list[activePage].id}>
        <p>{list[activePage].text}</p>
        <p><small>Assigned to: {list[activePage].assignee}</small></p>
        <p><small>Difficulty: {list[activePage].difficulty}</small></p>
        <div onClick={() => toggleComplete(list[activePage].id)}>Complete: {list[activePage].complete.toString()}</div>
        <hr />
      </div> */}

      <Pagination page={activePage} onChange={setPage} total={list.length} />;
    </>
  );
};


export default List;