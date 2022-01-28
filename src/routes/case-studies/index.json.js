import cms from '../../lib/utils/contentful';

export async function get() {
	let data = {
		page: null,
		caseStudies: null
	};

	let response = {
		status: 200,
		body: {
			data: data,
			error: null
		}
	};

	try {
		const res = await cms.getEntry('4Q7NvXzmW97HX9qRAyWcdE');
		data.page = res.fields;
	} catch (error) {
		response.body.error = error.message;
		return response;
	}

	try {
		const res = await cms.getEntries({
			content_type: 'caseStudies',
			order: 'fields.order'
		});
		data.caseStudies = res.items;
	} catch (error) {
		response.body.error = error.message;
		return response;
	}

	return response;
}
