package com.cricket.api.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cricket.api.model.MatchScore;

public interface MatchScoreRepository extends JpaRepository<MatchScore, Integer> {
	
	@Modifying
	@Query("update MatchScore m  set m.score =?2 , m.wickets =?3 ,m.balls =?4 ,m.overs =?5, m.commentry =?6 where m.inning =?1")
	@Transactional
	Integer updateScore( int i, int s,int w, int b, int o, String c);

	Optional<MatchScore> findByInning(int inning);
	
	@Query(value = "SELECT max(score) FROM MatchScore")
	String getMaxScore();
	
	@Query(value = "SELECT max(wickets) FROM MatchScore")
	String getMaxWicket();
	
	@Query(value = "SELECT max(balls) FROM MatchScore")
	String getMaxBalls();
	
	@Query(value = "SELECT max(overs) FROM MatchScore")
	String getMaxOvers();
	
	@Query(value = "SELECT commentry FROM MatchScore")
	String getCommentry();
	
}