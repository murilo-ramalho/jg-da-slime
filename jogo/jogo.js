//funcionamento do jogo 

// cena
const scene = new THREE.Scene();
// visão
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// renderização
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 10;

//loop de renderização, animação ou movimento
function animate() {
    requestAnimationFrame(animate);


    renderer.render(scene,camera);
}
document.addEventListener("keydown", mover);

function mover(event) {
        switch (event.keyCode) {
            case 37: //left 
                camera.rotation.y += 0.1;
                break;
            case 38: //up
                camera.rotation.x += 0.1;
                break;
            case 39: //right 
                camera.rotation.y -= 0.1;
                break;
            case 40: //dowm
                camera.rotation.x -= 0.1;
                break;
            case 87: // andar pra frente
                camera.position.z -= 0.1
                break; 
            case 83: // andar pra traz
                camera.position.z += 0.1
                break; 
            case 68: // andar pro lado direito
                camera.position.x += 0.1
                break; 
            case 65: // andar pro lado esquerdo
                camera.position.x -= 0.1
                break;
            default:
                break;
        }
};
function mapa(e) {
    e = Math.floor(10*Math.random())
    if (e==1) {
        scene.add(arvore);
    } else {
        scene.add(pedra);
        
    }
    

}

mapa(e);
//inicio do movimento
animate();;