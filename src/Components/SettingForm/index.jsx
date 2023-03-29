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

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    savePreferences();
  }

  return (
    <>

      <h1 data-testid="settingForm-h1">Manage Settings</h1>

      <Grid style={{ width: '80%', margin: 'auto' }} gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        <Grid.Col span={5}>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Text m="xl" fontSize="xl" weight="bold" >Update Settings</Text>
            </Card.Section>

            <form onSubmit={handleSubmit}>
              <Switch
                checked={showComplete}
                onChange={(e) => setShowComplete(e.currentTarget.checked)}
                label="Show Completed ToDo's"
              />

              <NumberInput
                placeholder={displayCount}
                label="Items Per Page"
                onChange={(e) => setDisplayCount(e)}
              />

              <TextInput
                placeholder="difficulty"
                label="Sort Keyword"
                onChange={(e) => setSort(e.target.value)}
              />

              <Button type="submit"> Show New Settings </Button>
            </form>
          </Card>


        </Grid.Col>

        <Grid.Col span={5}>

          <When condition={show}>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Text m="xl" fontSize="xl" weight="bold" >Update Settings</Text>
              </Card.Section>

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