import cms from '../lib/utils/contentful';

export async function get() {
	let response = {
		status: 200,
		body: {
			data: null,
			error: null
		}
	};
	try {
		const res = await cms.getEntry('3IRmFieO1f3uyiYNP97B3F');
		response.body.data = res.fields;
	} catch (error) {
		response.body.error = error.message;
		return response;
	}

	return response;
}
