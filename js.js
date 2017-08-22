window.onload = function() {
	document.getElementById("submit").onclick = function() {
		var be = document.getElementById("before");
		var af = document.getElementById("after");
		var px = document.getElementById("sz"); // base pixel size
		var tx = document.getElementById("tx"); // text area

		var bu = be.options[be.selectedIndex].text; // before unit
		var au = af.options[af.selectedIndex].text; // after unit
		var pv = px.value;
		var tv = tx.value;

		if (bu !== au) {
			out = webunitconverter(bu, au, pv, tv);
			tx.value = out;
		};
	};
};
