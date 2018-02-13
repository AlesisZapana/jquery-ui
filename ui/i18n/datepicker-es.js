/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
/* Adaptado por mi, para copiar esto usar https://rawgit.com/AlesisZapana/jquery-ui/master/ui/i18n/datepicker-es.js */
/* o https://cdn.rawgit.com/AlesisZapana/jquery-ui/master/ui/i18n/datepicker-es.js*/
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.es = {
	closeText: "Cerrar",
	prevText: "&#x3C;Ant",
	nextText: "Sig&#x3E;",
	currentText: "Hoy",
	monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio",
	"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
	monthNamesShort: [ "Ene","Feb","Mar","Abr","May","Jun",
	"Jul","Ago","Sep","Oct","Nov","Dic" ],
	dayNames: [ "Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado" ],
	dayNamesShort: [ "Dom","Lun","Mar","Mié","Jue","Vie","Sáb" ],
	dayNamesMin: [ "Do","Lu","Ma","Mi","Ju","Vi","Sá" ],
	weekHeader: "Sm",
	dateFormat: "yy-mm-dd",
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.es );

return datepicker.regional.es;

} ) );
