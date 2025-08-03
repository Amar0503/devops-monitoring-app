resource "aws_instance" "devops_app" {
  ami           = var.ami_id
  instance_type = var.instance_type
  tags = {
    Name = "devops-monitoring-instance"
  }
}
