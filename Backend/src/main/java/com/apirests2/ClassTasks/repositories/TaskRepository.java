package com.apirests2.ClassTasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apirests2.ClassTasks.models.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
