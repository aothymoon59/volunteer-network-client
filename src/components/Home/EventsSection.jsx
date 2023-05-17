import React from "react";

const EventsSection = () => {
  return (
    <div className="flex justify-center mt-20 mb-12">
      <div className="text-center">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-6">
            I grow by helping people in need.
          </h2>
        </div>
        <div className="form-control max-w-[470px] mx-auto">
          <div className="input-group justify-center">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-full"
            />
            <button className="btn bg-[#3F90FC] border-0 font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="all-events"></div>
    </div>
  );
};

export default EventsSection;
