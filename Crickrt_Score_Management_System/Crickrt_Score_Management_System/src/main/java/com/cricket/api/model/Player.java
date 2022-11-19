package com.cricket.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Player {

	@Column(name = "playerId")
	private int playerID;
	
	@Column(name = "playerName")
	private String playerName;
	
	@Column(name = "playerLastname")
	private String PlayerSurname;
	
	@Column(name = "ability")
	private String ability;
	
	@Column(name = "position")
	private String position;
	
	@Column(name = "teamName")
	private String teamName;
	
	@Column(name = "teamGround")
	private String teamGround;
	
	@Column(name = "teamSide")
	private String side;
	
	@Column(name = "fullName")
	private String playerFullname;

	public Player() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Player(int playerID, String playerName, String playerSurname, String ability, String position,
			String teamName, String teamGround, String side, String playerFullname) {
		super();
		this.playerID = playerID;
		this.playerName = playerName;
		this.PlayerSurname = playerSurname;
		this.ability = ability;
		this.position = position;
		this.teamName = teamName;
		this.teamGround = teamGround;
		this.side = side;
		this.playerFullname = playerFullname;
	}

	@Id
	public int getPlayerID() {
		return playerID;
	}

	public void setPlayerID(int playerID) {
		this.playerID = playerID;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getPlayerSurname() {
		return PlayerSurname;
	}

	public void setPlayerSurname(String playerSurname) {
		this.PlayerSurname = playerSurname;
	}

	public String getAbility() {
		return ability;
	}

	public void setAbility(String ability) {
		this.ability = ability;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getTeamGround() {
		return teamGround;
	}

	public void setTeamGround(String teamGround) {
		this.teamGround = teamGround;
	}

	public String getSide() {
		return side;
	}

	public void setSide(String side) {
		this.side = side;
	}

	public String getPlayerFullname() {
		return playerFullname;
	}

	public void setPlayerFullname(String playerFullname) {
		this.playerFullname = playerFullname;
	}

	@Override
	public String toString() {
		return "Player [playerID=" + playerID + ",\n playerName=" + playerName + ",\n PlayerSurname=" + PlayerSurname
				+ ",\n ability=" + ability + ",\n position=" + position + ",\n teamName=" + teamName + ",\n teamGround="
				+ teamGround + ",\n side=" + side + ",\n playerFullname=" + playerFullname + "]";
	}

}
