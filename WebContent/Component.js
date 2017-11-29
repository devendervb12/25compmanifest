//create a sub class of sap.ui.core.UIComponent
sap.ui.core.UIComponent.extend("smax.ui.empReg.Component", {
	
	metadata : {
		manifest : "json"
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
	
});


