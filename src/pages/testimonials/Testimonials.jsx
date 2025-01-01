import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';
import { RiDoubleQuotesL } from "react-icons/ri";
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={'What Our Client Say'}
                heading={'Testimonials'}
            >
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center my-12 mx-24 space-y-3">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <div className="text-5xl">
                                <RiDoubleQuotesL></RiDoubleQuotesL>
                            </div>
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-yellow-600 uppercase text-center">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;