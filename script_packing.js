import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.setClearColor('#71797E');

renderer.render(scene, camera);

const container_width = 59.98;
const container_height = 25.91;
const container_depth = 24.38;

/* Adding Container */
const containerGeometry = new THREE.BoxGeometry(container_width, container_height, container_depth);

/* Container Lines */
const edges = new THREE.EdgesGeometry( containerGeometry );
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
line.position.set(container_width/2, container_height/2, container_depth/2);
scene.add(line);

// Recupere os dados do JSON
const jsonData = {
    "1": {
        "id": 1,
        "length": 589.8,
        "breadth": 259.1,
        "height": 243.8,
        "volume": 37256828.48,
        "weight": 10000,
        "fittedItems": [
            {
                "id": 16,
                "length": 60,
                "breadth": 200,
                "height": 80,
                "volume": 960000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 0,
                    "y-axis": 0,
                    "z-axis": 0
                }
            },
            {
                "id": 20,
                "length": 60,
                "breadth": 200,
                "height": 80,
                "volume": 960000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 60,
                    "y-axis": 0,
                    "z-axis": 0
                }
            },
            {
                "id": 19,
                "length": 60,
                "breadth": 200,
                "height": 80,
                "volume": 960000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 120,
                    "y-axis": 0,
                    "z-axis": 0
                }
            },
            {
                "id": 18,
                "length": 60,
                "breadth": 200,
                "height": 80,
                "volume": 960000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 180,
                    "y-axis": 0,
                    "z-axis": 0
                }
            },
            {
                "id": 17,
                "length": 60,
                "breadth": 200,
                "height": 80,
                "volume": 960000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 240,
                    "y-axis": 0,
                    "z-axis": 0
                }
            },
            {
                "id": 2,
                "length": 170,
                "breadth": 46,
                "height": 82,
                "volume": 641240,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 300,
                    "y-axis": 0,
                    "z-axis": 0
                }
            },
            {
                "id": 1,
                "length": 170,
                "breadth": 46,
                "height": 82,
                "volume": 641240,
                "weight": 5,
                "rotationType": 2,
                "position": {
                    "x-axis": 470,
                    "y-axis": 0,
                    "z-axis": 0
                }
            },
            {
                "id": 4,
                "length": 170,
                "breadth": 46,
                "height": 82,
                "volume": 641240,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 0,
                    "y-axis": 80,
                    "z-axis": 0
                }
            },
            {
                "id": 3,
                "length": 170,
                "breadth": 46,
                "height": 82,
                "volume": 641240,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 300,
                    "y-axis": 82,
                    "z-axis": 0
                }
            },
            {
                "id": 5,
                "length": 170,
                "breadth": 46,
                "height": 82,
                "volume": 641240,
                "weight": 5,
                "rotationType": 3,
                "position": {
                    "x-axis": 470,
                    "y-axis": 170,
                    "z-axis": 0
                }
            },
            {
                "id": 7,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 170,
                    "y-axis": 80,
                    "z-axis": 0
                }
            },
            {
                "id": 9,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 0,
                    "y-axis": 162,
                    "z-axis": 0
                }
            },
            {
                "id": 6,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 85,
                    "y-axis": 162,
                    "z-axis": 0
                }
            },
            {
                "id": 8,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 170,
                    "y-axis": 162,
                    "z-axis": 0
                }
            },
            {
                "id": 15,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 300,
                    "y-axis": 164,
                    "z-axis": 0
                }
            },
            {
                "id": 14,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 385,
                    "y-axis": 164,
                    "z-axis": 0
                }
            },
            {
                "id": 13,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 300,
                    "y-axis": 0,
                    "z-axis": 46
                }
            },
            {
                "id": 12,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 385,
                    "y-axis": 0,
                    "z-axis": 46
                }
            },
            {
                "id": 11,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 470,
                    "y-axis": 0,
                    "z-axis": 46
                }
            },
            {
                "id": 10,
                "length": 85,
                "breadth": 60,
                "height": 60,
                "volume": 306000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 300,
                    "y-axis": 60,
                    "z-axis": 46
                }
            },
            {
                "id": 21,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 4,
                "position": {
                    "x-axis": 552,
                    "y-axis": 170,
                    "z-axis": 0
                }
            },
            {
                "id": 22,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 4,
                "position": {
                    "x-axis": 555,
                    "y-axis": 0,
                    "z-axis": 46
                }
            },
            {
                "id": 23,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 385,
                    "y-axis": 60,
                    "z-axis": 46
                }
            },
            {
                "id": 24,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 455,
                    "y-axis": 60,
                    "z-axis": 46
                }
            },
            {
                "id": 25,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 4,
                "position": {
                    "x-axis": 525,
                    "y-axis": 60,
                    "z-axis": 46
                }
            },
            {
                "id": 26,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 4,
                "position": {
                    "x-axis": 555,
                    "y-axis": 70,
                    "z-axis": 46
                }
            },
            {
                "id": 27,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 0,
                    "y-axis": 0,
                    "z-axis": 200
                }
            },
            {
                "id": 28,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 70,
                    "y-axis": 0,
                    "z-axis": 200
                }
            },
            {
                "id": 29,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 140,
                    "y-axis": 0,
                    "z-axis": 200
                }
            },
            {
                "id": 30,
                "length": 70,
                "breadth": 30,
                "height": 100,
                "volume": 210000,
                "weight": 5,
                "rotationType": 0,
                "position": {
                    "x-axis": 210,
                    "y-axis": 0,
                    "z-axis": 200
                }
            }
        ],
        "totalFittedVolume": 13166200,
        "totalFittedWeight": 150,
        "unfittedItems": [],
        "totalUnfittedVolume": 0,
        "totalUnfittedWeight": 0
    }
};
const fittedItems = jsonData['1'].fittedItems;

// Iterar sobre os itens ajustados (fittedItems) e plotá-los
fittedItems.forEach(itemData => {
    // Criar geometria para o item
    const itemGeometry = new THREE.BoxGeometry(itemData.length/10, itemData.breadth/10, itemData.height/10);

    // Criar material para o item
    const itemMaterial = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, transparent: true, opacity: 0.5 });

    // Criar mesh (objeto) para o item usando geometria e material
    const itemMesh = new THREE.Mesh(itemGeometry, itemMaterial);

    // Definir a posição do item
    itemMesh.position.set(itemData.position['x-axis']/10, itemData.position['y-axis']/10, itemData.position['z-axis']/10);

    // Aplicar rotação com base no rotationType
    switch (itemData.rotationType) {
        case 1:
            itemMesh.rotation.z = Math.PI / 2;
            break;
        case 2:
            itemMesh.rotation.y = Math.PI / 2;
            break;
        case 3:
            itemMesh.rotation.x = Math.PI / 2;
            itemMesh.rotation.y = Math.PI / 2;
            break;
        case 4:
            itemMesh.rotation.x = Math.PI / 2;
            break;
        case 5:
            itemMesh.rotation.x = Math.PI / 2;
            itemMesh.rotation.z = Math.PI / 2;
            break;
        default:
            // Nenhuma rotação
            break;
    }

    // Adicionar o item à cena
    scene.add(itemMesh);
});

const axesHelper = new THREE.AxesHelper(5);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper, axesHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

animate();

