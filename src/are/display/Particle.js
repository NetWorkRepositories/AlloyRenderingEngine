﻿/**
* 拥有运动相关属性和纹理的粒子
*
* @class Particle
* @constructor
*/
define("ARE.Particle:ARE.Bitmap", {
    ctor: function (option) {
        this._super(option.texture);
        this.position = option.position;
        this.x = this.position.x;
        this.y = this.position.y;
        this.rotation = option.rotation || 0;
        this.velocity = option.velocity;
        this.acceleration = option.acceleration || new Vector2(0, 0);
        this.rotatingSpeed = option.rotatingSpeed || 0;
        this.rotatingAcceleration = option.rotatingAcceleration || 0;
        this.hideSpeed = option.hideSpeed || 0.01;
        this.zoomSpeed = option.hideSpeed || 0.01;
        this.isAlive = true;
        this.setFilter.apply(this, option.filter);
    },
    tick: function () {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity.multiply(0.1));
        this.rotatingSpeed += this.rotatingAcceleration;
        this.rotation += this.rotatingSpeed;
        this.alpha -= this.hideSpeed;

        this.x = this.position.x;
        this.y = this.position.y;
        this.alpha = this.alpha;
    }

})

