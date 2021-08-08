$(function() {
	/* login.jsp */
	/* 회원가입 버튼 누르면 페이지 이동 */
	$("#regist").click(function(){
		$("#formId").attr("action", "agree");
	});
	$("#login").click(function(){
		if($("#u_userid").val() == ""){
			alert("아이디를 입력하세요");
			return false;
		} else if($("#u_password").val() == ""){
			alert("비밀번호를 입력하세요");
			return false;
		}
	});

})