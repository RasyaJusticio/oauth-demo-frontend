import axios from 'axios';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

const axiosClient = axios.create({
	baseURL: `${PUBLIC_BACKEND_URL}/api/`,
	headers: {
		'Accept': 'application/json'
	}
});

export default axiosClient;
