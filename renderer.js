import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls';

function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;
    G = (G<255)?G:255;
    B = (B<255)?B:255;

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

const scene = new THREE.Scene();
scene.background = new THREE.Color('#87CEEB');

const group = new THREE.Object3D();

scene.add(group);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
camera.position.setX(-40);
camera.position.setY(50);

renderer.render(scene, camera);

/*const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);*/

const planeGeometry = new THREE.PlaneGeometry(200, 200);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xD4D4D4, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
plane.position.y = -1;

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

let solver = 'python';

const controls = new OrbitControls( camera, renderer.domElement );

window.Packing.forEach(binData => {

    const cube_width = binData.breadth;
    const cube_height = binData.height;
    const cube_length = binData.length;

    const solver = binData.solver;

    console.log('dimensoes', cube_width, cube_height, cube_length);

    if(solver == 'python') {

        const geometry = new THREE.BoxGeometry(cube_width, cube_height, cube_length);
        const edges = new THREE.EdgesGeometry( geometry );
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: '#727272', linewidth: 2}));

        line.position.set(cube_width/2, cube_height/2, cube_length/2);

        scene.add(line);
        group.add(line);

        const fittedItems = binData.fitted_items;

        fittedItems.forEach(itemData => {

            let breadth = itemData.breadth;
            let height = itemData.height;
            let length = itemData.length;

            // Aplicar rotação com base no rotationType
            switch (itemData.rotationType) {
                case 1:
                    console.log(itemData.id, 'case 1');
                    /* Rotaciona no eixo Z */
                    [breadth, height] = [height, breadth];
                    break;
                case 2:
                    console.log(itemData.id, 'case 2');
                    /* Rotaciona no eixo Y */
                    [length, breadth] = [breadth, length];
                    [height, breadth] = [breadth, height];
                    break;
                case 3:
                    console.log(itemData.id, 'case 3');
                    /* Rotaciona no X e depois Y */
                    // [height, breadth] = [breadth, height];
                    [length, breadth] = [breadth, length];
                    break;
                case 4:
                    console.log(itemData.id, 'case 4');
                    /* Rotaciona no X */
                    [length, height] = [height, length];
                    [breadth, height] = [height, breadth];
                    break;
                case 5:
                    console.log(itemData.id, 'case 5');
                    /* Rotaciona no X e depois Z */
                    [breadth, length] = [length, breadth];
                    [breadth, height] = [height, breadth];
                    break;
                default:
                    console.log(itemData.id, 'default');
                    // Nenhuma rotação
                    break;
            }

            // Definir cores
            const itemColor = Math.floor(Math.random() * 0xffffff);
            const lineColorStr = '#' + itemColor.toString(16).padStart(6, '0');
            const lineColor = shadeColor(lineColorStr.toUpperCase(), -40);

            // Criar item
            const itemGeometry = new THREE.BoxGeometry(breadth, height, length);
            const itemMaterial = new THREE.MeshBasicMaterial({ color: itemColor, transparent: true, opacity: 0.7 });
            const itemMesh = new THREE.Mesh(itemGeometry, itemMaterial);

            // Criar arestas
            const itemEdges = new THREE.EdgesGeometry( itemGeometry );
            const itemLine = new THREE.LineSegments(itemEdges, new THREE.LineBasicMaterial({color: lineColor, linewidth: 2}));

            const x_offset = breadth / 2;
            const y_offset = height / 2;
            const z_offset = length / 2;

            const x_pos = x_offset + itemData.position['x-axis'];
            const y_pos = y_offset + itemData.position['y-axis'];
            const z_pos = z_offset + itemData.position['z-axis'];

            // Definir a posição do item
            itemMesh.position.set(x_pos, y_pos, z_pos);
            itemLine.position.set(x_pos, y_pos, z_pos);

            // Adicionar o item à cena
            scene.add(itemMesh);
            scene.add(itemLine);

            group.add(itemMesh);
            group.add(itemLine);
        });
        group.rotation.x -= Math.PI / 2;
    } else {

    }
})

function animate() {
    requestAnimationFrame( animate );

    controls.update();
    renderer.render( scene, camera );
}

animate();
