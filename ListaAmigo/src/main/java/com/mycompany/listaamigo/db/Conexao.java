package com.mycompany.listaamigo.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Casa
 */
public class Conexao {

    public Connection getConnection() {
        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/lista_amigo?useTimezone=true&serverTimezone=UTC", "root", "root");
            
            Logger.getLogger(Conexao.class.getName()).log(Level.INFO, "Conectado com sucesso");
            return connection;
        } catch (SQLException ex) {
            Logger.getLogger(Conexao.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
}
