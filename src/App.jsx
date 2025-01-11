import { useState } from "react";
import "./App.css";
import AppName from "./Components/AppName";
import InputRow from "./Components/InputRow";
import ItemMap from "./Components/ItemMap";
import ErrorMessage from "./ErrorMessage";

function App() {
  //useState hook

  let [listItem, setlistIteme] = useState([]);

  const changeHandleInput = (todoName, todoDate) => {
    console.log(`New item added: ${todoName} ${todoDate}`);

    const newItem = [...listItem, { name: todoName, dueDate: todoDate }];
    setlistIteme(newItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = listItem.filter((item) => item.name !== todoItemName);
    setlistIteme(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <InputRow changeHandleInput={changeHandleInput}></InputRow>
      <ErrorMessage todoitems={listItem}></ErrorMessage>
      <ItemMap todoitems={listItem} onDeleteClick={handleDeleteItem}></ItemMap>
    </center>
  );
}

export default App;
