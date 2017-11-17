var Class = require('../../core/class');
var Container = require('../../dom/container');
var Node = require('./node');
var DOM = require('./dom');

var SVGGroup = Class(Node, Container, {

    element_initialize: Node.prototype.initialize,

    initialize: function (width, height) {
        this.element_initialize('g');
        this.width = width;
        this.height = height;
        this.defs = DOM.createElement('defs');
        this.element.appendChild(this.defs);
    }

});

SVGGroup.tagName = 'Group';
module.exports = SVGGroup;
