import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AssignmentSubmissionForm = ({ onClose }) => {
    const [pdfDocLink, setPdfDocLink] = useState("");
    const [note, setNote] = useState("");
    const { register, handleSubmit, formState: { errors }, } = useForm();


    const onSubmit = (data) => {
        const { name, photoUrl, email, password } = data;
        onClose();
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded w-96 md:w-3/4 lg:w-1/2 xl:w-2/3 transform scale-110 md:scale-125">
                    <h2 className="text-2xl font-semibold mb-6">Submit Assignment</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold dark:text-white">PDF/doc link</span>
                            </label>
                            <input name="link" type="text" className="bg-transparent input rounded border border-gray-300 focus:outline-none focus:border focus:border-primary" {...register("link", { required: true })} />
                            {errors.link && <span className=" text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold dark:text-white">Note</span>
                            </label>
                            <input name="note" type="text" className=" h-20 bg-transparent input rounded border border-gray-300 focus:outline-none focus:border focus:border-primary" {...register("note", { required: true })} />
                            {errors.note && <span className=" text-red-500">This field is required</span>}
                        </div>
                        <div className="flex justify-end mt-4">
                            <button type="submit" className="bg-primary text-white px-6 py-3 rounded mr-4">Submit</button>
                            <button type="button" onClick={onClose} className="bg-gray-300 text-gray-800 px-6 py-3 rounded">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssignmentSubmissionForm;
