import React from 'react';


export default function Section({ children }){
  return (  
    <div className=' snap-always snap-center w-cust-wd-75 h-cust-ht-75 flex-shrink-0 relative border border-gray-200 rounded-3xl mx-auto my-20 p-5 md:p-10'>
      <div className=' top-2 right-2 -z-10 absolute border-b border-l w-full h-full border-gray-200 rounded-3xl'/>
      <div className='relative  w-full h-full'>{children}</div>
    </div>
  );
};
