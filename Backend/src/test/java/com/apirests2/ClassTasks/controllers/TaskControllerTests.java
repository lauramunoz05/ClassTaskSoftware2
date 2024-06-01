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

import com.apirests2.ClassTasks.models.Task;
import com.apirests2.ClassTasks.repositories.TaskRepository;

@WebMvcTest(TaskController.class)
public class TaskControllerTests {
    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext webApplicationContext;
    @MockBean
    private TaskRepository taskRepository;

    @BeforeEach
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void testGetAllTasks() throws Exception {
        when(taskRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(get("/api/tasks"))
            .andExpect(status().isOk())
            .andExpect(content().json("[]"));
        verify(taskRepository, times(1)).findAll();
    }

    @Test
    public void testGetTaskById() throws Exception {
        Task task = new Task();
        task.setId(1L);
        when(taskRepository.findById(1L)).thenReturn(Optional.of(task));
        mockMvc.perform(get("/api/tasks/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(taskRepository, times(1)).findById(1L);
    }   
    
    @Test
    public void testcreateTask() throws Exception {
        Task task = new Task();
        task.setId(1L);
        when(taskRepository.save(any(Task.class))).thenReturn(task);
        mockMvc.perform(post("/api/tasks")
            .contentType(MediaType.APPLICATION_JSON_UTF8)
            .content("{\"id\":null,\"titulo\": null,\"description\": null,\"dueDate\":null, \"completed\":null, \"SubjectId\":null }"))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1));
        verify(taskRepository, times(1)).save(any(Task.class));
    }

    @Test
    public void testUpdateTask() throws Exception {
        Task task = new Task();
        task.setId(1L);
        when(taskRepository.findById(1L)).thenReturn(Optional.of(task));
        when(taskRepository.save(any(Task.class))).thenReturn(task);
        mockMvc.perform(put("/api/tasks/1")
            .contentType(MediaType.APPLICATION_JSON_UTF8)
            .content("{\"id\":null,\"titulo\": null,\"description\": null,\"dueDate\":null, \"completed\":null, \"SubjectId\":null }"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(taskRepository, times(1)).save(any(Task.class));
    }

    @Test
    public void testDeleteTask() throws Exception {
        doNothing().when(taskRepository).deleteById(1L);
        mockMvc.perform(delete("/api/tasks/1"))
            .andExpect(status().isNoContent()); 
        verify(taskRepository, times(1)).deleteById(1L);
    }
}
