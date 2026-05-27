import { getErrorMessage, validateFormField } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("email");
	const message = formData.get("message");

	if (!validateFormField(senderEmail, 500) || !validateFormField(message, 5000)) {
		return {
			error: "Invalid Parameters",
		};
	}
	formData.append("access_key", "76074ef9-e9ef-43a4-a03a-817078df256c");
	try {
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData
		});
		if (!response.ok) {
			const text = await response.text();

			return {
				error: text,
			};
		}
		const result = await response.json();
		return {
			data: result,
		}

	} catch (error) {
		return {
			error: getErrorMessage(error),
		};
	}
};
