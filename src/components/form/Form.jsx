import React from "react";
import Table from "../table/Table";

const Form = () => {
  return (
    <div className="">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <div className="text-2xl font-normal hover:font-bold tracking-tight hover:tracking-wide mb-3">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            style={{ width: 185, margin: "0 auto" }}
            alt="logo"
          />
          <h1>ADD CONTACT</h1>
        </div>
        <form>
          <div className="form-group mb-6">
            <i class="fas fa-phone"></i>
            <input
              type="text"
              className="form-control block  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
              InputProps={{
                startAdornment: <i class="fas fa-phone"></i>,
              }}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            />
          </div>
          <div className="mb-3 xl:w-96">
            <select
              className="form-select appearance-none
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding bg-no-repeat
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected="">Open this select menu</option>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
              <option value={3}>Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="
w-full
px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
