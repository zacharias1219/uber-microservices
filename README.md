# **Uber Clone with Microservices Architecture**

This project demonstrates the development of a scalable and efficient **Uber-like application** using **Microservices Architecture**. It highlights the transition from a traditional monolithic approach to a microservices-based system, focusing on real-world challenges and solutions.

---

## **Features**

- **Monolith to Microservices Transition**:
  - Explanation and hands-on implementation of breaking a monolithic application into smaller microservices.
  - Clear comparison of the pros and cons of each architecture.
  
- **Microservices Implementation**:
  - Three distinct services: **User Service**, **Captain Service**, and **Ride Service**.
  - Each service is independently scalable and deployable.

- **Real-World Traffic Handling**:
  - Introduction to stress-testing tools like `autocannon`.
  - Techniques for handling high-traffic scenarios effectively.

---

## **Tech Stack**

- **Backend**:
  - Node.js with Express.js for building services.
  - Docker for containerization.
  
- **Tools**:
  - Autocannon for load testing.
  - Morgan for logging HTTP requests and server performance.

- **Deployment**:
  - Cloud-based deployments using Docker containers.

---

## **Directory Structure**

```bash
├── user-service
│   ├── app.js
│   ├── server.js
├── captain-service
│   ├── app.js
│   ├── server.js
├── ride-service
│   ├── app.js
│   ├── server.js
└── gateway
    ├── server.js
    ├── package.json
```

---

## **Setup and Installation**

### Prerequisites

- **Node.js**: Version 14+.
- **Docker**: Ensure Docker is installed and running.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/uber-clone-microservices.git
   cd uber-clone-microservices
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run individual services**:
   Navigate to each service directory (`user-service`, `captain-service`, `ride-service`) and execute:

   ```bash
   npm start
   ```

4. **Stress Test**:
   - Navigate to the `stress-test` directory:

     ```bash
     cd stress-test
     npm install
     ```

   - Start the load testing script:

     ```bash
     node test.js
     ```

---

## **Key Concepts**

### **Monolithic Architecture**

- Single codebase handling all functionalities.
- Scalability challenges during high-traffic scenarios.

### **Microservices Architecture**

- Independent, smaller services for each functionality.
- Services communicate via lightweight protocols (e.g., HTTP, gRPC).

### **Load Testing**

- Using Autocannon to simulate heavy traffic and measure server performance.
- Morgan logger to monitor HTTP requests in real-time.

---

## **Future Enhancements**

- Add authentication using JWT.
- Implement service discovery and load balancing.
- Deploy services with Kubernetes.

---

## **Contributing**

We welcome contributions to enhance this project! Please fork the repository, make your changes, and submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.
