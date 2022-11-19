package com.cricket.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.beans.factory.annotation.Value;

@Entity
public class MatchScore {
	@Id
	@GeneratedValue
	@Column(name = "Innings")
	private int inning;
	
	@Column(name = "score")
	@ColumnDefault("0")
	private int score;
	
	@Column(name = "wickets")
	@ColumnDefault("0")
	private int wickets;
	
	
	@Column(name = "balls")
	@ColumnDefault("0")
	private int balls;
	
	@Column(name = "overs")
	@ColumnDefault("0")
	private int overs;
	
	@Column(name = "totalovers")
	@ColumnDefault("0")
	private int totalovers;
	
	@Column(name = "runrate")
	@ColumnDefault("0")
	private double runrate;
	
	@Column(name = "reqrunrate")
	@ColumnDefault("0")
	private double reqrunrate;
	
	@Column(name = "currentbatter")
	@Value("${some.key:my default value}")
	private String currentbatter;
	
	@Column(name = "currentbowler")
	@Value("${some.key:my default value}")
	private String currentbowler;
	
	@Column(name = "commentry")
	@Value("updating")
	private String commentry;

	public MatchScore() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MatchScore(int inning, int score, int wickets, int balls, int overs, int totalovers, double runrate,
			double reqrunrate, String currentbatter, String currentbowler, String commentry) {
		super();
		this.inning = inning;
		this.score = score;
		this.wickets = wickets;
		this.balls = balls;
		this.overs = overs;
		this.totalovers = totalovers;
		this.runrate = runrate;
		this.reqrunrate = reqrunrate;
		this.currentbatter = currentbatter;
		this.currentbowler = currentbowler;
		this.commentry = commentry;
	}

	public int getInning() {
		return inning;
	}

	public void setInning(int inning) {
		this.inning = inning;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public int getWickets() {
		return wickets;
	}

	public void setWickets(int wickets) {
		this.wickets = wickets;
	}

	public int getBalls() {
		return balls;
	}

	public void setBalls(int balls) {
		this.balls = balls;
	}

	public int getOvers() {
		return overs;
	}

	public void setOvers(int overs) {
		this.overs = overs;
	}

	public int getTotalovers() {
		return totalovers;
	}

	public void setTotalovers(int totalovers) {
		this.totalovers = totalovers;
	}

	public double getRunrate() {
		return runrate;
	}

	public void setRunrate(double runrate) {
		this.runrate = runrate;
	}

	public double getReqrunrate() {
		return reqrunrate;
	}

	public void setReqrunrate(double reqrunrate) {
		this.reqrunrate = reqrunrate;
	}

	public String getCurrentbatter() {
		return currentbatter;
	}

	public void setCurrentbatter(String currentbatter) {
		this.currentbatter = currentbatter;
	}

	public String getCurrentbowler() {
		return currentbowler;
	}

	public void setCurrentbowler(String currentbowler) {
		this.currentbowler = currentbowler;
	}

	public String getCommentry() {
		return commentry;
	}

	public void setCommentry(String commentry) {
		this.commentry = commentry;
	}

	@Override
	public String toString() {
		return "MatchScore [inning=" + inning + ", score=" + score + ", wickets=" + wickets + ", balls=" + balls
				+ ", overs=" + overs + ", totalovers=" + totalovers + ", runrate=" + runrate + ", reqrunrate="
				+ reqrunrate + ", currentbatter=" + currentbatter + ", currentbowler=" + currentbowler + ", commentry="
				+ commentry + "]";
	}
	
	
	
	
	
	
}
