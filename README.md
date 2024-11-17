# Stanbic Self-Onboarding App

This repository contains the Dockerized React application for Stanbic Self-Onboarding.

---

## Instructions to Run with Docker

### Step 1: Build the Docker Image

Run the following command to build the Docker image:
```bash
docker build -t stanbic-self-onboarding .
``` 
---

 

### Step 2: Run the Docker Container

Start the container and map it to port `7079`:
```bash
docker run -d -p 7079:7079 stanbic-self-onboarding
``` 

---

### **Step 3: Access the Application**
```markdown
### Step 3: Access the Application

Open your browser and navigate to: http://localhost:7079

```