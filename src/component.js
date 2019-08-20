import "./component.scss";
var ObservableSlim = require('observable-slim');
var Nimbly = require('nimbly'); 

export default class Component extends Nimbly { 

	constructor(data, options) {
		super("Component", {
			tagName:"component" 
			,templates:{
				t4m_tpl_boilerplate_dashboard: `
					<div class="t4m-components-dashboard"> 
						<h1>I'm a nimbly component!</h1>
					</div>
				`
			}
			,initList: []
			,_refreshList: true 
			,data:{} 
			,delayInit:false
		}, data || {}, options || {});   
	};   

	/**
	 * Called upon construction of the component
	 * @method _init
	 * @memberof Component
	 * @returns {undefined}
	 */
	_init() {   
		console.log("Dashboard main class initializing.."); 
	}  
	 
	/**
	 * Renders the component plugin
	 * @method _render
	 * @memberof Component
	 * @returns {object} jQuery-referenced DOMNode.
	 */
	_render() {     
		return this._setEvents($(Mustache.render(this.templates["t4m_tpl_boilerplate_dashboard"], this.data)));
	};

	_afterInDocument() {  

	}  
	  
};