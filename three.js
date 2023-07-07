AFRAME.registerComponent("pins", {
    init: function () {
        var camera = document.querySelector("#camera").objects3D,

        var direction = new THREE.Vector(),
        camera.getWorldDirection(direction),
    
        ball.setAttriute("velocity", direction.multiplyScalar(-10)),
    },
   

   
})

    
      
    