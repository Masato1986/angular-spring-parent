package com.example.server.service.impl;

import com.example.server.persistence.entity.Task;
import com.example.server.persistence.mapper.TaskMapper;
import com.example.server.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskMapper todoMapper;

    public TaskServiceImpl(TaskMapper todoMapper) {
        this.todoMapper = todoMapper;
    }

    @Override
    public List<Task> findAll() {
        return this.todoMapper.findAll();
    }
}
