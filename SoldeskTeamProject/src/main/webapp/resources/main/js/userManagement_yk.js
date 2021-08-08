$(function(){
	var csrfHeaderName = "${_csrf.headerName}";
	var csrfTokenValue = "${_csrf.token}";
	
	$(".userInfo").click(function(){
		var u_userid = $(this).attr('value');
		alert(u_userid);
 		$.ajax({
			url: "/userCheck",
			type: "POST",
			dataType: "json",
			data: {
				u_userid : u_userid
			},
			beforeSend:function(xhr){
				   xhr.setRequestHeader(csrfHeaderName,csrfTokenValue);
			},
			success: function(data){
				if(data == 0){
					alert("조회 실패");
					return false;
				} else{
					alert("조회 성공");
					$('input[name=u_userid]').attr('value', u_userid);
					$("#userManage").submit();
				}
			}
		});
	});
			
})