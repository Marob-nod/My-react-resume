//IMPORTS
//Import Styles sheet
import './style.css'
//import THREE JS Library
import * as THREE from 'three'
//import OrbitControls class from the THREE JS library
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//PROJECT SETUP
//1- Scene -- Container who holds all of your objects/cameras/lights
const scene = new THREE.Scene()
//2- Camera -- Multiple cameras/ from which point the scene is observed (Eyeball of a specator) 
//--- THREE.PerspectiveCamera(FieldOfView, aspectRatio based on the browser-window, viewFrustum, 1000 )
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.y = 20
camera.position.x = 70

//MOVE CAMERA SCROLL
function moveCamera() {
  const t = document.body.getBoundingClientRect().top

  //camera.position.z = t * -0.05
  camera.position.x = 70 + t * 0.1
  //camera.position.y = 20 + t * 0.05
  console.log(t)
}

document.body.onscroll = moveCamera
//3- Renderer -- Render the graphic to the screen
// We specify the DOM element we want to use 
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})
//Renderer setup
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth, window.innerHeight )
camera.position.setZ(30) //perspective

renderer.render( scene, camera )


//OBJECTS

//Shape
const geometry = new THREE.TorusGeometry( 4, 0.75, 2, 500 )
//Wrapping style layer -- MeshStandardMaterial => Dynamic component
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347, wireframe: true } ) 
 //Final component
const torus = new THREE.Mesh( geometry, material )
//Position on the Scene
torus.position.set(60, 0, 0)
//Add the component to the scene
//scene.add(torus)


//LIGHTS SETUP

//PointLight => light the scene from a certain point/ certain intensity
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(-20,-70,50)

//AmbientLight => Light all the DOM element with the same intensity
const ambientLight  = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

//HELPERS => components that help you to setup your lights/objects/camear/scene

//Show the source of light (wireframe)
const lightHelper = new THREE.PointLightHelper(pointLight)
//Show the axis of your scene
const gridHelper = new THREE.GridHelper()
//scene.add(lightHelper, gridHelper)

//ORBITSCONTROLS => Listen the mouse/DOM mouvements
const controls = new OrbitControls(camera, renderer.domElement)

//Create a star in a random position of the scene
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff})
  const star = new THREE.Mesh( geometry, material )

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ))

  star.position.set(x, y, z)
  scene.add(star)
}
//Create the 200 stars in the Dom scene
Array(200).fill().forEach(addStar)

//Background Setup
const spaceTexture = new THREE.TextureLoader().load('./space2.jpg')
scene.background = spaceTexture

// TEXTURE MAPPING

//tableau d'objets planetes
const planetes = []

//function creating the planetes
const createPlanete = (planeteImg, reliefImg, xCoord, yCoord, zCoord, xPosition, yPosition, zPosition) => {
  const planeteTexture = new THREE.TextureLoader().load(planeteImg)
  const normalTexture = new THREE.TextureLoader().load(reliefImg)

  const planete = new THREE.Mesh(
    new THREE.SphereGeometry(xCoord, yCoord, zCoord),
    new THREE.MeshStandardMaterial( {
      map: planeteTexture,
      normalMap: normalTexture,
    } )
  )
  planete.position.set(xPosition, yPosition, zPosition)
  planete.rotation.y += 0.01
  planetes.push(planete)
  controls.update()
  scene.add(planete)  
}

const createSun = (planeteImg, reliefImg, xCoord, yCoord, zCoord, xPosition, yPosition, zPosition) => {
  const sunTexture = new THREE.TextureLoader().load(planeteImg)
  const normalTexture = new THREE.TextureLoader().load(reliefImg)

  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(xCoord, yCoord, zCoord),
    new THREE.MeshStandardMaterial( {
      map: sunTexture,
      normalMap: normalTexture,
    } )
  )
  sun.position.set(xPosition, yPosition, zPosition)
  sun.rotation.y += 0.01
  controls.update()
  scene.add(sun)  
}

//PLANETS & SUN
createSun('./planetes-img/sun-texture.jpeg', './planetes-img/jupiter-relief', 5, 32, 32, 0, 0, 0)
createPlanete('./planetes-img/mercure-texture.jpg', './planetes-img/jupiter-relief', 1, 20, 20, 10, 0, 10)
createPlanete('./planetes-img/venus-texture.jpg', './planetes-img/jupiter-relief', 1.5, 32, 32, 20, 0, 50)
createPlanete('./planetes-img/earth-texture.jpg', './planetes-img/jupiter-relief', 2, 32, 32, -30, 0, 18)
createPlanete('./planetes-img/mars-texture.jpeg', './planetes-img/jupiter-relief', 1.5, 32, 32, 40, 0, 5)
createPlanete('./planetes-img/jupiter-texture.jpg', './planetes-img/jupiter-relief', 2.5, 32, 32, -50, 0, 3)
createPlanete('./planetes-img/saturna-texture.jpg', './planetes-img/jupiter-relief', 5, 32, 32, 60, 0, 30)
createPlanete('./planetes-img/uranus-texture.jpg', './planetes-img/jupiter-relief', 2, 32, 32, -70, 0, 4)
//createPlanete('./planetes-img/neptune-texture.jpg', './planetes-img/jupiter-relief', 1.5, 32, 32, 80, 0, 60)
//createPlanete('./planetes-img/pluton-texture.jpg', './planetes-img/jupiter-relief', 2, 32, 32, -90, 0, 0)

//Animate renderer animaete function for Torus Object
function animate() {
  requestAnimationFrame( animate );
  let theta = 0.001
  //torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  //torus.rotation.x += 0.01
  //Animation planete rotation
  planetes.map(planete => {
      rotateAboutPoint(planete, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), theta)
      theta = theta*(-1.5)
  })

  controls.update()

  renderer.render( scene, camera )
}

function rotateAboutPoint(obj, point, axis, theta, pointIsWorld){
  pointIsWorld = (pointIsWorld === undefined)? false : pointIsWorld;

  if(pointIsWorld){
      obj.parent.localToWorld(obj.position); // compensate for world coordinate
  }

  obj.position.sub(point); // remove the offset
  obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
  obj.position.add(point); // re-add the offset

  if(pointIsWorld){
      obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
  }

  obj.rotateOnAxis(axis, theta); // rotate the OBJECT
}
//Animate function call
animate()