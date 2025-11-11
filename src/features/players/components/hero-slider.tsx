'use client';

import { Player } from '@/lib/types/player';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

interface HeroSliderProps {
	players: Player[];
}

export const HeroSlider = ({ players }: HeroSliderProps) => {
	return (
		<div className='relative overflow-hidden'>
			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				pagination={{
					clickable: true,
					bulletClass: 'swiper-pagination-bullet',
					bulletActiveClass: 'swiper-pagination-bullet-active',
				}}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				loop
				className='hero-swiper'
			>
				{players.map((player, index) => (
					<SwiperSlide key={player.id}>
						<div className='relative aspect-[9/13] w-full'>
							<div className='absolute inset-0'>
								<Image
									src={player.image}
									alt={player.name}
									fill
									className='object-cover'
									priority={index === 0}
									sizes='(max-width: 768px) 100vw, 390px'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
							</div>

							<div className='absolute inset-x-0 bottom-0 p-6 pb-10'>
								<div className='flex items-center gap-6'>
									<div className='flex-shrink-0'>
										<span className='block text-[50px] font-bold leading-none text-white/90 drop-shadow-2xl'>
											{index + 1}
										</span>
									</div>

									<div className='flex-1 space-y-1'>
										<h2 className='text-[25px] leading-tight text-white drop-shadow-lg'>
											{player.name}
										</h2>

										<div className='flex items-center gap-3'>
											<div className='inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 shadow-lg'>
												<span className='text-xs font-medium text-gray-600'>
													Points
												</span>
												<span className='text-[18px] font-bold text-pink-500'>
													{player.points.toLocaleString()}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
