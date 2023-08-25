package com.company.textapp.service.impl;

import com.company.textapp.dto.TextDTO;
import com.company.textapp.dto.TextListResponse;
import com.company.textapp.entity.TextEnt;
import com.company.textapp.repository.TextRepository;
import com.company.textapp.service.TextAppService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TextAppServiceImpl implements TextAppService {
    private final TextRepository textRepository;

    @Override
    public void saveText(TextDTO dto) {
        textRepository.save(TextEnt.builder()
                        .text(dto.text())
                .build());
    }

    @Override
    public TextListResponse getTexts() {
        return new TextListResponse(textRepository.findAll().stream()
                .map(t -> new TextDTO(t.getId(), t.getText()))
                .toList());
    }

    @Override
    public void deleteById(Long id) {
        textRepository.deleteById(id);
    }
}
