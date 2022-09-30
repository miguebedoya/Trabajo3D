//escenario
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();
loader.load("./img/fondo.jpg", function (texture){
    scene.background=texture;
})

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1,1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement)

//luz

hlight = new THREE.AmbientLight(0xffffff,1)
hlight.position.set(10,10,10);
scene.add(hlight);

directionalLight = new THREE.DirectionalLight (0xfffffff);
directionalLight.position.set(10,10,10);
directionalLight.castShadow = true;
scene.add(directionalLight)

light = new THREE.PointLight(0xc4c4c4,0.3);
light.position.set(1,1,1);
scene.add(light); 

light2 = new THREE.PointLight(0xc4c4c4,0.3);
    light2.position.set(0,0,0);
    scene.add(light2);
    
//objetos

let loader1 = new THREE.GLTFLoader();
  loader1.load('../Per3D/Personaje 1/scene.gltf', function(gltf){
    personaje = gltf.scene.children[0];
    personaje.scale.set(0.02,0.02,0.02);
    scene.add(gltf.scene);
    animate();
    personaje.position.x = -4;
    personaje.position.y = -2.5;
    personaje.position.z = 2;
    personaje.rotation.z = 0.4;

  });
  const flyControls= new THREE.FlyControls(camera, renderer.domElement);
    
  flyControls.movementSpeed = 50;
  flyControls.rollSpeed = 0.01;
  flyControls.autoForward = false;
  flyControls.dragToLock = false;

  camera.position.z = 8



//Objeto 2
  
let loader2 = new THREE.GLTFLoader();
loader2.load('../Per3D/Personaje 2/scenee 02.gltf', function(gltf){
  personaje2 = gltf.scene.children[0];
  personaje2.scale.set(1.6,1.6,1.6);
  scene.add(gltf.scene);
  animate();
  personaje2.position.x = 9;
  personaje2.position.y = -3.5;
  personaje2.rotation.z = -1.2;
  

});

camera2.position.z = 450;





//animacion
function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
    flyControls.update(0.5);
}
animate();

