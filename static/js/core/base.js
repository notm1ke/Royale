Web = {
  author: 'Mike M',
  version: 0.1,
	log: (body) => {
		console.log("%cWeb | %c" + body, "color: #7795f8;", "color: #777;");
  },
  warn: (body) => {
		console.log("%cWeb | %c" + body, "color: #f44336;", "color: #777;");
  },
  getRandomArrayElement: (array) => {
    return array[Math.floor(Math.random() * array.length)];
  },
  getRandomPhrase: () => {
    return Web.getRandomArrayElement(Phrases);
  },
  changeBackground: () => {
    $.ajax({
        url: 'https://picsum.photos/list',
        type: 'GET',
        success: (res) => {
          $('.header').fadeOut();
          let r = Web.getRandomArrayElement(res);
          
          let height = r.height;
          let width = r.width;
          let id = r.post_url.split('photos/')[1];

          let new_url = `https://source.unsplash.com/${id}/${width}x${height}`;
          $('.header').css('background-image', `url("${new_url}")`);
          setTimeout(() => {
            $(".header").fadeIn();
          }, 1500);
        },
        error: (err) => {
            warn('Error fetching a new header image:');
            console.trace(err.stack);
        }
    });
  },
};

Phrases = [
  "hello, world!",
  "oh crap i did something",
  "oh crap did i do that?",
  "sometimes i accidently write something useful",
  "sometimes i write code thats accidently useful",
  "is this thing on?",
  "pls no nullpointerexception",
  "arrays start at " + Math.floor(Math.random() * 10),
  "it worked on my machine",
  "it worked just fine when i tested it",
  "did you try turning it off, and then on again?",
  "it\'s only game, why you heff to be mad?",
  "construct struck the constructor",
  "struck the constructor",
  "null",
  "undefined",
  "operation not permitted",
  "segmentation fault (core dumped)",
  "error 404: not found",
  "2B || !2B",
  "expected ';' at line " + Math.floor(Math.random() * 154) + " column " + Math.floor(Math.random() * 460),
  "expected ':' at line " + Math.floor(Math.random() * 154) + " column " + Math.floor(Math.random() * 460),
  "expected ')' at line " + Math.floor(Math.random() * 154) + " column " + Math.floor(Math.random() * 460),
  "expected '{' at line " + Math.floor(Math.random() * 154) + " column " + Math.floor(Math.random() * 460),
  "skynet online",
  "definitely not the nsa",
  "fueled by an iv line of coffee",
  "stackoverflow: failed to copy and paste",
  "real programmers admit to c+p'ing from stackoverflow",
  "fizz",
  "buzz",
  "fizzbuzz",
  "1, 2, fizz, 4, buzz, fizz, 7, 8...",
  "bash: command not found",
  "command not found",
  "ctrl c + ctrl v",
  "cmd c + cmd v",
  "copy + paste",
  "it's a hardware problem",
];

$(document).ready(() => {
  let start = performance.now();

	particlesJS("particles", {
          "particles": {
            "number": {
              "value": 32,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#003153"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.2,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 0.95,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "bubble"
              },
              "onclick": {
                "enable": false,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
              },
              "repulse": {
                "distance": 400,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });

	/*let opt = {
		useEasing: true,
	    useGrouping: true,
	    separator: ',',
	    decimal: '.',
	};

	let counter = new CountUp('code-lines', 0, 14954963, 0, 2.5, opt);
	
	// TODO: Add JSON fetching / parsing
	counter.start();
  */

  $('.tagline').click((e) => {
    swapQuote();
  });

  swapQuote();
	Web.log('Page finished loading in ' + parseFloat(performance.now() - start).toFixed(3) + 'ms.');
});

function swapQuote() {
  let quote = $('.tagline');
    quote.fadeOut();

    setTimeout(() => {
      quote.text(Web.getRandomPhrase());
    }, 250);

    quote.fadeIn();
}