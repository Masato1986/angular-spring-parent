package com.example.server.service;

import com.example.server.persistence.entity.Task;

import java.util.List;

public interface TaskService {

    List<Task> findAll();

}
