package com.apirests2.ClassTasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apirests2.ClassTasks.models.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {

}
