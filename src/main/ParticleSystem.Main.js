﻿kmdjs.config({
    name: "AlloyRenderingEngine",
    baseUrl: "../src",
    classes: [
          { name: "ARE.DisplayObject", url: "are/display" },
          { name: "ARE.Bitmap", url: "are/display" },
          { name: "ARE.Sprite", url: "are/display" },
          { name: "ARE.Stage", url: "are/display" },
          { name: "ARE.Shape", url: "are/display" },
          { name: "ARE.Container", url: "are/display" },
          { name: "ARE.Matrix2D", url: "are/util" },
          { name: "ARE.Loader", url: "are/util" },
          { name: "ARE.UID", url: "are/util" },
          { name: "ARE.CanvasRenderer", url: "are/renderer" },
          { name: "ARE.WebGLRenderer", url: "are/renderer" },
          { name: "ARE.GLMatrix", url: "are/util" },
          { name: "ARE.RAF", url: "are/util" },
          { name: "ARE.FPS", url: "are/util" },
          { name: "ARE.Particle", url: "are/display" },
          { name: "ARE.Util", url: "are/util" },
          { name: "ARE.Vector2", url: "are/util" },
          { name: "ARE.Keyboard", url: "are/util" },
          { name: "ARE.ParticleSystem", url: "are/display" }
    ]
});

define("Main", ["ARE"], {
    ctor: function () {
        var pgBmp, stage = new Stage("#ourCanvas", localStorage.webgl == "1");

        var ps = new ParticleSystem({
            emitX: 200,
            emitY: 200,
            speed: 10,
            angle: -30,
            angleRange: 50,
            emitArea: [1, 1],
            gravity: new Vector2(0, 0),
            texture: "data:image/png;base64\,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJkSURBVHjaxJeJbusgEEW94S1L//83X18M2MSuLd2pbqc4wZGqRLrKBsyZhQHny7Jk73xVL8xpVhWrcmiB5lX+6GJ5YgQ2owbAm8oIwH1VgKZUmGcRqKGGPgtEQQAzGR8hQ59fAmhJHSAagigJ4E7GPWRXOYC6owAd1JM6wDQPADyMWUqZRMqmAojHp1Vn6EQQEgUNMJLnUjMyJsM49wygBkAPw9dVFwXRkncCIIW3GRgoTQUZn6HxCMAFEFd8TwEQ78X4rHbILoAUmeT+RFG4UhQ6MiIAE4W/UsYFjuVjAIa2nIY4q1R0GFtQWG3E84lqw2GO2QOoCKBVu0BAPgDSU0eUDjjQenNkV/AW/pWChhpMTelo1a64AOKM30vk18GzTHXCNtI/Knz3DFBgsUqBGIjTInXRY1yA9xkVoqW5tVq3pDR9A0hfF5BSARmVnh7RMDCaIdcNgbPBkgzn1Bu+SfIEFSpSBmkxyrMicb0fAEuCZrWnN89veA/4XcakrPcjBWzkTuLjlbfTQPOlBhz+HwkqqPXmPQDdrQItxE1moGof1S74j/8txk8EHhTQrAE8qlwfqS5yukm1x/rAJ9Jiaa6nyATqD78aUVBhFo8b1V4DdTXdCW+IxA1zB4JhiOhZMEWO1HqnvdoHZ4FAMIhV9REF8FiUm0jsYPEJx/Fm/N8OhH90HI9YRHesWbXXZwAShU8qThe7H8YAuJmw5yOd989uRINKRTJAhoF8jbqrHKfeCYdIISZfSq26bk/K+yO3YvfKrVgiwQBHnwt8ynPB25+M8hceTt/ybPhnryJ78+tLgAEAuCFyiQgQB30AAAAASUVORK5CYII=",
            filter: [0.8, 0.2, 0.8, 1],
            emitCount: 1,
            maxCount: 100
        });

        stage.add(ps);

        stage.on("mousemove", function (evt) {
            ps.emitX = evt.stageX;
            ps.emitY = evt.stageY;
        })

        var fpsDiv = document.getElementById("fps");


        stage.onTick(function () {
            fpsDiv.innerHTML = FPS.get();
        })
    }
})
