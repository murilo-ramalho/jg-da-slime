//variaveis do jg
const scene;
const camera;
const renderer;
const animate;

//jg
scene = new THREE.scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
document.body.style.margin = "0"
animate = function () {
    requestAnimationFrame( animate );




    renderer.render( scene, camera );
};


//inicio
animate();