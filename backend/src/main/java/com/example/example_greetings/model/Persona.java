package com.example.example_greetings.model;

public class Persona {
    private String name;
    private Integer age;
    public boolean successCreated = false;

    public Persona(){}

    public Persona(String name, int age){
        this.name = name;
        this.age = age;
    }

    public boolean isValid() {
        return (this.name!= null) && (this.age!= null);
    }

    public Persona save() {
        this.successCreated = true;
        return this;
    }

    public String getName(){
        return this.name;
    }

    public Integer getAge(){
        return this.age;
    }

    public boolean isSuccessCreated(){
        return this.successCreated;
    }
}
