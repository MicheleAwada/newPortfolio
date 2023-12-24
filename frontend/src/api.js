import axios from "axios";

const domain_name = "http://127.0.0.1:8000";

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
