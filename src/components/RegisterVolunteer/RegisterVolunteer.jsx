import React from "react";
import Swal from "sweetalert2";

const RegisterVolunteer = () => {
  const handleVolunteerReg = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const desc = form.desc.value;
    const org = form.org.value;

    const volunteerData = {
      name,
      email,
      date,
      desc,
      org,
    };
    console.log(volunteerData);

    fetch("https://volunteer-network-server-sage.vercel.app/volunteers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(volunteerData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Volunteer Registered Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="">
      <div className="max-w-xl mx-auto px-14 pt-9 pb-16 border border-[#ABABAB] rounded bg-white my-20">
        <h2 className="font-bold text-2xl mb-12 ml-2">
          Register as a Volunteer
        </h2>
        <form onSubmit={handleVolunteerReg}>
          <div className="form-control mb-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered border-0 border-b rounded-none px-2 py-3 border-b-[#C5C5C5]"
              required
            />
          </div>
          <div className="form-control mb-5">
            <input
              type="text"
              name="email"
              placeholder="Username or Email"
              className="input input-bordered border-0 border-b rounded-none px-2 py-3 border-b-[#C5C5C5]"
              required
            />
          </div>
          <div className="form-control mb-5">
            <input
              type="date"
              name="date"
              className="input input-bordered border-0 border-b rounded-none px-2 py-3 border-b-[#C5C5C5]"
              required
            />
          </div>
          <div className="form-control mb-5">
            <input
              type="text"
              name="desc"
              placeholder="Description"
              className="input input-bordered border-0 border-b rounded-none px-2 py-3 border-b-[#C5C5C5]"
              required
            />
          </div>
          <div className="form-control mb-5">
            <input
              type="text"
              name="org"
              placeholder="Organize books at the library."
              className="input input-bordered border-0 border-b rounded-none px-2 py-3 border-b-[#C5C5C5]"
              required
            />
          </div>
          <div className="form-control mt-9">
            <input
              type="submit"
              className="btn bg-[#3F90FC] border-0"
              value="Registration"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterVolunteer;
