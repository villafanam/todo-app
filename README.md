# LAB - Class 34

## Project: API Integration

### Author: Marco Villafana

### Problem Domain  

+ Finalize the functionality of the application by connecting to live servers for login, authorization, and data access.
+ Alter the Add, Toggle Complete, and Delete functions within your to do application to use your API instead of in memory state.
Fetch the current list of items from the database on application start.
+ Whenever you add/update/delete an item, refresh the state so the user can instantly see the change.
  + Consider: Do you re-fetch from the server every time you make a change?

+ Alter the Login Context to use the server to login users instead of our mock users list.
  + Be sure to store the token in state as well as in a cookie so you can reference it later.

### Links and Resources

+ [GitHub Actions ci/cd](https://github.com/villafanam/todo-app/actions)
+ [GitHub PR](https://github.com/villafanam/todo-app/pull/10)
+ Code Sandbox
  + [Lab 31](https://codesandbox.io/p/github/villafanam/todo-app/context-settings?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfrulrzo000wg3i566apdi3i%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfsjuwvi009u356ivdnpesk5%2522%253A%257B%2522key%2522%253A%2522clfsjuwvi009u356ivdnpesk5%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfsjuwvi009v356i4dt10kaj%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfsjuwvi009w356ito36bsi0%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfsjuwvi009u356ivdnpesk5%2522%252C%2522spacesOrder%2522%253A%255B%2522clfsjuwvi009u356ivdnpesk5%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
  + [Lab 32](https://codesandbox.io/p/github/villafanam/todo-app/context-methods?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfrulrzo000wg3i566apdi3i%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clft56vtr006s356idynoemyc%2522%253A%257B%2522key%2522%253A%2522clft56vtr006s356idynoemyc%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clft570zi00d9356iqpmuhqmw%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522key%2522%253A%2522clft56vtr006t356iu95kc3x2%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clft570vi00bn356ijf6rauow%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clft56vtr006s356idynoemyc%2522%252C%2522spacesOrder%2522%253A%255B%2522clft56vtr006s356idynoemyc%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
  + [Lab 33](https://codesandbox.io/p/github/villafanam/todo-app/login-auth?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfrulrzo000wg3i566apdi3i%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clful36ta006k356iyxqzi2pt%2522%253A%257B%2522key%2522%253A%2522clful36ta006k356iyxqzi2pt%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clful36ta006l356icd2usr9z%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clful36ta006k356iyxqzi2pt%2522%252C%2522spacesOrder%2522%253A%255B%2522clful36ta006k356iyxqzi2pt%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
  + [Lab 34](https://codesandbox.io/p/github/villafanam/todo-app/integration?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfrulrzo000wg3i566apdi3i%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfw7m7lu007f356isedfcref%2522%253A%257B%2522key%2522%253A%2522clfw7m7lu007f356isedfcref%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfw7m7lu007g356iwm6dy4jd%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clfw7m9so00bo356ic8xr9xmc%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfw7m7lu007f356isedfcref%2522%252C%2522spacesOrder%2522%253A%255B%2522clfw7m7lu007f356isedfcref%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

### Setup

+ `npm install`

#### How to initialize/run your application (where applicable)

+ e.g. `npm start`

#### Features

+ Routes
  + `/` - home page with the Todo form
  + `/setting` - setting form to change the setting and save them in local storage

+ Feature 1: Todo list
  + Based on user preferences, show listings in groups of (3, 5, etc) and provide the ability to view multiple “pages” of results.
  + Each item in list should show the text of the item as well as the assignee.
    + Based on user preferences, hide or show completed items.
    + If shown, completed items should be styled differently making their status visually obvious.

  + For users with “Update” permissions:
    + When an item is clicked, toggle the “complete” status of the item.
  + For users with “Delete” permissions:
    + Items should have a delete button associated with them.
      + When clicked, remove the item from the list.

+ Feature 2: Setting Form
  + Form containing `<Switch>`, `<NumberInput>`, `<TextInput>`, and `<Button>`
    + `<Switch>` - to toggle the visibility of the completed tasks
    + `<NumberInput>` - to input the number of items per page
    + `<TextInput>` - to input keyword to sort list by
    + `<Button>` - to render the current/updated settings

+ Feature 3: Login Component
  + When a user is not logged in:
    + Show Login form.
      + Require Fields: Username, Password
    + When a user is logged in:
      + Show a “Logout” link.
        + When clicked, this should remove any cookies you have set and remove access.

#### Tests

+ Footer.test.jsx
  + displays footer text as expected

+ Todo.test.jsx
  + render a header element as expected

#### UML

Link to an image of the UML for your application and response to events
