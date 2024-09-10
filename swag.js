const symbols = '#! *@!/#^ &~; ".<@&';
const targetText = 'hi there, i'm oscar';
const animatedText = document.getElementById('animated-text');

let i = 0;
setInterval(() => {
  if (i < targetText.length) {
    animatedText.textContent = targetText.substring(0, i) + symbols.substring(i, i + 1);
    i++;
  } else {
    animatedText.textContent = targetText;
  }
}, 100); // adjust the speed of the animation
