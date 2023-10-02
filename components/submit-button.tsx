import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className="h-12 w-[8rem] bg-gray-900 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-30 dark:focus:bg-opacity-30 transition-all text-white rounded-full outline-none flex items-center justify-center gap-2 group hover:scale-110 duration-700 ease-in-out focus:scale-105 active:scale-105 disabled:scale-100 disabled:bg-opacity-60 dark:disabled:bg-opacity-60"
        >
            {pending ? (
                <ImSpinner11 className="h-6 w-6 animate-spin" />
            ) : (
                <>
                    Send
                    <FaPaperPlane className="opacity-70 transition duration-700 ease-in-out group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-2 group-focus:translate-y-0" />
                </>
            )}
        </button>
    );
}
