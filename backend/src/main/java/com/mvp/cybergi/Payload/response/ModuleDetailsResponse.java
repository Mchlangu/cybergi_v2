package com.mvp.cybergi.Payload.response;

import lombok.Data;

@Data
public class ModuleDetailsResponse {
    private Long id;
    private String title;
    private String description;
    private boolean featured;
    private boolean subscribed;  // New field to indicate subscription status
}
