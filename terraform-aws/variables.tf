variable "instance_type" {
  description = "Type of EC2 instance"
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance (Amazon Linux 2)"
  default     = "ami-03bb6d83c60fc5f7c" # Verified for ap-south-1
}
