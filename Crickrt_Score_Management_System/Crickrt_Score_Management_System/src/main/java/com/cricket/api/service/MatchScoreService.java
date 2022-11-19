package com.cricket.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cricket.api.model.MatchScore;
import com.cricket.api.repository.MatchScoreRepository;
@Service
public class MatchScoreService {

	@Autowired
	MatchScoreRepository msr;
	MatchScore am;

	
	public Integer updateMatchScore1(int i, int s,int w, int b, int o, String c) {
		
		
		return msr.updateScore(i, s, w, b, o, c);
	}
	
	public Optional<MatchScore> getMatchDetails(int inning) {
		Optional<MatchScore> matchScore = null;
		matchScore=msr.findByInning(inning);
		System.out.println(matchScore);
		return matchScore;
	}
	
	public int getMaxScore() {
		if(( msr.getMaxScore()) == null)  {
			return 0;
		}else {
			return Integer.parseInt(msr.getMaxScore());
		}
	}
	
	public int getMaxWickets() {
		if(( msr.getMaxWicket()) == null)  {
			return 0;
		}else {
			return Integer.parseInt(msr.getMaxWicket());
		}
	}
	
	public int getMaxBalls() {
		if(( msr.getMaxBalls()) == null)  {
			return 0;
		}else {
			return Integer.parseInt(msr.getMaxBalls());
		}
	}
	
	public int getMaxOvers() {
		if(( msr.getMaxOvers()) == null)  {
			return 0;
		}else {
			return Integer.parseInt(msr.getMaxOvers());
		}
	}
	
	public String getCommentry() {
		if(( msr.getCommentry()) == null)  {
			return "no commentry updated";
		}else {
			return (msr.getCommentry());
		}
	}
	
	public Integer updateMatchScore(MatchScore ms) {
		// TODO Auto-generated method stub
		int s = 0,b=0,w=0;
		int i=ms.getInning();
		
		if(ms.getScore() == 1) {
			System.out.println("Inside if else");
			 s =  Integer.parseInt(msr.getMaxScore()) + ms.getScore();
			 b =  Integer.parseInt(msr.getMaxBalls()) + 1;
			
		}else if(ms.getScore() == 2){
			 s =  Integer.parseInt(msr.getMaxScore()) + ms.getScore();
			 b =  Integer.parseInt(msr.getMaxBalls()) + 1;
		}else if(ms.getScore() == 3){
			 s =  Integer.parseInt(msr.getMaxScore()) + ms.getScore();
			 b =  Integer.parseInt(msr.getMaxBalls()) + 1;
		}else if(ms.getScore() == 4){
			 s =  Integer.parseInt(msr.getMaxScore()) + ms.getScore();
			 b =  Integer.parseInt(msr.getMaxBalls()) + 1;
		}else if(ms.getScore() == 6){
			s =  Integer.parseInt(msr.getMaxScore()) + ms.getScore();
			b =  Integer.parseInt(msr.getMaxBalls()) + 1;
		}else if(ms.getScore() == 0){
			 s =  Integer.parseInt(msr.getMaxScore()) + ms.getScore();
			 b =  Integer.parseInt(msr.getMaxBalls()) + 1;
		}else if( String.valueOf(ms.getScore())  == "wide"){
			 s =  Integer.parseInt(msr.getMaxScore()) + ms.getScore();
			 
		}else if( String.valueOf(ms.getScore())  == "noball"){
			 s =  Integer.parseInt(msr.getMaxScore()) + ms.getScore();
			
		}else if( String.valueOf(ms.getScore())  == "out"){
			w=  Integer.parseInt(msr.getMaxWicket()) +  1;
			 b =  Integer.parseInt(msr.getMaxBalls()) + 1;
		}
		else {
			
		}
		
		 //s =  Integer.parseInt(msr.getMaxScore()) + ms.getScore();
		// w=  Integer.parseInt(msr.getMaxWicket()) +  ms.getWickets();
		// b =ms.getBalls() + Integer.parseInt(msr.getMaxBalls());
		int o =ms.getOvers() + Integer.parseInt(msr.getMaxOvers());
		String c =ms.getCommentry();
		
		return msr.updateScore(i, s, w, b, o, c);
		
	}
	
}