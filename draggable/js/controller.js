(function (trello){
	function Controller(view){
		var self = this;
		this.view = view;
		this.view.bind("newListLink",function (target){
			self.actions4NewListInput(target);
		});
		this.view.bind("newListInput",function (action,value){
			self.actionsAfterListInput(action,value);
		});
		this.view.bind("inputFormClick",function (action,value){
			self.actionsAfterListInput(action,value);
		});
	}
	Controller.prototype.actions4NewListInput = function (target){
		this.view.render("toggleLinkVisibility");
		this.view.render("toggleInputFormVisibility");
		this.view.giveFocusToInput(target);
	};
	Controller.prototype.actionsAfterListInput = function (action,value){
		if((action === "save" || action === "input") && value){
			var self = this;
			this.view.render("appendList",value);
			this.view.render("clearInput");
			this.view.bind("clickOnAddCard",function (target,action){
				self.actionsOnList(target,action);
			});
			this.view.bind("makeListDroppable");
		}
		this.view.render("toggleLinkVisibility");
		this.view.render("toggleInputFormVisibility");
	};
	Controller.prototype.actionsOnList = function (target,action) {
		var self = this;
		this.view.removeAllTaskForms();
		this.view.showAddCard(target);
		this.view.render("addCardInputTemplate",target);
		this.view.giveFocusToInput(target,action);
		this.view.render("hideAddCard",target);
		this.view.bind("cardInput",function (target,action,value) {
			self.actions4CardInput(target,action,value);
		});

	}
	Controller.prototype.actions4CardInput = function(target,action,value) {
		if(value && action === "add"){
			this.view.render("addCardToList",{
				listButton : target,
				task : value
			});
			this.view.bind('makeCardDraggable');
		}
		this.view.showAddCard(target);
		this.view.removeCardInput(target);
	}

	trello.Controller = Controller;
})(window.trello);