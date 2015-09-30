(function(a){
	function Scroll(id,city){
		var self = this,t = $("#template").html();
		this.container = $(id);
		this.city = city;
		this.$main = this.container.find(".main"),
		this.$ul = this.container.find(".tasks"),
		this.$btn = this.container.find(".weatherBtn"),
		this.template = Handlebars.compile(t),
		this.url = "http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&APPID=9b905b0fea94db58ab905e386f382c26";
		this.$main.on("scroll",function(e){
			var st = $(this).scrollTop();
		    if(self.$main.height()+st >= self.$ul.height()-50){
		    	self.getJSON(self.appendTemplate);
		    }   
		});
		this.$btn.on("click",function(e){
			self.getJSON(self.appendTemplate);
			self.$main.removeClass('hidden');

		});
	}
	Scroll.prototype.getJSON = function (callback){
		var self=this;
		$.getJSON(self.url,function(data){
			callback.call(self,data);
		});
	};
	Scroll.prototype.appendTemplate = function (data) {
		this.$ul.append(this.template({
				city : data.name,
				temp : data.main.temp-273.15
		}));
	};

	a.weather={};
	weather.Scroll = Scroll;
})(window);

