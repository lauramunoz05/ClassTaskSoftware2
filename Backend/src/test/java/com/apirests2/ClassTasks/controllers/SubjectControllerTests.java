package com.apirests2.ClassTasks.controllers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.util.Collections;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.apirests2.ClassTasks.models.Subject;
import com.apirests2.ClassTasks.repositories.SubjectRepository;

@WebMvcTest(SubjectController.class)
public class SubjectControllerTests {
    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext webApplicationContext;
    @MockBean
    private SubjectRepository subjectRepository;

    @BeforeEach
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void testGetAllSubjects() throws Exception {
        when(subjectRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(get("/api/subjects"))
            .andExpect(status().isOk())
            .andExpect(content().json("[]"));
        verify(subjectRepository, times(1)).findAll();
    }

    @Test
    public void testGetSubjectById() throws Exception {
        Subject subject = new Subject();
        subject.setId(1L);
        when(subjectRepository.findById(1L)).thenReturn(Optional.of(subject));
        mockMvc.perform(get("/api/subjects/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(subjectRepository, times(1)).findById(1L);
    } 
    
    @Test
    public void testcreateSubject() throws Exception {
        Subject subject = new Subject();
        subject.setId(1L);
        when(subjectRepository.save(any(Subject.class))).thenReturn(subject);
        mockMvc.perform(post("/api/subjects")
            .contentType(MediaType.APPLICATION_JSON_UTF8)
            .content("{\"id\":null,\"name\": null,\"description\": null,\"userId\":null }"))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1));
        verify(subjectRepository, times(1)).save(any(Subject.class));
    }

    @Test
    public void testUpdateSubject() throws Exception {
        Subject subject = new Subject();
        subject.setId(1L);
        when(subjectRepository.findById(1L)).thenReturn(Optional.of(subject));
        when(subjectRepository.save(any(Subject.class))).thenReturn(subject);
        mockMvc.perform(put("/api/subjects/1")
            .contentType(MediaType.APPLICATION_JSON_UTF8)
            .content("{\"id\":null,\"name\": null,\"description\": null,\"userId\":null }"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(subjectRepository, times(1)).save(any(Subject.class));
    }

    @Test
    public void testDeleteSubject() throws Exception {
        doNothing().when(subjectRepository).deleteById(1L);
        mockMvc.perform(delete("/api/subjects/1"))
            .andExpect(status().isNoContent()); 
            verify(subjectRepository, times(1)).deleteById(1L);
    }

}
