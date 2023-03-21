// 创建场景
var scene = new THREE.Scene();

// 创建相机
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 创建渲染器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建小人
var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 创建球体
var spheres = [];
for (var i = 0; i < 50; i++) {
  var sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
  var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = Math.random() * 10 - 5;
  sphere.position.y = Math.random() * 10 - 5;
  sphere.position.z = Math.random() * 10 - 5;
  spheres.push(sphere);
  scene.add(sphere);
}

// 动画循环
var animate = function () {
  requestAnimationFrame(animate);

  // 小人移动
  cube.position.x = Math.sin(Date.now() * 0.001) * 2;

  // 球体弹跳
  for (var i = 0; i < spheres.length; i++) {
    var sphere = spheres[i];
    sphere.position.y += 0.1;
    if (sphere.position.y > 5) {
      sphere.position.y = -5;
    }
  }

  renderer.render(scene, camera);
};

animate();
