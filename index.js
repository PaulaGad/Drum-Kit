const sounds = ['tom-1', 'tom-2', 'tom-3','tom-4', 'snare', 'crash', 'kick-bass' ]
// const audio = [];

// for (let i = 0; i < numberOfBtns; i++) {
//  audio.push(new Audio(`sounds/${sounds[i]}.mp3`));
//  btns[i].addEventListener('dblclick', e => audio[i].play());
// }


const btns = [...document.querySelectorAll('button')];
const numberOfBtns = btns.length;

for (let i = 0; i < numberOfBtns; i++) {
 btns[i].addEventListener('click', function() {
 const btnInnerHtml = this.innerHTML;
 playAudio(btnInnerHtml);
 btnAnimation(btnInnerHtml);
 });
}

document.addEventListener('keydown', e => {
 playAudio(e.key);
 btnAnimation(e.key);
})

btnAnimation = currentKey => {
 const activeBtn = document.querySelector('.' + currentKey);
 activeBtn.classList.add('pressed');

 setTimeout(() => activeBtn.classList.remove('pressed'), 100);
}

const playAudio = key => {
 for (let i = 0; i < numberOfBtns; i++) {
  switch (key) {
   case "w":
    const tom1 = new Audio(`sounds/${sounds[i]}.mp3`);
    tom1.play();
   break;

   case "a":
    const tom2 = new Audio(`sounds/${sounds[i]}.mp3`);
    tom2.play();
   break;

   case "s":
    const tom3 = new Audio(`sounds/${sounds[i]}.mp3`);
    tom3.play();
   break;

   case "d":
    const tom4 = new Audio(`sounds/${sounds[i]}.mp3`);
    tom4.play();
   break;

   case "j":
    const snare = new Audio(`sounds/${sounds[i]}.mp3`);
    snare.play();
   break;

   case "k":
    const crash = new Audio(`sounds/${sounds[i]}.mp3`);
    crash.play();
   break;

   case "l":
    const kickBass = new Audio(`sounds/${sounds[i]}.mp3`);
    kickBass.play();
   break;

   default: console.log(key)
    break;
  }
 }
}





// for (let i = 0; i < numberOfBtns; i++) {
//  btns[i].addEventListener('click', function () {
//   const btnInnerHtml = this.innerHTML;

//   switch (btnInnerHtml) {
//    case "w":
//     const tom1 = new Audio(`sounds/${sounds[i]}.mp3`);
//     tom1.play();
//     break;

//    case "a":
//      const tom2 = new Audio(`sounds/${sounds[i]}.mp3`);
//      tom2.play();
//     break;

//    case "s":
//     const tom3 = new Audio(`sounds/${sounds[i]}.mp3`);
//     tom3.play();
//    break;

//    case "d":
//     const tom4 = new Audio(`sounds/${sounds[i]}.mp3`);
//     tom4.play();
//    break;

//    case "j":
//     const snare = new Audio(`sounds/${sounds[i]}.mp3`);
//     snare.play();
//    break;

//    case "k":
//     const crash = new Audio(`sounds/${sounds[i]}.mp3`);
//     crash.play();
//    break;

//    case "l":
//     const kickBass = new Audio(`sounds/${sounds[i]}.mp3`);
//     kickBass.play();
//    break;

//    default: console.log(btnInnerHtml)
//     break;
//   }


//  })
// }