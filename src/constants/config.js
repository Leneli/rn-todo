export const URL_DB = (id = '', dbName = 'todoItems') =>
  `https://react-native-todo-app-755b0.firebaseio.com/${dbName}${id && ('/' + id)}.json`;