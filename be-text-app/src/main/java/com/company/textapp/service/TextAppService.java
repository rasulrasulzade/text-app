package com.company.textapp.service;

import com.company.textapp.dto.TextDTO;
import com.company.textapp.dto.TextListResponse;

public interface TextAppService {
    void saveText(TextDTO dto);

    TextListResponse getTexts();

    void deleteById(Long id);
}
