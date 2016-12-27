$(document).ready(function () {
	var colours = ['white','red','orange','yellow','green','blue','purple']
	var colourCount = 0;
	
	$('body').append('')
	$(document).on('click','#guess1',function(){
		colourCount++;
		if (colourCount > colours.length - 1){
			colourCount = 0;
		}
		$(this).css({'background-color':colours[colourCount]});
	});
});