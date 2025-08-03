output "instance_id" {
  value = aws_instance.devops_app.id
}

output "public_ip" {
  value = aws_instance.devops_app.public_ip
}
