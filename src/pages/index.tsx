// pages/form.js
import React from "react";

export default function FormPage() {
  return (
    <div className="min-h-screen bg-[#12372A] flex flex-col justify-start items-center ">
      <h2 className="text-5xl text-white font-bold mb-6">Card payment <br /> checkout form</h2>

      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center">
          <div className="w-[346px] h-[244px]  rounded-lg flex flex-col justify-center items-center">
            <img
              src=""
              alt="Placeholder"
              className="w-full h-[70%] object-cover"
            />
            <h2 className="text-3xl text-[#12372A] font-bold mt-2">Payment gatway</h2>
            <p className="text-md text-gray-500 mt-1">Enter School Location detail!</p>
          </div>
          {/* <div className="text-md text-gray-400 mt-28">@2024 All Rights reserve Made By Switzer.faiz!</div> */}
        </div>

        <div className="w-full md:w-1/2 p-6 relative">
          <h1 className="text-2xl font-bold mb-4">Compelte Registration payment</h1>

          <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">Address Line</label>
                <input
                  type="text"
                  placeholder="P.o.Box.1223"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">City</label>
                <input
                  type="text"
                  placeholder="Arusha"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">State</label>
                <input
                  type="text"
                  placeholder="Arusha.Tanzania"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">Postal Code</label>
                <input
                  type="number"
                  placeholder="9090"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            {/* Payment Method */}
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <div className="flex space-x-4 mb-4">
              <button
                type="button"
                className="p-2 border border-gray-300 rounded-md w-24"
              >
                Visa
              </button>
              <button
                type="button"
                className="p-2 border border-gray-300 rounded-md w-24"
              >
                Stripe
              </button>
              <button
                type="button"
                className="p-2 border border-gray-300 rounded-md w-24"
              >
                P
              </button>
              <button
                type="button"
                className="p-2 border border-gray-300 rounded-md w-24"
              >
                GPay
              </button>
              <button
                type="button"
                className="p-2 border border-gray-300 rounded-md w-24"
              >
                GPay
              </button>
            </div>

            {/* Card Details */}
            <h2 className="text-xl font-semibold mb-2">Card Details</h2>
            <div className="mb-4">
              <div>
                <label className="text-md text-gray-500 ">card number</label>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
              </div>
              <div>
                <label className="text-md text-gray-500 ">Expiry Date</label>
                <input
                  type="text"
                  placeholder="Expiry Date"
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                /></div>
              <div>
                <label className="text-md text-gray-500 ">cvc</label>
                <input
                  type="text"
                  placeholder="CVV"
                  className="p-2 border border-gray-300 rounded-md w-full"
                /></div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              className="p-2 bg-[#12372A] text-white rounded-md w-full"
            >
              Next
            </button>
          </form>
          <div className="text-[#12372A] mt-4 text-center">
            <span className="p-1 ">Instruction </span>
            <span className="p-1 ">License</span>
            <span className="p-1 ">Term of Use</span>
            <span className="p-1 ">Privacy</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
