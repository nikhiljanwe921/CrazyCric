package com.cricket.api.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cricket.api.model.MatchScore;
import com.cricket.api.service.MatchScoreService;

@RestController
@CrossOrigin("*")
public class MatchScoreController {

	@Autowired
	MatchScoreService mss;
	
	@PutMapping("/livematch")
	public String updateMatchScore(@RequestBody MatchScore ms) {
		
		mss.updateMatchScore(ms);
		
		return "";	
	}
	
	@GetMapping("/livescore/{inning}")
	public Optional<MatchScore> getMatchScore(@PathVariable int inning) {
		
		return mss.getMatchDetails(inning);
	}
	
	@GetMapping("/maxscore")
	public int getMaxScore() {
		return mss.getMaxScore();
	}
	
	@GetMapping("/maxballs")
	public int getMaxBalls() {
		return mss.getMaxBalls();
	}
	
	@GetMapping("/maxovers")
	public int getMaxOvers() {
		return mss.getMaxOvers();
	}
	
	@GetMapping("/maxwickets")
	public int getMaxWickets() {
		return mss.getMaxWickets();
	}
	
	@GetMapping("/commentry")
	public String getCommentry() {
		return mss.getCommentry();
	}
	
}