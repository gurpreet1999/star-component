import logo from './logo.svg';
import './App.css';
import StarRating from './StarComponent';
import { useState } from 'react';


//compound component is an advanced react design pattern which help us to comunicatye between ui component and 
//share state between component 
// the parent component has some state 
//using react context api we share state between child component
//


function App() {

  const [rating, setRating] = useState(3);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };


  return (

    <StarRating
    totalStars={5} // Customize the number of stars
    size={30} // Customize the size of stars
    initialRating={rating} // Pass an initial rating value if needed
    onRatingChange={handleRatingChange} // Callback to handle rating changes
  />
  )
}

export default App;
