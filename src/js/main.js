import _ from 'lodash';
import Parallax from 'parallax-js';


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

parallaxInstance.friction(0.2, 0.2);