package com.mycompany.listaamigo.filtros;

import java.io.IOException;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

@Provider
public class SegurancaFilter implements ContainerResponseFilter, ContainerRequestFilter{

    @Override
    public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext) throws IOException {     
        responseContext.getHeaders().add("Access-Control-Allow-Origin", "*");
        responseContext.getHeaders().add("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET");
        responseContext.getHeaders().add("Access-Control-Allow-Headers", "*");
    }

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        requestContext.getHeaders().add("Access-Control-Allow-Origin", "*");
        requestContext.getHeaders().add("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET");
        requestContext.getHeaders().add("Access-Control-Allow-Headers", "Content-Type");
    }
    
}
