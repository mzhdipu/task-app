import Link from "next/link";
import React from "react";

const homePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <Link href="/task/addtask" className="bg-slate-800 text-white p-3 rounded-sm ml-[-3px] w-22"><button>Get Started</button></Link>
      </div>
    </div>
  );
};

export default homePage;
