import axios from 'axios';

const api = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	withCredentials: true,
});

export const getAllGiftcon = async (sortType) => {
	//sortType: latest (최신등록순), expiringSoon(유효기간임박순), highPrice(높은 가격순), lowPrice(낮은가격순)
	try {
		const response = await api.get(`/giftcon/all/${sortType}`);
		return response.data;
	} catch (error) {
		console.error('Error during giftconAll', error);
		throw error;
	}
};

export const postGiftcon = async (
	gifticonImg: string,
	category: string,
	store: string,
	product: string,
	barcodeNum: string,
	orderNum: string,
	expireDate: string,
	price: number,
	used: boolean,
) => {
	try {
		const response = await api.post(
			`/giftcon`,
			{
				gifticonImg,
				category,
				store,
				product,
				barcodeNum,
				orderNum,
				expireDate,
				price,
				used,
			},
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access')}`,
					'Content-Type': 'application/json',
				},
			},
		);
		return response.data;
	} catch (error) {
		console.error('Error during POST giftcon', error);
		throw error;
	}
};
