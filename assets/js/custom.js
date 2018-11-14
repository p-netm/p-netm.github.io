window.onload = main();

function main() {
    particlesJS.load('particle-div', 'assets/json/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
}
