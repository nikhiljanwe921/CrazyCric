package com.cricket.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cricket.api.model.Player;
import com.cricket.api.service.PlayerService;

@RestController
@CrossOrigin("*")
public class HomeController {
	
	@Autowired
	PlayerService ps;
	
	@GetMapping("/players")
	public List<Player> getPlayers(){
		
		return ps.getPlayers();
	}
	
	@GetMapping("/players/{pID}")
	public Optional<Player> getPlayer(@PathVariable int pID) {
		
		return ps.getPlayer(pID);
	}
	
	@PostMapping("/players")
	public Player addPlayer(@RequestBody Player player) {
		
		return ps.addPlayer(player);
	}
	
	@PutMapping("/players/{pID}")
	public void updatePlayer(@RequestBody Player player,@PathVariable("pID") int pID) {
		ps.updatePlayer(player, pID);
	}
	
	@DeleteMapping("/player/{pID}")
	String deletePlayer(@PathVariable int pID) {
		ps.deletePlayer(pID);
		return "Player "+pID+"deleted successfully.";
	}
	
}
