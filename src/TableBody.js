import React from "react";
import { toast } from "react-toastify";

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button
            onClick={() => {
              props.removeCharacter(index);
              toast.success(row.name + " deleted");
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default TableBody;
