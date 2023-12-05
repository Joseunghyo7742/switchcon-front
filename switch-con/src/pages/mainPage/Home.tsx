import Footer from '@components/ui/Footer';
import GiftCard from '@components/ui/GiftCard';
import Header from '@components/ui/Header';
import { IoIosSearch, IoMdNotificationsOutline } from 'react-icons/io';
import { FaCirclePlus } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { getAllGifticon } from '@api/GiftconAPI';
import { Link } from 'react-router-dom';
const giftcons = [
	{
		exchangePost_id: 1,
		gifticon_img: '/images/image_url_1.jpg',
		category: '음료',
		store: '스타벅스',
		product: '아메리카노',
		expiration_date: '2024-01-01',
		barcode_num: '1234567890',
		price: 5000,
		is_used: false,
		is_active: true,
		created_at: '2023-11-22',
		modfied_at: '2023-11-22',
	},
];

const Home = () => {
	const [giftcons, setGiftcons] = useState([]);
	const fetchGiftcons = async (sortType: string) => {
		try {
			const giftcons = await getAllGifticon(sortType);
			setGiftcons(giftcons);
			console.log('giftcons', giftcons);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		//sortType: latest (최신등록순), expiringSoon(유효기간임박순), highPrice(높은 가격순), lowPrice(낮은가격순)
		fetchGiftcons('latest');
	}, []);

	return (
		<>
			<Header headline='스위치콘' navigaterOff>
				<IoIosSearch size={'20'} />
				<IoMdNotificationsOutline size={'20'} className='ml-3 mr-4' />
			</Header>
			<main className='h-full px-6 pt-16 pb-24 overflow-y-auto'>
				<div className='flex items-end justify-between mb-4'>
					<p className='font-semibold'>내 기프티콘</p>
					<p className='text-xs'>최신등록순</p>
				</div>
				<div className='flex flex-col gap-2'>
					{giftcons.map((gifticon) => {
						return (
							<Link key={gifticon.giftconId} to={`/home/giftcon/${gifticon.gifticonId}`}>
								<GiftCard gifticon={gifticon} />
							</Link>
						);
					})}
				</div>
			</main>
			<Footer selectedMenu='home' />
			<Link to='/home/giftcon-regi'>
				<button className='w-[375px] fixed bottom-20 translate-x-72'>
					<FaCirclePlus size={'40'} className='text-brand-primary-normal hover:text-brand-primary-light' />
				</button>
			</Link>
		</>
	);
};

export default Home;
