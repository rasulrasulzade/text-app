package com.company.textapp.controller;

import com.company.textapp.dto.TextDTO;
import com.company.textapp.dto.TextListResponse;
import com.company.textapp.service.TextAppService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/texts")
@RequiredArgsConstructor
public class TextAppController {

    private final TextAppService textAppService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveText(@RequestBody @Valid TextDTO dto){
        textAppService.saveText(dto);
    }

    @GetMapping
    public TextListResponse getTexts(){
        return textAppService.getTexts();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        textAppService.deleteById(id);
    }
}
