import type { NextPage } from "next";
import {useState} from "react";

const Edit: NextPage = () => {

    return (
        <div className="py-10 px-4">
            <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-full bg-slate-400"></div>
                <label htmlFor="picture" className="cursor-pointer py-2 px-3 border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700">
                    Change Photo
                    <input id="picture" type="file" className="hidden "/>
                </label>
            </div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mt-3 mb-2">
                Email address
            </label>
            <div className="mt-1">
                <input id="email" type="email" className="appearance-none w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder:gray-400 focus:ring-orange-500 focus:border-orange-500 focus:outline-none " required />
            </div>

            <label htmlFor="phone" className="text-sm font-medium text-gray-700 mt-3 mb-2">
                Phone number
            </label>
            <div className="mt-1">
                <div className="flex rounded-md shadow-sm">
                    <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-50 text-gray-500 select-none">+82</span>
                    <input id="phone" type="number" className="appearance-none w-full px-3 py-3 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder:gray-400 focus:ring-orange-500 focus:border-orange-500 focus:outline-none " required />
                </div>
            </div>
            <button className="w-full focus:ring-2 mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
                Update profile
            </button>
        </div>

    );
};

export default Edit;