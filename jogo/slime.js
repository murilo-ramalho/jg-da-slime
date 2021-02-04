//variaveis do jg
const scene = new THREE.scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
document.body.style.margin = "0"
const animate = function () {
    requestAnimationFrame( animate );




    renderer.render( scene, camera );
};


//inicio
animate();