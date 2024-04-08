import React, { useState } from "react";

const ThayMK = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className='w-full h-full flex items-center justify-center bg-gray-200'>
    <form onSubmit={handleSubmit} className="w-[400px] p-5 h-auto rounded-md shadow-md  flex flex-col space-y-4   bg-white">
          <p className="font-bold text-2xl">Change Password</p>
          <div>
            <label
              htmlFor="currentPassword"
              className="block font-light text-gray-700"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 h-[40px] block w-full border border-gray-700 rounded-md   sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block font-light text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 h-[40px] block w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block font-light text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 h-[40px] block w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-950 rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:bg-blue-950"
            >
              Change Password
            </button>
          </div>
        </form>
    </div>
  );
};

export default ThayMK;
