$(window).bind('scroll', function() {//Top header action
	if ($(window).scrollTop() > 91) {
		 $('.main_head').addClass('fixed');
	}
	else {
		 $('.main_head').removeClass('fixed');
	}
});

$(".username span").click(function () {// Show/hide user sub menu
	$(this).parent().next(".profile_items").toggle();
})

$(".custom_select").dropkick({
  mobile: true
});

$(".close").click(function () {
	$(this).parent(".warning").slideUp();
	$('.popup, .overlay').fadeOut(300);
});

/*-- Popup --*/
$('.trigger').click(function () {
	event.preventDefault();
	$('div#' + $(this).data('divId')).fadeIn(200)
	// $(this).attr("href").fadeIn(200);
	// console.log($(this).attr("href"))
	$('.overlay').fadeIn(300);
	// $('.geo_popup').fadeIn(300);
});

$('.overlay').click(function(){
	$('.popup, .overlay').fadeOut(300);
});
/*-- End of Popup --*/

$(".atable").tooltip({ //jQueryUI tooltip
  position: { my: "left bottom-12", at: "right-30 center" }
});


$('.geo_list label input[type="checkbox"]').bind('change', function () {// Show/hide nested uls on checking checkbox with geo location + toggle class for styling
  if($(this).is(':checked')) {
    $(this).parent("label").addClass('opened').parent("li").children("ul").show();
  } else {
    $(this).parent("label").removeClass('opened').parent("li").children("ul").hide();
  }
});


$('.atable input[type="checkbox"]').bind('change', function () {// Hilight table row when checkbox is selected
  if($(this).is(':checked')) {
    $(this).parents("tr").addClass('selected_tr');
  } else {
    $(this).parents("tr").removeClass('selected_tr');
  }
});

$( ".datepicker" ).datepicker($.datepicker.regional[ "ru" ]);//jQueryUI Datepicker

$(".check_all").click(function(){//Check all checkboxes in filter form 
	$('.bordered_form input[type="checkbox"]').prop( "checked", true );
});
$(".uncheck_all").click(function(){//Uncheck all checkboxes in filter form 
	$('.bordered_form input[type="checkbox"]').prop( "checked", false );
});

$('.payment_method input[type="radio"]').each(function(){
	if ($(this).is(":checked")) {
		$(this).parents(".pm_head").addClass("hilight");
	};
});

$(".fixed_alert").delay(5000).slideUp();//Grenn alert bar will disappear after 5s from page load

/* Timetable actions */
$(".hour").click(function(){
	$(this).toggleClass("busy");
});
$("#check_workingdays").click(function(){
	$(".workingdays .hour").toggleClass("busy");
});
$("#check_weekend").click(function(){
	$(".weekend .hour").toggleClass("busy");
});
$("#check_all").click(function(){
	$(".week .hour").toggleClass("busy");
});
$("#check_workhours").click(function(){
	$(".day_hours .hour, .evening_hours .hour").toggleClass("busy");
});
$("#check_afterwork").click(function(){
	$(".morning_hours .hour, .night_hours .hour").toggleClass("busy");
});
$("#check_allhours").click(function(){
	$(".week .hour").toggleClass("busy");
});
/* Timetable actions end */