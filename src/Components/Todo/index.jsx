import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { Card, TextInput, Text, createStyles, Slider, Button } from '@mantine/core';
import { Grid } from '@mantine/core';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import List from '../List';
import Auth from '../Auth';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  }
}));


const Todo = () => {

  const { classes } = useStyles();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  async function addItem(item) {
    //item.id = uuid();
    item.complete = false;
    // console.log(item);
    
    let config = {
      method: 'post',
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/api/v1/todo',
      data: item,
    };
    let response = await axios(config);
    //console.log('dbData----',response.data)
    setList([...list, response.data]);
  }

  async function deleteItem(id) {
    const items = list.filter(item => item._id !== id);
    setList(items);

    let config = {
      method: 'delete',
      baseURL: 'https://api-js401.herokuapp.com',
      url: `/api/v1/todo/${id}`,
    };
    let response = await axios(config);
  }

  async function toggleComplete(id) {

    const items = list.map(item => {
      if (item._id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    let updateItem = list.filter((item) => item._id === id)[0];

    let config = {
      method: 'put',
      baseURL: 'https://api-js401.herokuapp.com',
      url: `/api/v1/todo/${id}`,
      data: updateItem,
    };
    
    let response = await axios(config);
    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  const fetchData = async () => {
    let config = {
      method: 'get',
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/api/v1/todo',
    };
    let response = await axios(config);
    console.log('data:-----',response.data.results);
    setList(response.data.results); 
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className={classes.h1} data-testid="todo-h1">To Do List: {incomplete} items pending</h1>

      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4} >

          <Auth capability="create">
            <Card withBorder>
              <form onSubmit={handleSubmit}>

                <h2>Add To Do Item</h2>

                <TextInput
                  onChange={handleChange}
                  name="text"
                  label="To Do Item"
                  placeholder="Item Details"
                />

                <TextInput
                  onChange={handleChange}
                  name="assignee"
                  label="Assigned To"
                  placeholder="Assignee Name"
                />

                <Text>Difficulty</Text>
                <Slider
                  name="difficulty"
                  onChange={handleChange}
                  defaultValue={defaultValues.difficulty}
                  min={1}
                  max={5}
                  step={1}
                >

                </Slider>

                <Button mt="sm" type="submit">Add Item</Button>
              </form>
            </Card>
          </Auth>

        </Grid.Col>

        <Grid.Col xs={12} sm={8}>
          <List
            list={list}
            deleteItem={deleteItem}
            toggleComplete={toggleComplete}
          />
        </Grid.Col>

      </Grid>


    </>
  );
};

export default Todo;
