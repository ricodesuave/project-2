package com.bookzindaclub.web;

import com.bookzindaclub.model.Credentials;
import com.bookzindaclub.model.User;
import com.bookzindaclub.services.UserService;
import com.bookzindaclub.services.UserServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.exc.MismatchedInputException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sun.net.www.http.HttpClient;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@RestController
@RequestMapping("/auth")
public class AuthController extends HttpServlet {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("login")
    protected User doPost(@RequestBody User user) throws ServletException, IOException {
        return userService.authenticateUsingCredentials(user);
    }
}
