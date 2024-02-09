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

const cube_width = 590/10;
const cube_height = 244/10;
const cube_length = 260/10;

const geometry = new THREE.BoxGeometry(cube_width, cube_height, cube_length);
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: '#727272', linewidth: 2}));

line.position.set(cube_width/2, cube_height/2, cube_length/2);

scene.add(line);
group.add(line);

/*const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);*/

const planeGeometry = new THREE.PlaneGeometry(200, 200);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xD4D4D4, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
plane.position.y = -1;

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const controls = new OrbitControls( camera, renderer.domElement );

const jsonDataPhp = [
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
];

const jsonDataPython = [
    {
        "id": 16,
        "length": 200,
        "breadth": 60,
        "height": 80,
        "rotationType": 0,
        "position": {
            "x-axis": 0,
            "y-axis": 0,
            "z-axis": 0
        },
        "color": "#842B00"
    },
    {
        "id": 17,
        "length": 200,
        "breadth": 60,
        "height": 80,
        "rotationType": 0,
        "position": {
            "x-axis": 60,
            "y-axis": 0,
            "z-axis": 0
        },
        "color": "#842B00"
    },
    {
        "id": 18,
        "length": 200,
        "breadth": 60,
        "height": 80,
        "rotationType": 0,
        "position": {
            "x-axis": 120,
            "y-axis": 0,
            "z-axis": 0
        },
        "color": "#842B00"
    },
    {
        "id": 19,
        "length": 200,
        "breadth": 60,
        "height": 80,
        "rotationType": 0,
        "position": {
            "x-axis": 180,
            "y-axis": 0,
            "z-axis": 0
        },
        "color": "#842B00"
    },
    {
        "id": 20,
        "length": 200,
        "breadth": 60,
        "height": 80,
        "rotationType": 0,
        "position": {
            "x-axis": 240,
            "y-axis": 0,
            "z-axis": 0
        },
        "color": "#842B00"
    },
    {
        "id": 1,
        "length": 46,
        "breadth": 170,
        "height": 82,
        "rotationType": 0,
        "position": {
            "x-axis": 300,
            "y-axis": 0,
            "z-axis": 0
        },
        "color": "#FF0000"
    },
    {
        "id": 2,
        "length": 46,
        "breadth": 170,
        "height": 82,
        "rotationType": 1,
        "position": {
            "x-axis": 470,
            "y-axis": 0,
            "z-axis": 0
        },
        "color": "#FF0000"
    },
    {
        "id": 3,
        "length": 46,
        "breadth": 170,
        "height": 82,
        "rotationType": 0,
        "position": {
            "x-axis": 0,
            "y-axis": 80,
            "z-axis": 0
        },
        "color": "#FF0000"
    },
    {
        "id": 4,
        "length": 46,
        "breadth": 170,
        "height": 82,
        "rotationType": 0,
        "position": {
            "x-axis": 170,
            "y-axis": 82,
            "z-axis": 0
        },
        "color": "#FF0000"
    },
    {
        "id": 5,
        "length": 46,
        "breadth": 170,
        "height": 82,
        "rotationType": 2,
        "position": {
            "x-axis": 0,
            "y-axis": 162,
            "z-axis": 0
        },
        "color": "#FF0000"
    },
    {
        "id": 6,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 0,
        "position": {
            "x-axis": 340,
            "y-axis": 82,
            "z-axis": 0
        },
        "color": "#FFFF37"
    },
    {
        "id": 7,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 0,
        "position": {
            "x-axis": 82,
            "y-axis": 162,
            "z-axis": 0
        },
        "color": "#FFFF37"
    },
    {
        "id": 8,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 0,
        "position": {
            "x-axis": 167,
            "y-axis": 164,
            "z-axis": 0
        },
        "color": "#FFFF37"
    },
    {
        "id": 9,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 0,
        "position": {
            "x-axis": 252,
            "y-axis": 164,
            "z-axis": 0
        },
        "color": "#FFFF37"
    },
    {
        "id": 10,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 0,
        "position": {
            "x-axis": 337,
            "y-axis": 164,
            "z-axis": 0
        },
        "color": "#FFFF37"
    },
    {
        "id": 11,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 0,
        "position": {
            "x-axis": 422,
            "y-axis": 170,
            "z-axis": 0
        },
        "color": "#FFFF37"
    },
    {
        "id": 12,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 2,
        "position": {
            "x-axis": 507,
            "y-axis": 170,
            "z-axis": 0
        },
        "color": "#FFFF37"
    },
    {
        "id": 13,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 0,
        "position": {
            "x-axis": 0,
            "y-axis": 0,
            "z-axis": 200
        },
        "color": "#FFFF37"
    },
    {
        "id": 14,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 0,
        "position": {
            "x-axis": 85,
            "y-axis": 0,
            "z-axis": 200
        },
        "color": "#FFFF37"
    },
    {
        "id": 15,
        "length": 60,
        "breadth": 85,
        "height": 60,
        "rotationType": 0,
        "position": {
            "x-axis": 170,
            "y-axis": 0,
            "z-axis": 200
        },
        "color": "#FFFF37"
    },
    {
        "id": 21,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 3,
        "position": {
            "x-axis": 552,
            "y-axis": 0,
            "z-axis": 0
        },
        "color": "#0000E3"
    },
    {
        "id": 22,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 0,
        "position": {
            "x-axis": 255,
            "y-axis": 0,
            "z-axis": 200
        },
        "color": "#0000E3"
    },
    {
        "id": 23,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 0,
        "position": {
            "x-axis": 300,
            "y-axis": 0,
            "z-axis": 60
        },
        "color": "#0000E3"
    },
    {
        "id": 24,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 0,
        "position": {
            "x-axis": 300,
            "y-axis": 0,
            "z-axis": 90
        },
        "color": "#0000E3"
    },
    {
        "id": 25,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 0,
        "position": {
            "x-axis": 300,
            "y-axis": 0,
            "z-axis": 120
        },
        "color": "#0000E3"
    },
    {
        "id": 26,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 0,
        "position": {
            "x-axis": 300,
            "y-axis": 0,
            "z-axis": 150
        },
        "color": "#0000E3"
    },
    {
        "id": 27,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 0,
        "position": {
            "x-axis": 325,
            "y-axis": 0,
            "z-axis": 180
        },
        "color": "#0000E3"
    },
    {
        "id": 28,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 0,
        "position": {
            "x-axis": 370,
            "y-axis": 0,
            "z-axis": 60
        },
        "color": "#0000E3"
    },
    {
        "id": 29,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 0,
        "position": {
            "x-axis": 370,
            "y-axis": 0,
            "z-axis": 90
        },
        "color": "#0000E3"
    },
    {
        "id": 30,
        "length": 30,
        "breadth": 70,
        "height": 100,
        "rotationType": 0,
        "position": {
            "x-axis": 370,
            "y-axis": 0,
            "z-axis": 120
        },
        "color": "#0000E3"
    }
];

const fittedItems = jsonDataPython;

// Iterar sobre os itens ajustados (fittedItems) e plotá-los
fittedItems.forEach(itemData => {

    let breadth = itemData.breadth/10;
    let height = itemData.height/10;
    let length = itemData.length/10;

    // Aplicar rotação com base no rotationType
    switch (itemData.rotationType) {
        case 1:
            /* Rotaciona no eixo Z */
            [breadth, height] = [height, breadth];
            break;
        case 2:
            /* Rotaciona no eixo Y */
            [breadth, length] = [length, breadth];
            break;
        case 3:
            /* Rotaciona no X e depois Y */
            [height, breadth] = [breadth, height];
            [length, breadth] = [breadth, length];
            break;
        case 4:
            /* Rotaciona no X */
            [breadth, height] = [height, breadth];
            break;
        case 5:
            /* Rotaciona no X e depois Z */
            [breadth, length] = [length, breadth];
            [breadth, height] = [height, breadth];
            break;
        default:
            // Nenhuma rotação
            break;
    }

    // Criar geometria para o item
    const itemGeometry = new THREE.BoxGeometry(breadth, height, length);

    const itemColor = Math.floor(Math.random() * 0xffffff);
    const lineColorStr = '#' + itemColor.toString(16).padStart(6, '0');
    const lineColor = shadeColor(lineColorStr.toUpperCase(), -40);

    // Criar arestas
    const itemEdges = new THREE.EdgesGeometry( itemGeometry );
    const itemLine = new THREE.LineSegments(itemEdges, new THREE.LineBasicMaterial({color: lineColor, linewidth: 2}));

    // Criar item
    const itemMaterial = new THREE.MeshBasicMaterial({ color: itemColor, transparent: true, opacity: 0.7 });
    const itemMesh = new THREE.Mesh(itemGeometry, itemMaterial);

    const x_offset = breadth / 2;
    const y_offset = height / 2;
    const z_offset = length / 2;

    const x_pos = x_offset + itemData.position['x-axis']/10;
    const y_pos = y_offset + itemData.position['y-axis']/10;
    const z_pos = z_offset + itemData.position['z-axis']/10;

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

function animate() {
    requestAnimationFrame( animate );

    controls.update();
    renderer.render( scene, camera );
}

animate();
