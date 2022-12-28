import React from "react";

const AddTask = () => {
    
  return (
    <div>
      <div className="w-1/2 m-auto">
        <h1 className="text-3xl font-bold my-5 uppercase">Add Task</h1>

        <form>
          <input type="file" accept="image/png, image/jpeg" className="mb-3" />

          <input
            type="text"
            name="text"
            className="border-2 border-slate-80 p-[10px] rounded-sm w-80"
          />
          <input
            type="submit"
            value="ADD TASK"
            className="bg-slate-800 text-white p-3 rounded-sm ml-[-3px] w-22"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
