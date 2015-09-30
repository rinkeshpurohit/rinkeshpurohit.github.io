(function (w) {
	function Main(id,city){
		this.scroll = new w.weather.Scroll(id,city);
	}
	var delhi=new Main("#delhi","Delhi"),
		bang = new Main("#bangalore","Bangalore");
})(window);