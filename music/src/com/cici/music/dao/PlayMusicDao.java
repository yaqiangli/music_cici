package com.cici.music.dao;

import java.util.List;
import java.util.Map;

import com.cici.music.pojo.Album;
import com.cici.music.pojo.Collect;
import com.cici.music.pojo.Singer;
import com.cici.music.pojo.Song;

public interface PlayMusicDao {

	public Song getForId(int songId);

	public int insertConllectSong(Collect con);

	public int insertConllectAlubm(Collect con);
	
	public Collect queryCollectForId(Collect con);
	public List<Collect> queryCollectAll(Collect con);

	public Singer getSingerForId(String sid);

	public List<Album> getAlbumForSinger(Map<String, Object> map);
	public List<Song> getSongForSinger(Map<String, Object> map);

}