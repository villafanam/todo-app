# LAB - Class 33

## Project: `<Login />` and `<Auth />`

### Author: Marco Villafana

### Problem Domain  

+ Implement a Login/Auth React Context, “protect” the To Do application by restricting access to the various application features based on the users’ login status and capabilities.
  + Define a function that can simulate a login event.
    + Parameters: username and password as strings.
    + Sets a User on the auth context, and changes login status to true.
  + Define a function that can simulate a logout event.
    + Resets the User object and changes login status to `false.
  + Define a function that can authorize a User based on a capability.
    + Parameters: a capability as a string.
    + Returns a boolean whether the user has the capability parameter.
+ Create an <Auth /> component with the following features:
  + Given a capability prop of type string, conditionally render components based on the user stored in context.
  + Hide the entire interface until the user has logged in.
  + Implements the following RBAC rules:
    + Logged In Users with ‘update’ permissions can click the records to mark them as complete.
    + Logged In Users with ‘create’ permissions can create new items.
    + Logged In Users with ‘delete’ permissions can delete items.
    + Logged In Users with ‘read’ permissions can see the list of To Do Items.
+ Implement a <Login /> Component
  + Provide an account login screen with a form.
    + Accepts Username and Password.
    + On successful login, store the token as a cookie.
  + If a user returns and has a valid login cookie, hide the login form and consider them “Logged In”.
    + Display a logout button instead of a form if they are “Logged In”.

### Links and Resources

+ [GitHub Actions ci/cd](https://github.com/villafanam/todo-app/actions)
+ [GitHub PR](https://github.com/villafanam/todo-app/pull/5)
+ Code Sandbox
  + [Lab 31](https://codesandbox.io/p/github/villafanam/todo-app/context-settings?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfrulrzo000wg3i566apdi3i%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfsjuwvi009u356ivdnpesk5%2522%253A%257B%2522key%2522%253A%2522clfsjuwvi009u356ivdnpesk5%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfsjuwvi009v356i4dt10kaj%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfsjuwvi009w356ito36bsi0%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfsjuwvi009u356ivdnpesk5%2522%252C%2522spacesOrder%2522%253A%255B%2522clfsjuwvi009u356ivdnpesk5%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
  + [Lab 32](https://codesandbox.io/p/github/villafanam/todo-app/context-methods?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfrulrzo000wg3i566apdi3i%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clft56vtr006s356idynoemyc%2522%253A%257B%2522key%2522%253A%2522clft56vtr006s356idynoemyc%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clft570zi00d9356iqpmuhqmw%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522key%2522%253A%2522clft56vtr006t356iu95kc3x2%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clft570vi00bn356ijf6rauow%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clft56vtr006s356idynoemyc%2522%252C%2522spacesOrder%2522%253A%255B%2522clft56vtr006s356idynoemyc%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
  + [Lab 33]()

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
