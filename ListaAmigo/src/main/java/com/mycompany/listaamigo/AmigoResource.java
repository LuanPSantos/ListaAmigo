package com.mycompany.listaamigo;

import com.mycompany.listaamigo.models.Amigo;
import com.mycompany.listaamigo.service.AmigoService;
import java.net.URI;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

/**
 *
 * @author Casa
 */
@Path("amigo")
public class AmigoResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response selectAmigos() {
        AmigoService service = new AmigoService();
        return Response.ok(service.selectAmigos()).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response selectAmigos(@PathParam("id") int id) {
        AmigoService service = new AmigoService();

        Amigo amigo = service.selectAmigo(id);
        if (amigo != null) {
            return Response.ok(amigo).build();
        }else{
            return Response.noContent().build();
        }
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response insertAmigo(@Context UriInfo uriInfo, Amigo amigo) {
        AmigoService service = new AmigoService();
        amigo = service.insertAmigo(amigo);

        URI uri = uriInfo.getAbsolutePathBuilder().path(String.valueOf(amigo.getId())).build();
        return Response.created(uri).entity(amigo).build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateAmigo(Amigo amigo) {
        AmigoService service = new AmigoService();
        service.updateAmigo(amigo);

        return Response.ok().build();
    }

    @DELETE
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteAmigo(@PathParam("id") int id) {
        AmigoService service = new AmigoService();
        service.deleteAmigo(id);

        return Response.ok().build();
    }
}
