import axios from "axios";

export const domain_name = "https://backend.micheleawada.com";

axios.defaults.baseURL = domain_name;

export async function contact(data) {
	try {
		const response = await axios.post(`/api/contact/`, data);
		return { succeeded: true, data: response.data };
	} catch (error) {
		console.error(error);
		return { succeeded: false, errors: response.response.data };
	}
}
