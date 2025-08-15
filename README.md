# 🚀 DevOps Monitoring Project – Prometheus & Grafana
This project demonstrates a complete **DevOps pipeline** using **Docker, Prometheus, Grafana, GitHub Actions CI/CD, and AWS EC2**.  
It provisions infrastructure using **Terraform**, sets up **containerized monitoring services**, and implements **continuous deployment**.

The stack monitors server metrics, generates alerts, and visualizes data using dashboards.  
AWS hosts the production setup for real-world simulation.


## 🛠 Tech Stack
- **Docker** – Containerization
- **Prometheus** – Metrics collection & alerting
- **Grafana** – Monitoring & visualization
- **Node Exporter** – Server metrics exporter
- **Terraform** – AWS EC2 provisioning
- **GitHub Actions** – CI/CD automation
- **AWS EC2** – Cloud deployment
- **Nginx** – Reverse proxy (optional -to be implemented in future)



## 📂 Project Structure
```plaintext
devops-monitoring-app/
├── monitoring/         # Prometheus + Grafana setup
├── terraform/          # AWS provisioning with Terraform
├── screenshots/        # Project screenshots
├── .github/workflows/  # CI/CD pipeline
├── node_modules/       # 
└── README.md

## ⚙️ Setup & Run Instructions

### **1. Clone the repository**
```bash
git clone https://github.com/Amrutha2510/devops-monitoring-app.git
cd devops-monitoring-app


---

### **5️⃣ Screenshots**
```markdown
## 🖼 Screenshots

### Grafana Dashboard
![Grafana Screenshot](screenshots/grafana main.png)
![Grafana Screenshot](screenshots/grafana metrics.png)

### Prometheus Targets
![Prometheus Screenshot](screenshots/prometheus.png)
![Prometheus Screenshot](screenshots/prometheus(alert).png)

### Docker files
![Docker running files](screenshots/docker running.png)

## 🚨 Alerts Configuration
Alert rules are defined in `monitoring/alert.rules.yml`

Example:
```yaml
groups:
  - name: example
    rules:
      - alert: HighCPUUsage
        expr: node_cpu_seconds_total > 80
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "CPU usage high"


---

### **7️⃣ AWS Deployment**
```markdown
## ☁️ AWS Deployment
- **Terraform** provisions an EC2 instance (Free Tier eligible)
- **Docker Compose** runs monitoring stack on EC2
- **Security Groups** allow Prometheus & Grafana ports
- Optional: Use **Nginx reverse proxy** to serve dashboards under a domain/sub-path

## 📜 License
This project is licensed under the MIT License.

## 👩‍💻 Author
**Amrutha R**  
📧 amrutharajashekar2510@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/amrutha-r-70702b212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

