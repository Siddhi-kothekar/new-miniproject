import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Cards from './Cards';
import list from '../list.json';

function Course() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Let's Grow Together</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Begin your journey with us. Complete daily tasks, solve quizzes, and discover yourself. 
          Start memorizing, track your progress, and play games to enhance your skills.
        </p>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="course-swiper"
        >
          {list.map((item) => (
            <SwiperSlide key={item.id}>
              <Cards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Course;
