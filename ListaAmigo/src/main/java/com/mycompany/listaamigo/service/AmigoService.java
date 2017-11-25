/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.listaamigo.service;

import com.mycompany.listaamigo.daos.AmigoDAO;
import com.mycompany.listaamigo.models.Amigo;
import java.util.List;

/**
 *
 * @author Casa
 */
public class AmigoService {
    
    private final AmigoDAO dao;
    
    public AmigoService(){
        dao = new AmigoDAO();
    }
    
    public List<Amigo> selectAmigos(){
        return dao.selectAmigos();
    }
    
    public Amigo selectAmigo(int id){
        return dao.selectAmigo(id);
    }
    
    public Amigo insertAmigo(Amigo amigo){
        return dao.insertAmigo(amigo);
    }
    
    public void updateAmigo(Amigo amigo){
        dao.updateAmigo(amigo);
    }
    
    public void deleteAmigo(int id){
        dao.deleteAmigo(id);
    }
}
