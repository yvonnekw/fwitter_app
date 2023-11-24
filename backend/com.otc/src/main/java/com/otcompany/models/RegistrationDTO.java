package com.otcompany.models;

public class RegistrationDTO {

    private String username;
    private String password;
    private String firstName;
    private String lastName;

    public RegistrationDTO(){
        super();
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
/* 
    public RegistrationDTO(String username, String password){
        super();
        this.username = username;
        this.password = password;
    }*/

    public RegistrationDTO(String username, String password, String firstName, String lastName) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public RegistrationDTO(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getUsername(){
        return this.username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPassword(){
        return this.password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    @Override
    public String toString() {
        return "RegistrationDTO [username=" + username + ", password=" + password + ", firstName=" + firstName
                + ", lastName=" + lastName + "]";
    }
}
