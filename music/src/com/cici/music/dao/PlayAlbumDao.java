package com.cici.music.dao;

import java.util.List;

import com.cici.music.pojo.Album;
import com.cici.music.pojo.Song;

public interface PlayAlbumDao {

	public Album getForId(int albumId);

	public List<Song> getMusicList(int parseInt);

}