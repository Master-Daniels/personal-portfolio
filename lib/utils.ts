export const validateFormField = (field: unknown, maxLength: number) => {
    if (!field || typeof field !== "string" || field.length > maxLength) return false;
    return true;
};

export const getErrorMessage = (error: unknown) => {
    //  {
    //   name: 'validation_error',
    //   message:
    //     'The resend.com domain is not verified. Please, add and verify your domain on https://resend.com/domains',
    //   statusCode: 403
    // }
    let message: string = "";
    if (error) {
        if (error instanceof Error) {
            message = error.message;
        } else if (typeof error === "object" && "message" in error) {
            message = String(error.message);
        } else if (typeof error === "string") {
            message = error;
        }
    } else {
        message = "Something went wrong on the server";
    }
    return message;
};
