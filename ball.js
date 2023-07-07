FRAME.registerComponent("pins", {
    init: function () {
ball.addEventListener("collide", this.removeBall)

removeBall: function (e) {
    var element = e.detail.target.el;

    var elementHit = e.detail.body.el;

    if (elementHit.id.inculdes("pin")) {

        var impulse = new cancelAnimationFrame.Vec3(0,1,-15);
        var worldPoint = new cancelAnimationFrame.Vec3().copy(
            elementHit.getAttribute("position")
        );

        elementHit.body.applyForce(impulse, worldPoint);

        element.removeEventListener("collide", this.removeBall);

        var scene = document.querySelector("#scene");
        scene.removeChild(element)
    }
}
    },
})