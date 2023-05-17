import React from "react";
import { useLoaderData } from "react-router-dom";
import RegisteredRow from "./RegisteredRow";

const RegisteredList = () => {
  const volunteers = useLoaderData();
  console.log(volunteers);

  return (
    <div>
      <h2 className="text-[#0C0C0C] font-medium text-[22px] my-6 ml-[37px]">
        Volunteer register list
      </h2>
      <div className="box-border border-[20px] border-[#F4F7FC] p-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Registration date</th>
                <th>Volunteer list</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {volunteers.map((volunteer) => (
                <RegisteredRow
                  key={volunteer._id}
                  volunteer={volunteer}
                ></RegisteredRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredList;
