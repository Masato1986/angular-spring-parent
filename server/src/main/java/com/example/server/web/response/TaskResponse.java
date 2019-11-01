package com.example.server.web.response;

import com.example.server.persistence.entity.Task;

public class TaskResponse {

    private final Long id;

    private final String todo;

    private final String priority;

    public TaskResponse(Task todo) {
        this.id = todo.getId();
        this.todo = todo.getTodo();
        this.priority = todo.getPriority();
    }

    public Long getId() {
        return id;
    }

    public String getTodo() {
        return todo;
    }

    public String getPriority() {
        return priority;
    }

}
