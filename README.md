
# 📝 Feedback Box - Microservice Project

## Tech Stack: 

![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![NGINX](https://img.shields.io/badge/NGINX-Reverse_Proxy-brightgreen?logo=nginx)

---


---

## 📦 What is This?

This project is a lightweight, containerized backend system that allows users to submit feedback easily. It is built using modern tools and follows microservice principles with isolated services, easy scalability, and clean architecture.

---

## 🏗️ Project Structure

```bash
feedback-box/
├── api-gateway/         # NGINX reverse proxy configuration
│   └── default.conf
├── feedback-service/    # Microservice to handle feedback APIs
│   ├── Dockerfile
│   ├── index.js
│   └── ...
├── docker-compose.yml   # Compose setup to run everything
````

---

## 🚀 How to Run It

> 🐳 Make sure you have **Docker** and **Docker Compose** installed.

1. **Clone the repository**

```bash
git clone https://github.com/himanshudubey7/Feedback-box-MicroService-.git
cd Feedback-box-MicroService-
```

2. **Start the services**

```bash
docker-compose up --build
```

3. **Access the app**

* Submit Feedback: `http://localhost/api/feedback`
* View Feedback (admin): `http://localhost/api/feedback/all`

---

## 📬 API Endpoints

### 1. Submit Feedback

```http
POST /api/feedback
Content-Type: application/json

{
  "name": "John Doe",
  "message": "This is great!"
}
```

### 2. Get All Feedback (admin only)

```http
GET /api/feedback/all
```

---

## 🤝 Contribution

Pull requests are welcome!
Feel free to fork this repo, make changes, and open a PR.

---

Built with ❤️ by \Himanshu Dubey

```
