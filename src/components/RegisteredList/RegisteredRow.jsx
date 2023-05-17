import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisteredRow = ({ volunteer }) => {
  const { _id, name, email, date, org } = volunteer || {};
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td>{org}</td>
        <td>
          <Link to="/updateVolunteer">
            <FaEdit />
          </Link>
        </td>
        <td>
          <button>
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default RegisteredRow;
