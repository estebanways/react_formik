import React from "react";
import { TiInputChecked } from 'react-icons/ti';
import { TiCancelOutline } from 'react-icons/ti';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
        className="input-edit"
          type="text"
          required="required"
          placeholder="Enter a todo..."
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button className="controls" type="submit"> <TiInputChecked /> </button>
        <button className="controls" type="button" onClick={handleCancelClick}> <TiCancelOutline /> </button>
      </td>
    </tr>
  );
};

export default EditableRow;
