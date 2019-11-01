package com.example.server.persistence.mapper;

import com.example.server.persistence.entity.Task;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TaskMapper {

    List<Task> findAll();

}
