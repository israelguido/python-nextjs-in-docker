# Docker Setup for FastAPI and Next.js

This project includes a **FastAPI** backend and a **Next.js** frontend, both running in separate Docker containers and communicating through an internal network.

## 🚀 How to Use

### 1. Install Dependencies
Make sure you have **Docker** and **Docker Compose** installed on your machine.

### 2. Create a `.env` File
Create a `.env` file in the project root and add the necessary variables for both backend and frontend.

### 3. Start the Containers
```sh
make start
```
This will start the containers in detached mode.

### 4. Stop the Containers
```sh
make stop
```
Stops the containers without removing volumes.

### 5. Rebuild the Containers
If there are any changes in the application or Dockerfile, run:
```sh
make rebuild
```
This will rebuild the images before restarting the containers.

### 6. View Container Logs
```sh
make logs
```
Allows you to see real-time logs from both containers.

### 7. Access the Containers
- To access the backend (FastAPI):
  ```sh
  make exec-backend
  ```
- To access the frontend (Next.js):
  ```sh
  make exec-frontend
  ```

## 📌 Docker Structure
The **Docker Compose** is set up with the following services:

- **backend** (FastAPI)
  - Port: `8081`
  - Volume: `./backend:/app`
  - Reads variables from `.env`

- **frontend** (Next.js)
  - Port: `3000`
  - Volume: `./frontend:/app`
  - Uses `CHOKIDAR_USEPOLLING=true` for hot-reload in Docker

Both services share the same **internal Docker network** called `app_network`.

## 🛠 Requirements
- Docker
- Docker Compose
- Make (to run the commands)

If you need adjustments or additional configurations, modify the `docker-compose.yml` and `Makefile` as needed.

---

# Configuración de Docker para FastAPI y Next.js

Este proyecto incluye un backend en **FastAPI** y un frontend en **Next.js**, ambos ejecutándose en contenedores Docker separados y comunicándose a través de una red interna.

## 🚀 Cómo usar

### 1. Instalar dependencias
Asegúrate de tener **Docker** y **Docker Compose** instalados en tu máquina.

### 2. Crear un archivo `.env`
Crea un archivo `.env` en la raíz del proyecto y agrega las variables necesarias para el backend y frontend.

### 3. Iniciar los contenedores
```sh
make start
```
Esto iniciará los contenedores en modo desacoplado.

### 4. Detener los contenedores
```sh
make stop
```
Detiene los contenedores sin eliminar los volúmenes.

### 5. Reconstruir los contenedores
Si hay cambios en la aplicación o en el Dockerfile, ejecuta:
```sh
make rebuild
```
Esto reconstruirá las imágenes antes de reiniciar los contenedores.

### 6. Ver registros de los contenedores
```sh
make logs
```
Permite ver los registros en tiempo real de ambos contenedores.

### 7. Acceder a los contenedores
- Para acceder al backend (FastAPI):
  ```sh
  make exec-backend
  ```
- Para acceder al frontend (Next.js):
  ```sh
  make exec-frontend
  ```

## 📌 Estructura de Docker
El **Docker Compose** está configurado con los siguientes servicios:

- **backend** (FastAPI)
  - Puerto: `8081`
  - Volumen: `./backend:/app`
  - Lee variables de `.env`

- **frontend** (Next.js)
  - Puerto: `3000`
  - Volumen: `./frontend:/app`
  - Usa `CHOKIDAR_USEPOLLING=true` para hot-reload en Docker

Ambos servicios comparten la misma **red interna de Docker** llamada `app_network`.

## 🛠 Requisitos
- Docker
- Docker Compose
- Make (para ejecutar los comandos)

Si necesitas ajustes o configuraciones adicionales, modifica `docker-compose.yml` y `Makefile` según sea necesario.

---

# Docker 设置用于 FastAPI 和 Next.js

该项目包括 **FastAPI** 后端和 **Next.js** 前端，两者在独立的 Docker 容器中运行，并通过内部网络进行通信。

## 🚀 如何使用

### 1. 安装依赖项
确保您的计算机已安装 **Docker** 和 **Docker Compose**。

### 2. 创建 `.env` 文件
在项目根目录创建 `.env` 文件，并添加后端和前端所需的变量。

### 3. 启动容器
```sh
make start
```
这将在后台模式下启动容器。

### 4. 停止容器
```sh
make stop
```
停止容器而不删除卷。

### 5. 重新构建容器
如果应用程序或 Dockerfile 发生更改，请运行：
```sh
make rebuild
```
这将在重新启动容器之前重新构建映像。

### 6. 查看容器日志
```sh
make logs
```
可以实时查看两个容器的日志。

### 7. 访问容器
- 访问后端（FastAPI）：
  ```sh
  make exec-backend
  ```
- 访问前端（Next.js）：
  ```sh
  make exec-frontend
  ```

## 📌 Docker 结构
**Docker Compose** 配置了以下服务：

- **后端**（FastAPI）
  - 端口：`8081`
  - 卷：`./backend:/app`
  - 读取 `.env` 变量

- **前端**（Next.js）
  - 端口：`3000`
  - 卷：`./frontend:/app`
  - 在 Docker 中使用 `CHOKIDAR_USEPOLLING=true` 进行热重载

两个服务共享同一个 **内部 Docker 网络**，称为 `app_network`。

## 🛠 要求
- Docker
- Docker Compose
- Make（用于运行命令）

如果需要调整或其他配置，请根据需要修改 `docker-compose.yml` 和 `Makefile`。
