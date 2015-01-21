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
$('#edit_geo').click(function () {
	$('.overlay').fadeIn(300);
	$('#pop2').fadeIn(300);
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