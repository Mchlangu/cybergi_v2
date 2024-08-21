package com.mvp.cybergi.Payload.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Setter
@Getter
public class UserInfoResponse {
    private Long id;
    private String username;
    private String email;
    private List<String> roles;

    public UserInfoResponse(Long id, String username, String email, List<String> roles){
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }

}
