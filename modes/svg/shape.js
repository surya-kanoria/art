var Class = require('../../core/class');
var Path = require('./path');
var Base = require('./base');

var SVGShape = Class(Base, {

    base_initialize: Base.prototype.initialize,

    initialize: function (path, strokeWidth, stroke) {
        this.base_initialize('path');

        if (path != null) this.draw(path, strokeWidth, stroke);
    },

    draw: function (path, strokeWidth, stroke) {
        if (!(path instanceof Path)) path = new Path(path);
        this.element.setAttribute('d', path.toSVG());
        this.element.setAttribute('stroke-width', strokeWidth);
        this.element.setAttribute('stroke', stroke);
        return this;
    }

});

SVGShape.tagName = 'Shape';
module.exports = SVGShape;
