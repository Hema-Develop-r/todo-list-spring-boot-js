package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {
    @Autowired
    private ToDoRepository toDoRepository;

    public List<ToDo> getAllToDos() {
        return toDoRepository.findAll();
    }

    public ToDo save(ToDo toDo) {
        return toDoRepository.save(toDo);
    }

    public void delete(Long id) {
        toDoRepository.deleteById(id);
    }

    public ToDo findById(Long id) {
        return toDoRepository.findById(id).orElse(null);
    }

    public void deleteAll() {
        toDoRepository.deleteAll();
    }
}

