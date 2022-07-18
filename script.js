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
  document.getElementById("eevee").src = "https://c.tenor.com/oiH88TdX1dAAAAAd/eevee-dance.gif";
  document.getElementById("rainbow").src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18e785a0-0d3f-4348-bce5-a9701073baf7/d8fitlo-63d7acd8-b1dc-4d88-95f2-8ea7022c247a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE4ZTc4NWEwLTBkM2YtNDM0OC1iY2U1LWE5NzAxMDczYmFmN1wvZDhmaXRsby02M2Q3YWNkOC1iMWRjLTRkODgtOTVmMi04ZWE3MDIyYzI0N2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M9rebvyhqjr7-atRHwDgYxvhsMVabBOYzpdukHkBjGw";
  document.getElementById("pokeball").src = "https://www.seekpng.com/png/full/972-9725718_jamies-pixel-pokemon-ball-pixel-art-pokeball.png";


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
