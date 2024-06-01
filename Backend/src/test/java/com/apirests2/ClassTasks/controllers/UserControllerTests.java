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

import com.apirests2.ClassTasks.models.User;
import com.apirests2.ClassTasks.repositories.UserRepository;

@WebMvcTest(UserController.class)
public class UserControllerTests {
    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext webApplicationContext;
    @MockBean
    private UserRepository userRepository;
    
    @BeforeEach
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void testGetAllUsers() throws Exception {
        when(userRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(get("/api/users"))
            .andExpect(status().isOk())
            .andExpect(content().json("[]"));
        verify(userRepository, times(1)).findAll();
    }

    @Test
    public void testGetUserById() throws Exception {
        User user = new User();
        user.setId(1L);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(userRepository, times(1)).findById(1L);
    }

    @Test
    public void testcreateUser() throws Exception {
        User user = new User();
        user.setId(1L);
        when(userRepository.save(any(User.class))).thenReturn(user);
        mockMvc.perform(post("/api/users")
            .contentType(MediaType.APPLICATION_JSON_UTF8)
            .content("{\"id\":null,\"name\": null,\"email\": null,\"password\":null }"))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1));
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    public void testUpdateUser() throws Exception {
        User user = new User();
        user.setId(1L);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(userRepository.save(any(User.class))).thenReturn(user);
        mockMvc.perform(put("/api/users/1")
            .contentType(MediaType.APPLICATION_JSON_UTF8)
            .content("{\"id\":null,\"name\": null,\"email\": null,\"password\":null }"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    public void testDeleteUser() throws Exception {
        doNothing().when(userRepository).deleteById(1L);
        mockMvc.perform(delete("/api/users/1"))
        .andExpect(status().isNoContent());
        verify(userRepository, times(1)).deleteById(1L);
    }

}
