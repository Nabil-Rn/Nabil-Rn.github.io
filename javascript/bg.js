// Define an array of background image URLs
  const backgrounds = [
    'image/Spookybackground.jpg',
    'image/Spookybackground0.jpg',
    'image/Spookybackground1.jpg',
    'image/Spookybackground2.jpg'
  ];
  // music
  var bgmusic = document.getElementById("bgmusic");


  function action(){
    setInterval(function() {
      document.body.style.backgroundImage = getRandomBackground();
    }, 5000);

  }

// Get a random background image URL from the array
  function getRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return `url('${backgrounds[randomIndex]}')`;

  }

// Set the background image every 60 seconds

// The Game

const images = [
   "image/GameScenes/scene0.png",
  "image/GameScenes/scene1.png",
  "image/GameScenes/scene2.png",
  "image/GameScenes/scene3.png",
  "image/GameScenes/scene4.png",
  "image/GameScenes/scene5.png",
  "image/GameScenes/scene8.png",
  "image/GameScenes/scene9.png",
  "image/GameScenes/scene10.png",
  "image/GameScenes/scene11.png",
  "image/GameScenes/scene12.png",
  "image/GameScenes/scene13.png",
  "image/GameScenes/scene14.png"
];
let index = 0;

document.addEventListener("keydown", event => {
  if (event.code === "ArrowLeft") {
    index--;
  } else if (event.code === "ArrowRight") {
    index++;
  }

  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  if(index == 7){
    bgmusic.pause();
    bgmusic.src = "music/scary.mp3";
    bgmusic.play();
  }

  if(index == 12 || index == 1 ){
    bgmusic.pause();
    bgmusic.src = "music/bgm.mp3";
    bgmusic.play();
  }

  document.getElementById("image").src = images[index];
});


const image = document.getElementById("image");

image.addEventListener("touchstart", event => {
  const touchX = event.touches[0].clientX;
  const screenWidth = window.innerWidth;
  const threshold = screenWidth / 2;

  if (touchX < threshold) {
    index--;
  } else {
    index++;
  }

  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  if(index == 7){
    bgmusic.pause();
    bgmusic.src = "music/scary.mp3";
    bgmusic.play();
  }

  if(index == 12 || index == 1 ){
    bgmusic.pause();
    bgmusic.src = "music/bgm.mp3";
    bgmusic.play();
  }

  document.getElementById("image").src = images[index];
});