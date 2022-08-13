import React from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ReadOnlyRow = ({ todo, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{todo.description}</td>
      <td>
        <button className="controls">
          <TiEdit
            type="button"
            onClick={(event) => handleEditClick(event, todo)}
          />
        </button>
        <button className="controls">
          <RiCloseCircleLine
            type="button"
            onClick={() => handleDeleteClick(todo.id)}
          />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
