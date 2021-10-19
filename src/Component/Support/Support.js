import React from "react";
import { NavLink } from "react-router-dom";
import ambulance from "../../Images/Support/ambulance.png";
import bed from "../../Images/Support/gurney.png";

const Support = () => {
    return (
        <div className="text-gray-600 body-font pt-20">
            <div className='text-center'>
                <span className='text-2xl font-bold border-b-2 border-blue-500'>Our Supports</span>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="w-full sm:w-1/2 mb-10 px-10  hover:shadow-xl rounded-lg py-10  transition duration-500 ease-in-out ">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img
                                alt="content"
                                className="object-cover object-center  h-60 w-60 mx-auto"
                                src={ambulance}
                            />
                        </div>
                        <h2 className="title-font text-3xl font-medium text-gray-900 mt-6 mb-3">
                            24/7 Of Ambulance Service!
                        </h2>
                        <p className="leading-relaxed text-base mb-10">
                            Williamsburg occupy sustainable snackwave gochujang. Pinterest
                            cornhole brunch, slow-carb neutra irony.
                        </p>
                        <NavLink to="/success" className="mt-10 rounded-md transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white   hover:border-2 hover:border-borderPrimary text-textPrimary font-medium bg-white border-2 border-borderPrimary py-2 px-5 w-48 ml-5">
                            Call to ambulance
                        </NavLink>
                    </div>
                    <div className="w-full sm:w-1/2 mb-10 px-10 hover:shadow-xl rounded-lg py-10  transition duration-500 ease-in-out ">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img
                                alt="content"
                                className="object-cover object-center h-60 w-60 mx-auto"
                                src={bed}
                            />
                        </div>
                        <h2 className="title-font text-3xl font-medium text-gray-900 mt-6 mb-3">
                            Your Comfort Is Our Responsibility!
                        </h2>
                        <p className="leading-relaxed text-base mb-10">
                            Williamsburg occupy sustainable snackwave gochujang. Pinterest
                            cornhole brunch, slow-carb neutra irony.
                        </p>
                        <NavLink to="/success" className="mt-10 rounded-md transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white   hover:border-2 hover:border-borderPrimary text-textPrimary font-medium bg-white border-2 border-borderPrimary py-2 px-5 w-48 ml-5">
                            Booking a Sit
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;