import React from "react";

const AddEvent = () => {
  return (
    <div>
      <h2 className="text-[#0C0C0C] font-medium text-[22px] my-6 ml-[37px]">
        Add event
      </h2>
      <div className="box-border border-[20px] border-[#F4F7FC] p-5">
        <form className="">
          <div className="flex gap-6 mb-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-[#232323] font-medium">Event Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-[#232323] font-medium">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-[#232323] font-medium">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-28 resize-none"
                placeholder="Enter Description"
              ></textarea>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-[#232323] font-medium">Banner</span>
              </label>
              <input
                type="text"
                name="banner"
                placeholder="Provide banner url"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="text-right">
            <input
              type="submit"
              className="btn border-0 bg-[#3F90FC] text-white"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
