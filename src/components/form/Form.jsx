import React from "react";

const Form = ({ info, setInfo, hanleSubmit, isAdd }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log(info);
  };

  return (
    <div className="">
      <div className="p-6 max-w-md">
        <div className="text-2xl font-normal hover:font-bold tracking-tight hover:tracking-wide mb-3">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            style={{ width: 185, margin: "0 auto" }}
            alt="logo"
          />
          <h1>ADD CONTACT</h1>
        </div>
        <form onSubmit={hanleSubmit}>
          <div className="form-group mb-6 relative flex items-center text-gray-400 focus-within:text-gray-600">
            <i className="fa-solid fa-user absolute ml-3"></i>
            <input
              onChange={handleChange}
              type="text"
              className="form-control block  w-full
  py-2
  pl-9
  pr-6
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
              name="userName"
              value={info.userName}
            />
          </div>
          <div className="form-group mb-6 relative flex items-center text-gray-400 focus-within:text-gray-600">
            <i className="fa-solid fa-phone absolute ml-3"></i>
            <input
              onChange={handleChange}
              type="phone"
              className="form-control block
  w-full
  py-2
  pl-9
  pr-6
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
              placeholder="Phone Number"
              name="phoneNumber"
              value={info.phoneNumber}
            />
          </div>
          <div className="mb-3 xl:w-96">
            <select
              onChange={handleChange}
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
              name="gender"
              value={info.gender}
            >
              <option selected="Gender">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="
w-full
px-6
py-2.5
bg-red-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-red-700 hover:shadow-lg
focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-red-800 active:shadow-lg
transition
duration-150
ease-in-out"
          >
            {isAdd}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
