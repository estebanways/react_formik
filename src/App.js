import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import { MdOutlineNoteAdd } from 'react-icons/md';

const App = () => {
  const [todos, setTodos] = useState(data);
  const [addFormData, setAddFormData] = useState({
    description: "",
  });

  const [editFormData, setEditFormData] = useState({
    description: "",
  });

  const [editTodoId, setEditTodoId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: nanoid(),
      description: addFormData.description,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedTodo = {
      id: editTodoId,
      description: editFormData.description,
    };

    const newTodos = [...todos];

    const index = todos.findIndex((todo) => todo.id === editTodoId);

    newTodos[index] = editedTodo;

    setTodos(newTodos);
    setEditTodoId(null);
  };

  const handleEditClick = (event, todo) => {
    event.preventDefault();
    setEditTodoId(todo.id);

    const formValues = {
      description: todo.description,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditTodoId(null);
  };

  const handleDeleteClick = (todoId) => {
    const newTodos = [...todos];

    const index = todos.findIndex((todo) => todo.id === todoId);

    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div className="app-container">

      <h2>Todo List</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Enter a todo..."
          onChange={handleAddFormChange}
        />
        <button type="submit"> <MdOutlineNoteAdd /> </button>
      </form>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Todo List</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <Fragment>
                {editTodoId === todo.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    todo={todo}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      
    </div>
  );
};

export default App;
