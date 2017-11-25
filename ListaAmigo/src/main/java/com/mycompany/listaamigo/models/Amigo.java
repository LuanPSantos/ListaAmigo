package com.mycompany.listaamigo.models;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;

/**
 *
 * @author Casa
 */
@XmlAccessorType(XmlAccessType.FIELD)
public class Amigo implements Serializable{
    private int id;
    private String nome;

    public Amigo(String nome) {
        this.nome = nome;
    }
    
    public Amigo(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
