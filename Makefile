# Defina o nome do seu serviço no Docker Compose
SERVICE_NAME=app

# Comando para subir os containers do Docker
start:
	docker-compose up -d

# Comando para parar os containers do Docker
stop:
	docker-compose down

# Comando para rebuildar e reiniciar os containers
rebuild:
	docker-compose down
	docker-compose up --build -d

# Comando para ver os logs dos containers
logs:
	docker-compose logs -f

# Comando para rodar comandos no container backend
exec-backend:
	docker-compose exec backend bash

# Comando para rodar comandos no container frontend
exec-frontend:
	docker-compose exec frontend bash
