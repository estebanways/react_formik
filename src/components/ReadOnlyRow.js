import React from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ReadOnlyRow = ({ todo, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{todo.description}</td>
      <td>
        <TiEdit
          type="button"
          onClick={(event) => handleEditClick(event, todo)}
        />

        <RiCloseCircleLine className="option-icons" type="button" onClick={() => handleDeleteClick(todo.id)}
        />
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
