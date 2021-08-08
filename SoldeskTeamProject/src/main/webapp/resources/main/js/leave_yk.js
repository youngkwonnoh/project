$(function(){
	$("#le_cancel").click(function(){
		alert("회원탈퇴를 취소합니다.");
		location.href="/loginMypage";
	});
	
	var csrfHeaderName = "${_csrf.headerName}";
	var csrfTokenValue = "${_csrf.token}";

	$("#leave").click(function(){
		if($("#u_password").val()==""){
			alert("비밀번호를 입력하세요");
			$("#u_password").focus();
			return false;
		}
		$.ajax({
			url: "/pwdCheck",
			type: "POST",
			dataType: "json",
			data:$("#formleave").serialize(),
			beforeSend:function(xhr){
				   xhr.setRequestHeader(csrfHeaderName,csrfTokenValue);
			},
			success: function(data){
				/* alert(data); */
				if(data == 0){
					alert("비밀번호를 확인하세요");
					return false;
				} else{
					if(confirm("회원탈퇴하시겠습니까?")){
						$("#formleave").submit();
						alert("탈퇴되었습니다.");
					}
				}
			}
		});
	});
	
	$("#leaveCo").click(function(){
		if($("#u_userid_A").val()==""){
			alert("아이디를 확인하세요");
			return false;
		}
		var u_userid = $("#u_userid_A").attr('value');
		$.ajax({
			url: "/idCheck",
			type: "POST",
			dataType: "json",
			data:{
				u_userid : u_userid
			},
			beforeSend:function(xhr){
				   xhr.setRequestHeader(csrfHeaderName,csrfTokenValue);
			},
			success: function(data){
				if(data == 0){
					alert("오류 발생");
					return false;
				} else{
					if(confirm("회원을 강제로 삭제하시겠습니까?")){
						$('input[name=u_userid]').attr('value', u_userid);
						$("#formleave").attr("action", "leaveCo").submit();
						alert("탈퇴되었습니다.");
						
					}
				}
			}
		});
	});
})