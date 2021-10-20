
import React from 'react';
import { useHistory } from "react-router-dom";

const Appointament = () => {
    // on button submit go to success path
    const history = useHistory();
    const handleBtn = () => {
        history.push('/success')
    }
    return (
        <div className='mb-5'>
            <h2 className="text-4xl font-bold text-center my-4">
                Confirm Your Appointment
            </h2>
            <div className='flex justify-center '>
                <form className='border-2 border-black p-10 rounded-md'>
                    <div>
                        <label className="text-xl font-bold mb-1">Patient Name</label>
                        <div >
                            <input type="text" id="patient-name" className="border-2 border-blue-500 px-8 py-1 rounded-xl w-full"
                                placeholder="Name" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="text-xl font-bold mb-1"> Contact  </label>
                        <div>
                            <input type="tel" id="contact" className="border-2 border-blue-500 px-8 py-1 rounded-xl w-full"
                                placeholder="+880-" required />
                        </div>
                    </div>
                    <div>
                        <label className="text-xl font-bold mb-1"> Date</label>
                        <div>
                            <input type="date" id="date" className="border-2 border-blue-500 px-8 py-1 rounded-xl w-full" />
                        </div>
                    </div>
                    <div >
                        <label className="text-xl font-bold mb-1">
                            Time
                        </label>
                        <div >
                            <input type="time" id="time" className="border-2 border-blue-500 px-10 py-1 rounded-xl w-full" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xl font-bold mb-1">
                            Symptoms
                        </label>
                        <div>
                            <textarea id="symptoms" className="border-2 border-blue-500 rounded-xl px-20 py-10" required></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleBtn} className='py-2 px-3 rounded-lg bg-blue-500 mt-5 hover:bg-blue-900 hover:text-white'>Confirm</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Appointament;