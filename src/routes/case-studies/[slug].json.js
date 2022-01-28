import cms from '../../lib/utils/contentful';

export async function get({ params }) {
	let response = {
		status: 200,
		body: {
			data: null,
			error: null
		}
	};
	try {
		const res = await cms.getEntries({
			content_type: 'caseStudies',
			'fields.slug': params.slug
		});
		if (res.items.length > 0) {
			response.body.data = res.items[0].fields;
		}
		if (res.items.length === 0) {
			response.body.error = JSON.stringify({
				status: 404,
				message: `Not found: /${params.slug}`
			});
		}
	} catch (error) {
		response.body.error = error.message;
		return response;
	}

	return response;
}
