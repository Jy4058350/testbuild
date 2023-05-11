import _ from 'lodash';
import Parallax from 'parallax-js';


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  // clipRelativeInput: true,
  hoverOnly: true,
  
});

parallaxInstance.friction(0.04, 0.04);