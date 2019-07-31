import axios from 'axios';

function createInstance(options) {
	return axios.create({
		baseURL: 'http://localhost:3000',
		...options,
	});
}

let auth = createInstance({
	timeout: 5000,
});

export { auth };
// let products = createInstance({
//     timeout: 5000,
//     header: {}
// })
