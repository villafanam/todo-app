# LAB - Class 32

## Project: Context API - Behaviors

### Author: Marco Villafana

### Problem Domain  

+ Implement the Context API to make some basic application settings available to components.
  + How many To Do Items to show at once.
  + Whether or not to show completed items.

+ Provide the users with a form where they can change the values for those settings.
  + This should be given in the form of a new component, perhaps linked to from the main navigation.
  + Hint: Use Browser Router to create the page/route/component for this.
  + Once settings are updated, render the updated settings to the right of the “form”. Consider using <Grid />, <Card />, and <When /> components.

### Links and Resources

+ [GitHub Actions ci/cd](https://github.com/villafanam/todo-app/actions)
+ [GitHub PR](https://github.com/villafanam/todo-app/pull/1)
+ Code Sandbox
  + [Lab 31](https://codesandbox.io/p/github/villafanam/todo-app/context-settings?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfrulrzo000wg3i566apdi3i%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfsjuwvi009u356ivdnpesk5%2522%253A%257B%2522key%2522%253A%2522clfsjuwvi009u356ivdnpesk5%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfsjuwvi009v356i4dt10kaj%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfsjuwvi009w356ito36bsi0%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfsjuwvi009u356ivdnpesk5%2522%252C%2522spacesOrder%2522%253A%255B%2522clfsjuwvi009u356ivdnpesk5%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
  + [Lab 32]()

### Setup

+ `npm install`

#### How to initialize/run your application (where applicable)

+ e.g. `npm start`

#### Features

+ Routes
  + `/` - home page with the Todo form
  + `/setting` - setting form to change the setting and save them in local storage

+ Feature One: Todo list
  + Based on user preferences, show listings in groups of (3, 5, etc) and provide the ability to view multiple “pages” of results.
  + Each item in list should show the text of the item as well as the assignee.
    + Based on user preferences, hide or show completed items.
    + If shown, completed items should be styled differently making their status visually obvious.

+ Feature Two: Setting Form
  + Form containing `<Switch>`, `<NumberInput>`, `<TextInput>`, and `<Button>`
    + `<Switch>` - to toggle the visibility of the completed tasks
    + `<NumberInput>` - to input the number of items per page
    + `<TextInput>` - to input keyword to sort list by
    + `<Button>` - to render the current/updated settings

#### Tests

+ Footer.test.jsx
  + displays footer text as expected

+ Todo.test.jsx
  + render a header element as expected

#### UML

Link to an image of the UML for your application and response to events
