import React, { useContext, useState } from "react";
import { Pagination, Badge, Card, Group, Text, CloseButton } from '@mantine/core';
import { SettingContext } from "../../Context/Settings";
import { AuthContext } from "../../Context/Auth"
import { Else, If, Then } from "react-if";
import Auth from "../Auth";

const List = ({ list, toggleComplete, deleteItem }) => {

  const { loggedIn, can } = useContext(AuthContext);
  const { displayCount, showComplete, sort } = useContext(SettingContext);
  const [activePage, setPage] = useState(1);
  // console.log(sort);

  const listToRender = showComplete ? list : list.filter(item => !item.complete);
  const listStart = displayCount * (activePage - 1);
  const listEnd = listStart + displayCount;
  const pageCount = Math.ceil(listToRender.length / displayCount);

  const displayList = listToRender.slice(listStart, listEnd);

  return (
    <>
      {displayList.map(item => (
        <Card withBorder shadow="md" key={item.id} mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group>
                <If condition={loggedIn && can('update')}>
                  <Then>
                    <Badge
                      onClick={() => toggleComplete(item.id)}
                      color={item.complete ? 'red' : 'green'}
                      variant="filled"
                      m="3px"
                    >
                      {item.complete ? 'Complete' : 'Pending'}
                    </Badge>
                  </Then>
                  <Else>
                    <Badge
                      color={item.complete ? 'red' : 'green'}
                      variant="filled"
                      m="3px"
                    >
                      {item.complete ? 'Complete' : 'Pending'}
                    </Badge>
                  </Else>
                </If>

                <Text>{item.assignee}</Text>
              </Group>

              <Auth capability="delete">
                <CloseButton onClick={() => deleteItem(item.id)} title="Close Todo Item" />
              </Auth>

            </Group>
          </Card.Section>

          <Text mt="sm">{item.text}</Text>
          <Text align="right">{item.difficulty}</Text>
        </Card>
      ))}

      <Pagination page={activePage} onChange={setPage} total={pageCount} />
    </>
  );
};


export default List;