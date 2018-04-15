let myStorage = localStorage;

export const TODO_LIST = (myStorage.getItem('todo-list-vuejs')) ? JSON.parse(myStorage.getItem('todo-list-vuejs')) : [];
