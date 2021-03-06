$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
   	var exampleViewController = new ExampleViewController(exampleView,model);

    var goBackTitleView = new GoBackTitleView($("#goBackTitleView"), model);
    var goBackTitleViewController = new GoBackTitleViewController(goBackTitleView, model);

    var dinnerOverview = new DinnerOverviewView($("#dinnerOverview"), model);
    var dinnerOverviewController = new DinnerOverviewViewController(dinnerOverview, model);

});