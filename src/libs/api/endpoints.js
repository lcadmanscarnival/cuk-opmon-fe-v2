// src/lib/api/endpoints.ts
export const API_ENDPOINTS = {
	// main: '/', // HOLD
	// api: '/api', // Health
	// auth: '/api/auth', // HOLD
	fleet: '/api/fleet', // USE
	// search: props => `/api/search?q=${props.query}&search_type=${props.search_type}&search_domain=${props.search_domain}`, // HIT FROM SEARCHBAR, AND FROM APPS
	search: props => `/api/search?q=${props.query}`, // HIT FROM SEARCHBAR, AND FROM APPS
	apps: props => `/api/ship/arvia/apps`, // TILE ON HOMEPAGE
	problems: props => `/api/ship/arvia/problems`, // PROBLEMS ON HOMEPAGE
	hosts: props => `/api/ship/arvia/hosts` // CATCH-UP NEXT WEEK
	// ship: ({ ship_id }) => `/api/ship/${ship_id}`, // TILE ON HOMEPAGE
	// 'dt-dashboards': '/api/ingest/dt-dashboards', // HOLD
	// 'sw-dashboards': '/api/ingest/sw-dashboards', // HOLD
	// 'static-data': '/api/ingest/static-data', //
}
