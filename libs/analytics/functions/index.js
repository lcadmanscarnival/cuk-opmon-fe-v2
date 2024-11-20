export const track = (event, component, properties) => {
	console.log('🚀 - Track | ', `event: ${event} | component: ${component} | `, `properties:`, properties)

	// READ FROM JSON AND DECIDE WHAT DESTINATIONS TO SEND TO
	const destinations = []

	// SEND TO ALL DESTINATIONS
	destinations.forEach(destination => {
		destination.track(event, properties)
	})

	return true
}
