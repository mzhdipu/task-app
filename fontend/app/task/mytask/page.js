import React from 'react';
import { FaTrashAlt, FaEdit } from "react-icons/fa";


const MyTask = () => {
    return (
        <div class="p-8">
            <h1 className="text-3xl font-bold my-5 uppercase text-center">My Tasks</h1>

            <table class="w-1/2 border m-auto">
                <thead>
                <tr class="odd:bg-gray-100">
                    <th class="font-bold p-2 border-b text-left">No</th>
                    <th class="font-bold p-2 border-b text-left">Tasklist</th>
                    <th class="font-bold p-2 border-b text-left">Update</th>
                    <th class="font-bold py-2 px-4 border-b text-left">Delete</th>
                </tr>
                </thead>

                <tbody>
                {
                    [...Array(3)].map((mytask, i) => 
                    <tr key={i}>
                        <td class="p-2 border-b text-left">{i+1}</td>
                        <td class="p-2 border-b text-left">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td class="p-2 border-b text-left"><FaEdit/> </td>
                        <td class="py-2 px-4 border-b text-left"><FaTrashAlt/></td>
                    </tr>
                    )
                }
                </tbody>
                
            </table>
        </div>
    );
};

export default MyTask;