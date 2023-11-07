"use server";

import React from "react";
import ContactFormEmail from "@/emails/contact-form-email";
import { getErrorMessage, validateFormField } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log("Running on the server");

    const senderEmail = formData.get("email");
    const message = formData.get("message");

    if (!validateFormField(senderEmail, 500) || !validateFormField(message, 5000)) {
        return {
            error: "Invalid Parameters",
        };
    }

    try {
        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.com>",
            to: "adebayooluwasegun011@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            // react: <ContactFormEmail {...{ message, senderEmail }} />,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
        return {
            data,
        };
    } catch (error) {
        // console.error(error);
        return {
            error: getErrorMessage(error),
        };
    }
};
