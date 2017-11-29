sap.ui.controller("smax.ui.empReg.view.ProductDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.ProductDetails
*/
	onInit: function() {
		var router = this.getOwnerComponent().getRouter(this);
		
		router.getRoute("nameProdDtl").attachPatternMatched(function(evt){
			var productId = evt.getParameters().arguments.pid;
			this.getView().bindElement("/ProductSet('"+productId+"')");			
		}, this); // controller as listener

	},


});