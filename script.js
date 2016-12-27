$(document).ready(function () {
	var colours = ['white','black','red','orange','yellow','green','blue','purple']
	var colourCount1 = 0;
	var colourCount2 = 0;
	var colourCount3 = 0;
	var colourCount4 = 0;
	var usedLives = 1;
	var randomCode = [colours[Math.floor(Math.random() * colours.length)],colours[Math.floor(Math.random() * colours.length)],colours[Math.floor(Math.random() * colours.length)],colours[Math.floor(Math.random() * colours.length)]];
	alert(randomCode);
	
	var before=0;
	var after=9;
	var inactive='<div class="inactiveRow"><div id="inactiveGuess1"></div><div id="inactiveGuess2"></div><div id="inactiveGuess3"></div><div id="inactiveGuess4"></div><div id="inactiveAns1"></div><div id="inactiveAns2"></div><div id="inactiveAns3"></div><div id="inactiveAns4"></div></div>';
	var row='<div class="row"><div class="guess1"></div><div class="guess2"></div><div class="guess3"></div><div class="guess4"></div><div class="ans1"></div><div class="ans2"></div><div class="ans3"></div><div class="ans4"></div><input type="submit" id="check"></div>';
	$('body').append(row.repeat(10) + randomCode);
	
	function next(){
		colourCount1 = 0;
		colourCount2 = 0;
		colourCount3 = 0;
		colourCount4 = 0;
	}
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
		$(this).css({'background-color':colours[colourCount1]});
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
		$(this).css({'background-color':colours[colourCount2]});
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
		$(this).css({'background-color':colours[colourCount3]});
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
		$(this).css({'background-color':colours[colourCount4]});
	});
	$(document).on('click','#check',function(){
		if ($(this).parent().is(':nth-child('+usedLives+')')){
			//
		} else{
			return false;
		}
		$('.ans1:eq('+(usedLives - 1)+')').css({'background-color':'black'});
		$('.ans2:eq('+(usedLives - 1)+')').css({'background-color':'black'});
		$('.ans3:eq('+(usedLives - 1)+')').css({'background-color':'black'});
		$('.ans4:eq('+(usedLives - 1)+')').css({'background-color':'black'});
	
		for (var i=0;i<randomCode.length;i++){
			if (colours[colourCount1] == randomCode[i]){
				$('.ans1:eq('+(usedLives - 1)+')').css({'background-color':'orange'});
			}
			if (colours[colourCount2] == randomCode[i]){
				$('.ans2:eq('+(usedLives - 1)+')').css({'background-color':'orange'});
			}
			if (colours[colourCount3] == randomCode[i]){
				$('.ans3:eq('+(usedLives - 1)+')').css({'background-color':'orange'});
			}
			if (colours[colourCount4] == randomCode[i]){
				$('.ans4:eq('+(usedLives - 1)+')').css({'background-color':'orange'});
			}
		}
	
		if (randomCode[0] == colours[colourCount1]){
			$('.ans1:eq('+(usedLives - 1)+')').css({'background-color':'green'});
		}
		if (randomCode[1] == colours[colourCount2]){
			$('.ans2:eq('+(usedLives - 1)+')').css({'background-color':'green'});
		} 
		if (randomCode[2] == colours[colourCount3]){
			$('.ans3:eq('+(usedLives - 1)+')').css({'background-color':'green'});
		} 
		if (randomCode[3] == colours[colourCount4]){
			$('.ans4:eq('+(usedLives - 1)+')').css({'background-color':'green'});
		} 
		usedLives++;
		next();
	});
});