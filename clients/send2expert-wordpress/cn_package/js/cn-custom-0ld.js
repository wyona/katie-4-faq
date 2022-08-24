(function( $ ) {
	'use strict';
	$( document ).ready(function() {
		$('.cn_close').click(function() {
			$(".cn_model").hide();
		});

		$('.open_cn_model').click(function() {
			$('.mylod').show();
				var open_cn_model_id = $(this).attr('data-target');
				$(open_cn_model_id).show();
			setTimeout(function() {
				$('.mylod').hide();
			}, 1000);
		});
	})
})( jQuery );

function showmsg(type,title,text,Button=false,timer=1600){
	swal({
		type: 'success',
		title: 'Added successfully',
		text: '',
		showConfirmButton: false,
		timer: 1600
	});
}

function addRecord(){
	jQuery('.mylod').show();
	jQuery.post(cn_plugin_vars.ajaxurl,{
		'action': 'demo_ajax',
		'param': 'add_lead_information',
	}, function(response){
		jQuery('#cn_model_body').html(response)
		jQuery(".cn_model").show();
		jQuery('.mylod').hide();
	});

}

function editRecord(id){
	jQuery(".cn_checkbox").prop({'checked':''});
	jQuery("#cn"+id).prop({'checked':'checked'});
	editAllRecord();
}
function editAllRecord(){
  	var Demo_ids = jQuery("input[name='post']:checked").map(function() {
		 return this.value;
	}).get().join(',');
	if (Demo_ids=='') {
		swal({
		type: 'warning',
		title: 'Please select at least one record',
		text: '',
		showConfirmButton: false,
		timer: 1600
	});
	}else{
		jQuery('.mylod').show();
		jQuery.post(plugin_vars.ajaxurl,{
			'action': 'demo_ajax',
			'param': 'edit_all_Demo',
			'Demo_ids': Demo_ids
		}, function(response){
			jQuery('#cn_model_body').html(response)
			jQuery(".cn_model").show();
			jQuery('.mylod').hide();
		});
	}
}
function deleteRecord(id){
	jQuery(".cn_checkbox").prop({'checked':''});
	jQuery("#cn"+id).prop({'checked':'checked'});
	deleteAllRecord();
}
function deleteAllRecord(){
  	var Demo_ids = jQuery("input[name='post']:checked").map(function() {
		 return this.value;
	}).get().join(',');
	if (Demo_ids=='') {
		swal({
			type: 'warning',
			title: 'Please select at least one record',
			text: '',
			showConfirmButton: false,
			timer: 1600
		});
	}else{
		jQuery('.mylod').show();
		jQuery.post(plugin_vars.ajaxurl,{
			'action': 'demo_ajax',
			'param': 'delete_all_Demo',
			'Demo_ids': Demo_ids
		}, function(response){
			jQuery('.mylod').hide();
			var Demo_id=Demo_ids.split(',');
				for(var i=0;i<Demo_id.length;i++){
				        jQuery('#cn_Demo'+Demo_id[i]).remove();
				}


			var response =JSON.parse(response);
			swal({
				type: 'success',
				title: response.msg,
				text: '',
				showConfirmButton: false,
				timer: 1600
			});
			
		});
	}
}
