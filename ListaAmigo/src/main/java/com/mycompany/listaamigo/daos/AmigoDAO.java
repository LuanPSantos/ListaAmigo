package com.mycompany.listaamigo.daos;

import com.mycompany.listaamigo.db.Conexao;
import com.mycompany.listaamigo.models.Amigo;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Casa
 */
public class AmigoDAO {

    public List<Amigo> selectAmigos() {
        List<Amigo> amigos = new ArrayList<>();
        try (Connection con = new Conexao().getConnection()) {
            String sql = "SELECT * FROM Amigo";

            try (PreparedStatement statement = con.prepareStatement(sql)) {
                statement.execute();

                try (ResultSet result = statement.getResultSet()) {
                    while (result.next()) {
                        Amigo amigo = new Amigo();
                        amigo.setId(result.getInt("id"));
                        amigo.setNome(result.getString("nome"));
                        amigos.add(amigo);
                    }
                }
            }

        } catch (SQLException ex) {
            Logger.getLogger(AmigoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

        return amigos;
    }

    public Amigo selectAmigo(int id) {

        try (Connection con = new Conexao().getConnection()) {
            String sql = "SELECT * FROM Amigo WHERE id = ?";

            try (PreparedStatement statement = con.prepareStatement(sql)) {
                statement.setInt(1, id);
                statement.execute();

                try (ResultSet result = statement.getResultSet()) {
                    if (result.next()) {
                        Amigo amigo = new Amigo();
                        amigo.setId(result.getInt("id"));
                        amigo.setNome(result.getString("nome"));
                        return amigo;
                    }
                }
            }

        } catch (SQLException ex) {
            Logger.getLogger(AmigoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

        return null;
    }

    public Amigo insertAmigo(Amigo amigo) {

        try (Connection con = new Conexao().getConnection()) {
            String sql = "INSERT INTO Amigo (nome) values (?)";

            try (PreparedStatement statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
                statement.setString(1, amigo.getNome());
                statement.execute();

                try (ResultSet result = statement.getGeneratedKeys()) {
                    if (result.next()) {
                        amigo.setId(result.getInt(1));
                        return amigo;
                    }
                }
            }

        } catch (SQLException ex) {
            Logger.getLogger(AmigoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

        return null;
    }

    public void updateAmigo(Amigo amigo) {
        try (Connection con = new Conexao().getConnection()) {
            String sql = "UPDATE Amigo set nome = ? WHERE id = ?";

            try (PreparedStatement statement = con.prepareStatement(sql)) {
                statement.setString(1, amigo.getNome());
                statement.setInt(2, amigo.getId());
                statement.execute();

            }

        } catch (SQLException ex) {
            Logger.getLogger(AmigoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void deleteAmigo(int id) {
        try (Connection con = new Conexao().getConnection()) {
            String sql = "DELETE FROM Amigo WHERE id = ?";

            try (PreparedStatement statement = con.prepareStatement(sql)) {
                statement.setInt(1, id);
                statement.execute();

            }

        } catch (SQLException ex) {
            Logger.getLogger(AmigoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
