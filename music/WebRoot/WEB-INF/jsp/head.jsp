<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import="java.util.*,com.cici.music.pojo.*"%>
   <%
   boolean islogin=false;
   User user=(User)session.getAttribute("user");
   if(user!=null){
   	islogin=true;
   }
   %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script type="text/javascript" src="js/search.js"></script>
<body >
<div class="div-1"  style="width:956px; margin:auto;">

<div style="background:url('images/banner.jpg') no-repeat;height:200px">
</div>
<div id="top">
	
	<div id="search">
	<input  id="KeyWords" name="KeyWords" class="searchinput" />
	<input type="button"   value=" " id="searchbotton"  onclick="toSearch();"/>
	<div id="searchradio">
		<input name="type"  type="radio" value="album">
		<span>专辑</span>
		<input name="type" checked="checked"  type="radio" value="song">
		<span>歌曲</span>
		<input name="type"  type="radio" value="singer">
		<span>歌手</span>
	</div>
	<div style="display:inline-block; float:left; margin-top:7px;"> 欢迎来到cici－－音乐网</div>
	
</div>
  
  <div id="login">
 <span>欢迎来到cici－－音乐网</span>
 </div>
 <div>
  <ul id="nav">
    <li><a href="index.do">首页</a></li>
    <li><a href="/bang/">排行榜</a></li>
	<li><a href="/bang/tag13.shtml">好听的歌</a></li>
    <li><a href="gameintro.do">游戏宣传</a></li>
    <li><a href="/mlist/singerlist.shtml">歌手</a></li>
    <li><a href="/musiclist/ablumlist.shtml">专辑</a></li>
    <li><a href="/bang/fenlei.shtml">音乐分类</a></li>
	<% if(islogin){ %>
	<li><a  target="_self" href="userCenter.do">个人中心</a></li>
	欢迎您！<%=user.getUname() %> <%= "男".equals(user.getSex())?"先生":"女士" %>
	<%} else{ %>
	 <li><a  target="_self" href="login.do">登陆</a></li>
    <li><a target="_self" href="register.do">注册</a></li>
<%} %>
  </ul>
</div>
</div></div>
</body>
</html>