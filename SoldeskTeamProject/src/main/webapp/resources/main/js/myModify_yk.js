$(function(){
	$("#mo_cancel").click(function(){
		alert("정보 수정을 취소합니다.");
		location.href="/loginMypage";
	});
	
 	$("#mo_leave").click(function(){
		location.href="/leave";
	});
 	
 	$("#mo_update").click(function(event){
 		var u_password = $("#u_password").val();
 		var new_password = $("#new_password").val();
 		var confirm_password = $("#confirm_password").val();
 		var u_email = $("#u_email").val();
 		var u_phone = $("#u_phone").val();
 		var u_address = $("#u_address").val();
 		
 		var regPw = /[a-zA-Z0-9!@#$%^&*]{8,12}$/;
 		var regEmail = /[a-z0-9]{2,}@[a-z0-9]{2,}\.[a-z0-9]{2,}/i;
 		var regPhone = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
 		var regAdd = /[가-힝]{2,}$/;
 		
		if(u_password == '') {
 			$('i[id="u_password"]').html("비밀번호를 입력하세요");
 			$("#u_password").focus();
 			event.preventDefault();
 		} else if(!regPw.test(u_password)) {
 			$('i[id="u_password"]').html("비밀번호를 형식을 확인하세요");
 			$("#u_password").focus();
 			event.preventDefault();
 		} else if(new_password == '') {
 			$('i[id="new_password"]').html("비밀번호를 입력하세요");
 			$("#new_password").focus();
 			event.preventDefault();
 		} else if(!regPw.test(new_password)) {
 			$('i[id="new_password"]').html("비밀번호를 형식을 확인하세요");
 			$("#new_password").focus();
 			event.preventDefault();
 		} else if(confirm_password == '') {
 			$('i[id="confirm_password"]').html("비밀번호를 입력하세요.");
 			$("#confirm_password").focus();
 			event.preventDefault();
 		} else if(!regPw.test(confirm_password)) {
 			$('i[id="confirm_password"]').html("비밀번호를 형식을 확인하세요");
 			$("#confirm_password").focus();
 			event.preventDefault();
 		} else if(new_password != confirm_password) {
 			$('i[id="confirm_password"]').html("입력하신 비밀번호가 다릅니다");
 			$("#new_password").focus();
 			event.preventDefault(); 
 		} else if(u_email == '') {
 			$('i[id="u_email"]').html("이메일을 입력하세요");
 			$("#u_email").focus();
 			event.preventDefault();
 		} else if(!regEmail.test(u_email)) {
 			$('i[id="u_email"]').html("이메일 형식을 확인하세요");
 			$("#u_email").focus();
 			event.preventDefault();
 		} else if(u_phone == '') {
 			$('i[id="u_phone"]').html("전화번호를 입력하세요");
 			$("#u_phone").focus();
 			event.preventDefault();
 		} else if(!regPhone.test(u_phone)) {
 			$('i[id="u_phone"]').html("전화번호 형식을 확인하세요(000-0000-0000)");
 			$("#u_phone").focus();
 			event.preventDefault();
 		} else if(u_address == '') {
 			$('i[id="u_address"]').html("주소를 입력하세요");
 			$("#u_address").focus();
 			event.preventDefault();
 		} else if(!regAdd.test(u_address)) {
 			$('i[id="u_address"]').html("주소를 2자리이상 입력하세요");
 			$("#u_address").focus();
 			event.preventDefault();
 		}
		var csrfHeaderName = "${_csrf.headerName}";
		var csrfTokenValue = "${_csrf.token}";
		$.ajax({
			url: "/pwdCheck",
			type: "POST",
			dataType: "json",
			data:$("#modifyForm").serialize(),
			beforeSend:function(xhr){
				   xhr.setRequestHeader(csrfHeaderName, csrfTokenValue);
			},
			success: function(result){
				if(result== 0){
					alert("현재 비밀번호를 확인하세요");
					return false;
				} else {
					$("#modifyForm").submit();
					alert("정보 수정이 완료되었습니다..");
				}
			}
		});
 	});
})