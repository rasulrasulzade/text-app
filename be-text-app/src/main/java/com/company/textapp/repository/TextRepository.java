package com.company.textapp.repository;

import com.company.textapp.entity.TextEnt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TextRepository extends JpaRepository<TextEnt, Long> {
}
