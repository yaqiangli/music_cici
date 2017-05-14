package com.cici.music.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cici.music.pojo.Singer;
import com.cici.music.pojo.Song;
import com.cici.music.pojo.Album;
import com.cici.music.pojo.User;
import com.cici.music.service.PlayMusicService;

@Controller
public class playMusicController {
	@Autowired
	PlayMusicService playMusicService;
	
	@RequestMapping("playMusic")
	public String toIndex(HttpServletRequest request,Model model){
		int songId=Integer.parseInt(request.getParameter("id"));
		Song song=playMusicService.getSongForId(songId);
		if(song!=null)
		{
			request.setAttribute("song", song);
			return "playMusic";
		}else{	
			return "404";
		}
		
	}
	
	@RequestMapping("singer")
	public String toSinger(HttpServletRequest request,String sid){
		if(StringUtils.isEmpty(sid)){
			return "redirect:/index.do";
		}
		Singer singer=playMusicService.getSingerForId(sid);
		if(singer==null){
			return "redirect:/index.do";
		}
		request.setAttribute("singer", singer);
		return "singer";
	}
	
	
	@ResponseBody
	@RequestMapping("singerdata")
	public String singerdata(HttpServletRequest request){
		
		return playMusicService.singerdata(request);
	}
	
	@ResponseBody
	@RequestMapping("collect")
	public String collect(HttpServletRequest request){

		return playMusicService.collect(request);
	}
	
	@ResponseBody
	@RequestMapping("iscollect")
	public String iscollect(HttpServletRequest request){
		
		return playMusicService.iscollect(request);
	}

}
