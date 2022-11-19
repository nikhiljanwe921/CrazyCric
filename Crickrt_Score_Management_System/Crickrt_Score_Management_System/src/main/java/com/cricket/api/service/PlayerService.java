package com.cricket.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cricket.api.model.Player;
import com.cricket.api.repository.PlayerRepository;

@Service
public class PlayerService {

	@Autowired
	PlayerRepository pr;

	public List<Player> getPlayers() {

		 List<Player> player = (List<Player>) pr.findAll();
		 
		 
		return player;
	}

	public Optional<Player> getPlayer(int pID) {

		Optional<Player> player = null;
		player = pr.findById(pID);
		return player;
	}

	public Player addPlayer(Player player) {

		Player p = pr.save(player);
		return p;
	}
	public void updatePlayer(Player player, int pID) {

		player.setPlayerID(pID);
		pr.save(player);
	}

	public void deletePlayer(int pID) {

		pr.deleteById(pID);
	}

}
