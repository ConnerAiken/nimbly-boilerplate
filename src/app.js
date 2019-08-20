// Import project dependencies
import $ from 'jquery';  

// Import T4Med components
import Component from './component.js'; 

/* This is the main initialization file of the application. */
$(document).ready(function() {
	var component = new Component(); 
	var jqDom = component.render(); 
	$("body").append(jqDom);
});