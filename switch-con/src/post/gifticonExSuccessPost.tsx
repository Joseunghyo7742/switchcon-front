import axios from 'axios';

export const gifticonExSuccessPost = async (exchangePostId: string, exchangeRequestId: string) => {
	try {
		const result = await axios
			.post(
				`http://3.36.253.248:8080/exchange/${exchangePostId}/request/${exchangeRequestId}/success`,
				{
					exchangePostId,
					exchangeRequestId,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access')}`,
						'Content-Type': 'application/json',
					},
				},
			)
			.then((result) => {
				console.log('요청성공');
				console.log(result);
				return result.data;
			})
			.catch((error) => {
				console.log('요청실패');
				console.log(error);
			});

		return result.data;
	} catch (error) {
		console.error('Error during POST request:', error);
		throw error;
	}
};
