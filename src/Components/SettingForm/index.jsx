import React, { useContext, useState } from 'react';
import { Grid, Switch, NumberInput, Button, TextInput, Card, Text } from '@mantine/core';
import { SettingContext } from '../../Context/Settings/';
import { When } from 'react-if';

const SettingForm = ({ list, toggleComplete }) => {
  const [show, setShow] = useState(false);
  const {
    displayCount,
    showComplete,
    sort,
    savePreferences,
    setDisplayCount,
    setShowComplete,
    setSort,
  } = useContext(SettingContext);

  const handleClick = () => {
    setShow(true);
    savePreferences();
  }

  return (
    <>

      <h1 data-testid="settingForm-h1">Manage Settings</h1>

      <Grid style={{width: '80%', margin: 'auto'}} gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        <Grid.Col span={5}>
          <h2>Update Settings</h2>

          <Switch
            checked={showComplete}
            onChange={(e) => { setShowComplete(e.currentTarget.checked) }}
            label="Show Completed ToDo's"
          />

          <NumberInput
            defaultValue={3}
            placeholder="Items Per page"
            label="Items Per page"
            onChange={(e) => setDisplayCount(e)}
          />

          <TextInput
            placeholder="difficulty"
            label="Sort Keyword"
            onChange={(e) => setSort(e.target.value)}
          />

          <Button onClick={handleClick}> Show New Settings </Button>

        </Grid.Col>

        <Grid.Col span={5}>


          <When condition={show}>
            <h2>Update Settings</h2>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Text size="lg" >
                <When condition={showComplete}>
                  Show Completed ToDo's
                </When>
              </Text>
              <Text size="lg" >Items Per Page: {displayCount}</Text>
              <Text size="lg" >Sort Keyword: {sort}</Text>
            </Card>

          </When>
        </Grid.Col>

      </Grid>
    </>
  );
};


export default SettingForm;