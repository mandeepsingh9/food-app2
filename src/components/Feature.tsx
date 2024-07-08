import React from 'react';
import Dash from './Dash';
import Image from 'next/image';
// import {frying} from '../imports/material';

const Feature = () => {
  return (
    <div className="container " id='food'>
       <div className="material-container border-600">
        <div className="material-inner-left-container">  <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        Indulge in taste, relish the experience. Good food, good mood, guaranteed.
        For the love of food and the joy of eating. From our kitchen to your heart.
      </p>
      <Dash/></div>
        {/* <div className="material-inner-right-container">
            <video src={frying} loop controls={false} />
        </div> */}
       </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
        {[
          { src: '/2.png', title: 'Shrimp Salad', description: 'Garden-fresh goodness in every bite.Color your plate with nature’s best. Elevate your meal with the freshness of our veg salads – Pure health on a plate.' },
          { src: '/3.png', title: 'Butter Chicken', description: 'Experience the classic – Butter chicken that\'s pure comfort in a bowl. Let the rich, velvety sauce of our butter chicken take you on a flavor journey.' },
          { src: '/1.png', title: 'Noodles', description: 'Long on flavor, short on time – Noodles that hit the spot. From wok to fork – Noodles bursting with flavor,A taste of tradition, a burst of flavor Dive into it.' },
          { src: '/4.png', title: 'Biryani', description: 'From fragrant spices to tender chicken, our biryani is a symphony of flavors. Taste tradition in every aromatic bite.' },
          { src: '/5.png', title: 'Dal Tadka', description: 'Simmered to perfection with a medley of spices, our dal tadka is a heartwarming journey through authentic flavors.' },
          { src: '/6.png', title: 'Samosa', description: 'Golden parcels of savory delight – Crispy on the outside, flavorful on the inside, our samosas are a taste of pure happiness.' },
          { src: '/7.png', title: 'Chicken Burger', description: 'Juicy, flavorful, and grilled to perfection – Bite into our chicken burger and taste happiness in every bite!' },
          { src: '/8.png', title: 'Chicken Nuggets', description: 'Crunchy on the outside, tender on the inside Our chicken nuggets are little bites of pure satisfaction' },
          { src: '/9.png', title: 'Cake', description: 'From the first bite to the last crumb, our cakes redefine delight. Moist layers, heavenly flavors, and exquisite craftsmanship.' },
          { src: '/10.png', title: 'Smoothie', description: 'Sun-kissed refreshment in every sip – Our orange juice bursts with pure citrus goodness, straight from nature to your glass.' },
          { src: '/11.png', title: 'Cold Drink', description: 'Quench your thirst with icy perfection – Our cold drinks deliver cool refreshment in every sip, leaving you refreshed and revived.' },
          { src: '/12.png', title: 'Mojito', description: 'Experience the zest of summer in every sip – Our mojitos blend fresh mint, lime and a splash of joy for a refreshing twist on classic relaxation.' }
        ].map((item, index) => (
          <div key={index} className="w-full mx-auto items-center text-center flex flex-wrap">
            <div className="relative w-full h-64 max-w-[400px] mx-auto">
              <Image className="object-cover h-full w-full shadow-2xl" src={item.src} alt={item.title} layout="fill" />
            </div>
            <div className="space-y-4 pt-4">
              <Dash/>
              <h2 className="font-medium text-xl">{item.title}</h2>
              <p className="text-gray-700 text-[14px] xl:text-[16px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;