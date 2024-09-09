export const APP_CONFIG = {
  production: false,
  environment: 'LOCAL',
  weatherApiBaseUrl: 'https://open-weather13.p.rapidapi.com/city/Denver/EN',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'open-weather13.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '9c8b6999cmshd3247f3dd2fa690p1a9dc3jsne97a55654eeb'
};


// const url = 'https://open-weather13.p.rapidapi.com/city/Denver/EN';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '29c8b6999cmshd3247f3dd2fa690p1a9dc3jsne97a55654eeb',
// 		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }