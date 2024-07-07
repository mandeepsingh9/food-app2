import React from 'react'
import Dash from './Dash';
import ServiceCard from './ServiceCard';

const servicesData = [
{
   img:"/logo.png",
   title:"Professional kitchen",
   desc:"A professional kitchen: where passion meets precision and every dish.",
 },
 {
    img:"/services1.png",
    title:"Delivery",
    desc:"Deliciousness delivered: Your favorite flavors, just a click away.",
 },
 {
     img:"/services2.png",
     title:"Wine List",
     desc:"Savor every moment: Exquisite cuisine and fine wine, Sip and savor",
 },
 {
     img:"/services3.png",
     title:"Free Wifi",
     desc:"Feast, connect, and unwind: Gourmet dining with free WiFi at your fingertips.",
},
                        
];

const Services = () => {
  return  (
   <div className="container pt-40">
    <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
            Choose Best <span className="text-accent">Services</span>
        </h2>
        <p className="text-gray-700"></p>
        Indulge in perfection: Handpicked flavors tailored just for you.
        <br/>
        Taste the difference: Where every bite tells a story.
        <p/>
        <div className="w-fit mx-auto">
        <Dash/>
    </div>
  </div>
  

  <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8  ">
    {servicesData.map((item,index)=><ServiceCard  key={index} img={item.img} title={item.
    title} desc={item.desc}/>)}
  </div>
  </div>
  );
};

export default Services;