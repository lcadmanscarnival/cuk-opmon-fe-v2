// src/lib/api/endpoints.ts
export const API_ENDPOINTS = {
	// main: '/', // HOLD
	// api: '/api', // Health
	// auth: '/api/auth', // HOLD
	fleet: '/api/fleet', // USE
	search: (query, search_type, search_domain) => `/api/search?q=${query}&search_type=${search_type}&search_domain=${search_domain}`, // HIT FROM SEARCHBAR, AND FROM APPS
	apps: ship_name => `/api/ship/arvia/apps`, // TILE ON HOMEPAGE
	problems: ship_name => `/api/ship/${ship_name}/problems`, // PROBLEMS ON HOMEPAGE
	ship: ship_id => `/api/ship/${ship_id}`, // TILE ON HOMEPAGE
	hosts: ship_name => `/api/ship/${ship_name}/hosts` // CATCH-UP NEXT WEEK
	// 'dt-dashboards': '/api/ingest/dt-dashboards', // HOLD
	// 'sw-dashboards': '/api/ingest/sw-dashboards', // HOLD
	// 'static-data': '/api/ingest/static-data', //
}
