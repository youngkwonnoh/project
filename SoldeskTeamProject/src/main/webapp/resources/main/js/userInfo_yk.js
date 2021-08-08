$(function(){
		
		var csrfHeaderName = "${_csrf.headerName}";
		var csrfTokenValue = "${_csrf.token}";
		
		$("#mo_cancel").click(function(){
			alert("정보 수정을 취소합니다.");
			location.href="/loginMypage";
		});
		
	 	$("#mo_leaveCo").click(function(){
	 		$("#adminModify").submit();
		});
	 	
	 	$("#mo_auth_update").click(function(event){
	 		var u_auth = $("#u_auth").val();
	 		var select = $("select[name='u_auth_select']").val();
	 		if(u_auth==select){
	 			alert("현재 등급입니다.");
	 			return false;
	 		}
	 		
	 		$("input[id='u_auth']").attr('value', select);
	 		
			$.ajax({
				url: "/authCheck",
				type: "POST",
				dataType: "json",
				data:$("#adminModify").serialize(),
				beforeSend:function(xhr){
					   xhr.setRequestHeader(csrfHeaderName,csrfTokenValue);
				},
				success: function(data){
					if(data){
						if(confirm("권한을 변경합니다.")){
					 		$("#adminModify").attr("action", "/authUpdate").submit();
					 		alert("변경되었습니다.");
						} else{
							alert("에러 발생");
							return false;
						}
					}
				}
			});

	 	});
 	 		
})