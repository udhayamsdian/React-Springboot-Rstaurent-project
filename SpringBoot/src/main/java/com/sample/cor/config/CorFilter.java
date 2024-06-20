package com.sample.cor.config;

import java.io.IOException;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletResponse;

@Component
@Configuration

public class CorFilter implements Filter {
	
//	private FilterChain filterChain;
//	private ServletRequest servletRequest;
//	private ServletResponse servletResponse;

	@Override
	public void init(FilterConfig filterConfig) throws ServletException{
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletResponse response1 =(HttpServletResponse) response;
		response1.setHeader("Access-Control-Allow-Origin","*");
		response1.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
		response1.setHeader("Access-Control-Allow-Headers","Content-type,Authorization");
		chain.doFilter(request,response);
	}
	
	@Override
	public void destroy() {
		
	}
	
}