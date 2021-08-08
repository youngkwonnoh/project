$(function(){
	$("#join").click(function(){
		let chk1 = $("#chk1").is(":checked");
		let chk2 = $("#chk2").is(":checked");
		
		if(chk1!=true){
			alert('이용약관에 동의해주세요');
			$("#chk1").focus();
			return false;

		} else if(chk2!=true){
			alert('개인정보 수집 및 이용에 동의해주세요');
			$("#chk2").focus();
			return false;
		}
	});
})
