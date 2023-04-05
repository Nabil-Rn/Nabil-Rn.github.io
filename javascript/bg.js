// Define an array of background image URLs
const backgrounds = [
    'image/Spookybackground.jpg',
    'image/Spookybackground0.jpg',
    'image/Spookybackground1.jpg',
    'image/Spookybackground2.jpg'
  ];
  
  // Get a random background image URL from the array
  function getRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return `url('${backgrounds[randomIndex]}')`;
  }
  
  // Set the background image every 60 seconds
  setInterval(function() {
    document.body.style.backgroundImage = getRandomBackground();
  }, 6000);