package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class ToDoController {

    @Autowired
    private ToDoService toDoService;

    @GetMapping
    public List<ToDo> getAllToDos() {
        return toDoService.getAllToDos();
    }

    @PostMapping
    public ToDo createToDo(@RequestBody ToDo toDo) {
        toDo.setCompletedAt(LocalDateTime.now());
        return toDoService.save(toDo);
    }

    @PutMapping("/{id}/complete")
    public ToDo completeToDo(@PathVariable Long id) {
        ToDo toDo = toDoService.findById(id);
        if (toDo != null) {
            toDo.setCompleted(true);
            toDo.setCompletedAt(LocalDateTime.now());
            return toDoService.save(toDo);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteToDo(@PathVariable Long id) {
        toDoService.delete(id);
    }

    @DeleteMapping
    public void deleteAllToDos() {
        toDoService.deleteAll();
    }
}
