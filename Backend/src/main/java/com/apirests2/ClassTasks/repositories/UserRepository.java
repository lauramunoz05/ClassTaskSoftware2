package com.apirests2.ClassTasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apirests2.ClassTasks.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
