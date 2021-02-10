//chão
const geometria = new THREE.BoxGeometry(500, 1, 500);
const materialchao = new THREE.MeshBasicMaterial({color:0x006400});
const chao = new THREE.Mesh(geometria, materialchao);
scene.add(chao);
chao.position.y -= 1.5;

//montanha
const geometria1 = new THREE.BoxGeometry(10, 2.5, 10);
const material1 = new THREE.MeshBasicMaterial({color:0x0000CD});
const cenario1 = new THREE.Mesh(geometria1, material1);
scene.add(cenario1);

const geometria2 = new THREE.BoxGeometry(9.5, 2.5, 9.5);
const material2 = new THREE.MeshBasicMaterial({color:0x0000CD});
const cenario2 = new THREE.Mesh(geometria2, material2);
scene.add(cenario2);
cenario2.position.y +=2.5;

const geometria3 = new THREE.BoxGeometry(7.5, 2.5, 7.5);
const material3 = new THREE.MeshBasicMaterial({color:0x0000CD});
const cenario3 = new THREE.Mesh(geometria3, material3);
scene.add(cenario3);
cenario3.position.y +=4.5;

//sol
const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];
const geosol = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
const matsol = new THREE.MeshBasicMaterial({color:0xFFFF00});
const sol = new THREE.Mesh(geosol, matsol);
scene.add(sol);
sol.position.y += 100;

//arvore
const geotronco = new THREE.CylinderGeometry( 1, 1, 10, 50 );
const Mtronco = new THREE.MeshBasicMaterial( {color: 0xA0522D} );
const tronco = new THREE.Mesh( geotronco, Mtronco );
scene.add( tronco );
tronco.position.x = 20;
tronco.position.z = 10;

const verticesfolhas = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesfolhas = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];
const geofolhas = new THREE.PolyhedronGeometry( verticesfolhas, indicesfolhas, 6, 2 );
const mfolhas = new THREE.MeshBasicMaterial({color:0x32CD32});
const folhas = new THREE.Mesh(geofolhas, mfolhas);
scene.add(folhas);
folhas.position.x = 20;
folhas.position.z = 10;
folhas.position.y = 10;

let arvore = {base:tronco,folha:folhas}
let pedra = {part1:geometria1,part2:geometria2,part3:geometria3}
