upstream backend {
    # The GatsbyJS server by KLOUDBOY
    server localhost:8000;
    keepalive 64;
}
server {
    # Enable HTTP/2
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name claudiugombos.com;
	
        ssl_certificate /etc/nginx/ssl/nginx.crt;
        ssl_certificate_key /etc/nginx/ssl/nginx.key;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
        ssl_dhparam /etc/nginx/ssl/dhparam.pem;
        ssl_session_cache shared:SSL:20m;
        ssl_session_timeout 180m;
        resolver 8.8.8.8 8.8.4.4;
        add_header Strict-Transport-Security "max-age=31536000" always;
		
    location / {
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_pass_request_headers on;
        proxy_set_header Connection "keep-alive";
        proxy_store off;
    }
}
server {
listen         80;
listen    [::]:80;
server_name    claudiugombos.com;
return         301 https://$server_name$request_uri;
}
