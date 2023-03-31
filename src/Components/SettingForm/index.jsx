import React, { useContext, useState } from 'react';
import { Grid, Switch, NumberInput, Button, TextInput, Card, Text } from '@mantine/core';
import { SettingContext } from '../../Context/Settings/';
import { When } from 'react-if';
import { IconSettings } from '@tabler/icons-react';
import { createStyles } from '@mantine/core';


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

const SettingForm = ({ list, toggleComplete }) => {
  const { classes } = useStyles();
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

      <h1 className={classes.h1} data-testid="settingForm-h1"><IconSettings /> Manage Settings</h1>

      <Grid style={{ width: '80%', margin: 'auto' }} gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        <Grid.Col span={5}>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Text m="xl" fontSize="xl" weight="bold" >Update Settings</Text>
            </Card.Section>

            <form onSubmit={handleSubmit}>
            {/* <Text m="xl" fontSize="xl" weight="bold" >Update Settings</Text> */}
              <Switch
                checked={showComplete}
                onChange={(e) => setShowComplete(e.currentTarget.checked)}
                label="Show Completed ToDo's"
              />

              <NumberInput
                placeholder={displayCount}
                label="Items Per Page"
                onChange={(value) => setDisplayCount(value)}
              />

              <TextInput
                placeholder={sort}
                label="Sort Keyword"
                onChange={(e) => setSort(e.target.value)}
              />

              <Button m="sm" type="submit"> Show New Settings </Button>
            </form>
          </Card>


        </Grid.Col>

        <Grid.Col span={5}>

          <When condition={show}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Text m="xl" fontSize="xl" weight="bold" >Update Settings</Text>
              </Card.Section>

              <Text m="sm" >
                <When condition={showComplete}>
                  Show Completed ToDo's
                </When>
              </Text>
              <Text m="sm" >Items Per Page: {displayCount}</Text>
              <Text m="sm">Sort Keyword: {sort}</Text>
            </Card>
          </When>

        </Grid.Col>

      </Grid>
    </>
  );
};


export default SettingForm;