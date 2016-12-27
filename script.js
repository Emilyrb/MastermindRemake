$(document).ready(function () {
	var colours = ['white','black','red','orange','yellow','green','blue','purple']
	var colourCount1 = 0;
	var colourCount2 = 0;
	var colourCount3 = 0;
	var colourCount4 = 0;
	var usedLives = 1;
	var randomCode = [colours[Math.floor(Math.random() * colours.length)],colours[Math.floor(Math.random() * colours.length)],colours[Math.floor(Math.random() * colours.length)],colours[Math.floor(Math.random() * colours.length)]];
	//alert(randomCode);
	
	var row='<div class="row"><div class="guess1"></div><div class="guess2"></div><div class="guess3"></div><div class="guess4"></div><div class="ans1"></div><div class="ans2"></div><div class="ans3"></div><div class="ans4"></div><input type="submit" id="check"></div>';
	$('body').append(row.repeat(10));
	
	function restart(){
		next();
		usedLives = 1;
		randomCode = [colours[Math.floor(Math.random() * colours.length)],colours[Math.floor(Math.random() * colours.length)],colours[Math.floor(Math.random() * colours.length)],colours[Math.floor(Math.random() * colours.length)]];
		$('body').html(row.repeat(10));
	}
	function next(){
		colourCount1 = 0;
		colourCount2 = 0;
		colourCount3 = 0;
		colourCount4 = 0;
	}
	$(document).on('mouseenter','#check',function(){
		if ($(this).parent().is(':nth-child('+usedLives+')')){
			//
		} else{
			$(this).css({'background-color':'transparent','color':'lightgreen','outline':'0'});
		}
	});
	$(document).on('click','.guess1',function(){
		if ($(this).parent().is(':nth-child('+usedLives+')')){
			//
		} else{
			return false;
		}
		colourCount1++;
		if (colourCount1 > colours.length - 1){
			colourCount1 = 0;
		}
		$(this).css({'background':colours[colourCount1]});
	});
	$(document).on('click','.guess2',function(){
		if ($(this).parent().is(':nth-child('+usedLives+')')){
			//
		} else{
			return false;
		}
		colourCount2++;
		if (colourCount2 > colours.length - 1){
			colourCount2 = 0;
		}
		$(this).css({'background':colours[colourCount2]});
	});
	$(document).on('click','.guess3',function(){
		if ($(this).parent().is(':nth-child('+usedLives+')')){
			//
		} else{
			return false;
		}
		colourCount3++;
		if (colourCount3 > colours.length - 1){
			colourCount3 = 0;
		}
		$(this).css({'background':colours[colourCount3]});
	});
	$(document).on('click','.guess4',function(){
		if ($(this).parent().is(':nth-child('+usedLives+')')){
			//
		} else{
			return false;
		}
		colourCount4++;
		if (colourCount4 > colours.length - 1){
			colourCount4 = 0;
		}
		$(this).css({'background':colours[colourCount4]});
	});
	$(document).on('click','#check',function(){
		if ($(this).parent().is(':nth-child('+usedLives+')')){
			//
		} else{
			return false;
		}

		$('.ans1:eq('+(usedLives - 1)+')').css({'background':'black'});
		$('.ans2:eq('+(usedLives - 1)+')').css({'background':'black'});
		$('.ans3:eq('+(usedLives - 1)+')').css({'background':'black'});
		$('.ans4:eq('+(usedLives - 1)+')').css({'background':'black'});
	
		//check if there is the colour in the code
		for (var i=0;i<randomCode.length;i++){
			if (colours[colourCount1] == randomCode[i]){
				$('.ans1:eq('+(usedLives - 1)+')').css({'background':'orange'});
			}
			if (colours[colourCount2] == randomCode[i]){
				$('.ans2:eq('+(usedLives - 1)+')').css({'background':'orange'});
			}
			if (colours[colourCount3] == randomCode[i]){
				$('.ans3:eq('+(usedLives - 1)+')').css({'background':'orange'});
			}
			if (colours[colourCount4] == randomCode[i]){
				$('.ans4:eq('+(usedLives - 1)+')').css({'background':'orange'});
			}
		}
		
		//check if colour in correct place
		if (randomCode[0] == colours[colourCount1]){
			$('.ans1:eq('+(usedLives - 1)+')').css({'background':'green'});
		}
		if (randomCode[1] == colours[colourCount2]){
			$('.ans2:eq('+(usedLives - 1)+')').css({'background':'green'});
		} 
		if (randomCode[2] == colours[colourCount3]){
			$('.ans3:eq('+(usedLives - 1)+')').css({'background':'green'});
		} 
		if (randomCode[3] == colours[colourCount4]){
			$('.ans4:eq('+(usedLives - 1)+')').css({'background':'green'});
		} 
		
		//check if player won game
		if (randomCode[0] == colours[colourCount1] && randomCode[1] == colours[colourCount2] && randomCode[2] == colours[colourCount3] &&randomCode[3] == colours[colourCount4]){
			if (usedLives == 1){
				word='try'
			} else{
				word='tries'
			}
			$('body').append('<div id="end">You won in '+usedLives+' ' + word +'!<br/>Play Again?<div id="yes">Yes</div><div id="no">No</div></div>')
		} 
		//check if all lives used
		if(usedLives == 10 && (randomCode[0] != colours[colourCount1] && randomCode[1] != colours[colourCount2] && randomCode[2] != colours[colourCount3] &&randomCode[3] != colours[colourCount4])){
			$('body').append('<div id="end">You lost :\(<br/>Play Again?<div id="yes">Yes</div><div id="no">No</div></div>')
		}
		usedLives++;
		next();
	});
	$(document).on('click','#yes',function(){
		restart();
	});
	$(document).on('click','#no',function(){
		window.close();
	});
});