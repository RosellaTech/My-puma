import { useState } from "react";
import "./MyAccount.css";
import { Login } from "../../../Login";

const MyAccount = () => {
  return (
    <div>
      <div class="p-4 text-center bg-[#eee]">
        <h2 class="text-sm sm:text-lg lg:text-2xl font-semibold text-left text-black leading-tight">
          MY ACCOUNT!
        </h2>
      </div>

      <div class="py-4 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* form container */}
          <div class="relative max-w-md mx-auto mt-8 md:mt-16">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
