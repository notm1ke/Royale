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
    }
};

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

	Web.log('Page finished loading in ' + parseFloat(performance.now() - start).toFixed(3) + 'ms.');
});