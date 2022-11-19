package com.cricket.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cricket.api.model.Player;

public interface PlayerRepository extends JpaRepository<Player, Integer> {

}
