const section = document.querySelector('body');
const logo = document.querySelector('#pokeball');
const FPS = 60;
section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';

// Logo moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 5;
let ySpeed = 5;
function update() {
  logo.style.left = xPosition + 'px';
  logo.style.top = yPosition + 'px';
}

setInterval(() => {
  if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
  }
  if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
    ySpeed = -ySpeed;
  }

  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
}, 1000 / FPS);

window.addEventListener('resize', () => {
  xPosition = 10;
  yPosition = 10;

  section.style.height = window.innerHeight + 'px';
  section.style.width = window.innerWidth + 'px';
});

var audio, music, musicParse;
const touchMe = () => {
  const hidden = document.getElementsByClassName('hidden');

  for (const ele of hidden) {
    ele.classList.remove('hidden');
  }

  document.getElementById('rainbow').classList.remove('hidden');

  document.getElementsByClassName('container')[0].classList.add('hidden');

  (audio = ''),
    (musicParse = function (f) {
      return eval(
        "for(var t=0,S='RIFF_oO_WAVEfmt " +
          atob('EAAAAAEAAQBAHwAAQB8AAAEACAA') +
          "data';++t<3e5;)S+=String.fromCharCode(" +
          f +
          ')'
      );
    }),
    (music = function () {
      var a;
      return (
        (a =
          '(t<<3)*[8/9,1,9/8,6/5,4/3,3/2,0][[0xd2d2c8,0xce4088,0xca32c8,0x8e4009][t>>14&3]>>(0x3dbe4688>>((t>>10&15)>9?18:t>>10&15)*3&7)*3&7]&255'),
        (audio = new Audio('data:audio/wav;base64,' + btoa(musicParse(a)))),
        audio.play()
      );
    })();
};
