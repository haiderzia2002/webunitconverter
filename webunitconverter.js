/* webunitconverter *
 * v1.0.0 || LGPLv3 *
 * by haiderzia2002 */
/*
px --> Base pixel size for use when conversion takes place
dc --> Before conversion value of string --> Value of results of regex converted --> Units (em, px, %) replaced --> Modified dc overwrites value of string (After conversion)
be --> Before conversion value of results of regex
af --> After conversion value of results of regex
bu --> Before conversion unit tested using regex
au --> After conversion unit (replaces bu)
*/
webunitconverter = function(bu, au, px, tx) {
	find = new RegExp("([0-9]*\\.?[0-9]+)" + bu,"g"); // Regex to find numbers
	while ((result = tx.match(find)) !== null) {
		var be = result[0].replace(bu, "");
		if (bu == "px" && (au == "rem" || au == "em")) { // Pixel --> Em
			var af = be / px;
		} else if (bu == "px" && au == "%") { // Pixel --> perCentage
			var af = be / px * 100;
		} else if ((bu == "em" || bu == "rem") && au == "px") { // Em --> Pixel
			var af = be * px;
		} else if ((bu == "em" || bu == "rem") && au == "%") { // Em --> perCentage
			var af = be * 100;
		} else if (bu == "%" && au == "px") { // perCentage --> Pixel
			var af = be * px / 100;
		} else if (bu == "%" && (au == "em" || au == "rem")) { // perCentage --> Em
			var af = be / 100;
		} else {
			var af = be;
		};
		tx = tx.replace(be + bu, af + au);
	};
	return tx;
};
