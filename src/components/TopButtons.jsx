import React from 'react'

function TopButtons() {
   
   const cities = [
   {
        id: 1,
        title: 'Vilnius'
    },
    {
        id: 2,
        title: 'Sydney'
    },
    {
        id: 3,
        title: 'New York'
    },
    {
        id: 4,
        title: 'Los Angeles'
    },
    {
        id: 5,
        title: 'Tokyo'
    },

   ]
  return <div className="flex items-center justify-around my-6">
{/* .map  method creates a new array populated with the results of calling a provided function on every element in the calling array.
Arrow function =>  llows you to create functions in a cleaner way compared to regular functions. 
.id unique id is needed for React to know which element is changed while looping through array, so it could update the specific element */}
     {cities.map((city) => (
         <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
     ))}
  </div>
}

export default TopButtons