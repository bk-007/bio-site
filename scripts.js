// Load the Lottie animation for the mouse cursor
const cursorAnimation = bodymovin.loadAnimation({
  container: document.getElementById('cursor-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/plane-pointer.json' // Path to your cursor animation JSON file
});

// Change background color on click
document.addEventListener('click', function() {
  document.body.style.backgroundColor = '#F7DC6F'; // Summer color
});