sap.ui.controller("smax.ui.empReg.view.InitialPage", {


	onItemPress : function(evt){
		debugger;
		var productID = evt.getSource().getTitle(); 
        this.getOwnerComponent().getRouter().navTo("nameProdDtl", {pid : productID });
	}



});