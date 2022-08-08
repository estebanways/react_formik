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
          type="text"
          required="required"
          placeholder="Enter a todo..."
          name="description"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        {/*<button type="submit">SAVE</button>*/}
        <TiCancelOutline type="button" onClick={handleCancelClick} />
      </td>
    </tr>
  );
};

export default EditableRow;
