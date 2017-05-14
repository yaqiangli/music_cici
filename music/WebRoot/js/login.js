
function chooseHead(head){
	$.ajax({
		  url:'userHeadupload.do',
		    type:'POST', //GET
		    async:true,    //��false,�Ƿ��첽
		    data:{
		       type:'settting',
		       head: head
		    },
		    timeout:5000,    //��ʱʱ��
		    dataType:'json',    //���ص���ݸ�ʽ��json/xml/html/script/jsonp/text
		   
		    success:function(data){
		    	debugger;
		    	data=JSON.parse(data);
		    	if(data.stats=='error'){
		    		alert(data.error);
		    		return;
		    	}
		    	if(data.stats=='success'){
		    		$(".headimg").attr("src",head);
		    		alert(data.success);
		    	}
		    	
		      },
		    error:function(xhr,textStatus){
		    },
		   
	});
}
function userlogin(){
	debugger;
	var username = $(".username").val();
	var password = $(".password").val();
	var yanzhengma=$(".yanzhengma").val();
	if(!yanzhengma.trim()){
		alert("验证码不能为空");
		return;
	}
	if(!username.trim()){
		alert("账号不能为空");
		return;
	}
	if(!password.trim){
		alert("密码不能为空");
		return;
	}
	$.ajax({
		  url:'userlogin.do',
		    type:'POST', //GET
		    async:true,    //��false,�Ƿ��첽
		    data:{
		       username:username,
		       password:password,
		       yanzhengma:yanzhengma
	
		    },
		    timeout:5000,    //��ʱʱ��
		    dataType:'json',    //���ص���ݸ�ʽ��json/xml/html/script/jsonp/text
		   
		    success:function(data,textStatus,jqXHR){
		    	debugger;
		    	data=JSON.parse(data);
		    	if(data.stats=='error'){
		    		alert(data.error);
		    		return;
		    	}
		    	if(data.stats=='success'){
		    		$(".logindiv").html("");
		    		$(".logindiv").html("正在跳转，请稍后...");
		    		window.location.href="index.do";
		    	}
		    	
		      },
		    error:function(xhr,textStatus){
		    },
		   
	});
}

function userregister(){
	var username = $(".username").val();
	var uname = $(".uname").val();
	var password = $(".password").val();
	var yanzhengma = $(".yanzhengma").val();
	var email = $(".email").val();
	var password1=$(".password1").val();
	var sex = $('#wrap input[name="radio"]:checked ').val();
	if(!email.trim()){
		alert("邮箱不能为空");
		return;
	}
	if(!username.trim()){
		alert("账号不能为空");
		return;
	}
	if(!uname.trim()){
		alert("用户名不能为空");
		return;
	}
	if(!password.trim){
		alert("密码不能为空");
		return;
	}
	if(!password1.trim()){
		alert("确认密码不能为空");
		return;
	}
	if(!yanzhengma.trim()){
		alert("验证码不能为空");
		return;
	}
	if(password1!=password){
		alert("两次密码输入不一致");
		return;
	}
	
	$.ajax({
		  url:'userregister.do',
		    type:'POST', //GET
		    async:true,    //��false,�Ƿ��첽
		    data:{
		       username:username,
		       password:password,
		       yanzhengma:yanzhengma,
		       email:email,
		       sex:sex,
		       uname:uname
		    },
		    timeout:5000,    //��ʱʱ��
		    dataType:'json',    //���ص���ݸ�ʽ��json/xml/html/script/jsonp/text
		   
		    success:function(data,textStatus,jqXHR){
		    	debugger;
		    	data=JSON.parse(data);
		    	if(data.stats=='error'){
		    		alert(data.error);
		    		return;
		    	}
		    	if(data.stats=='success'){
		    		$(".logindiv").html("");
		    		$(".logindiv").html("注册成功，正在跳转登录页面，请稍后...");
		    		window.location.href="login.do";
		    	}
		    	
		      },
		    error:function(xhr,textStatus){
		    },
		   
	});
	 
}