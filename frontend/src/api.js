import axios from "axios";

export const domain_name = "https://backend.micheleawada.com";

axios.defaults.baseURL = domain_name;

export async function contact(data) {
	try {
		const response = await axios.post(`/api/contact/`, data);
		return { succeeded: true, data: response.data };
	} catch (error) {
		console.error(error);
		let errorValue;
		if (error.hasOwnProperty("response")) {
			errorValue = error.response.data;
		} else if (error.hasOwnProperty("message")) {
			errorValue = error.message;
		} else errorValue = "error";

		return { succeeded: false, errors: errorValue };
	}
}
