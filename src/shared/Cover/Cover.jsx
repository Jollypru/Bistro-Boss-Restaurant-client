import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="menu"
            strength={-200}
        >
            <div className="hero h-[300px] md:h-[400px]">
                <div className="hero-content text-white text-center bg-black bg-opacity-50 p-10">
                    <div className="max-w-lg md:max-w-3xl ">
                        <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>

        </Parallax>

    );
};

export default Cover;