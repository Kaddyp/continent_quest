import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Country: React.FC = () => {
 
  return (
    <>
    <h1 className={`text-lg px-4 py-6 font-700`}>Country Finder</h1>

    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-2 py-4 sm:px-6 sm:py-2 lg:max-w-7xl lg:grid-cols-2 lg:px-4">          
        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 justify-start">
          <div className="flex w-1/2 items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              id="country"
              name="country"
              type="search"
              placeholder="Search here"       
              
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 justify-end">         
          <div className="sm:col-span-3">
            <div className="grid grid-cols-1">
              <select
                id="selectedContinent"
                name="selectedContinent"
               
                autoComplete="continent-name"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="">Filter by continent</option>                  
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="mx-auto grid items-center px-4 py-12">                    
        <div className="grid grid-cols-4 gap-4">
          
        </div>
      </div>
    </div>
  </>
  );
};

export default Country;