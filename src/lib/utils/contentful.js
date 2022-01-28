import { createClient } from 'contentful';

const cms = createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: import.meta.env.VITE_CONTENTFUL_SPACE,
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN
});

export default cms;
