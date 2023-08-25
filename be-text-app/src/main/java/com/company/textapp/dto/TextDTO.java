package com.company.textapp.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record TextDTO(Long id, @NotBlank(message = "Text may not blank") @Size(max = 255) String text) {
}
