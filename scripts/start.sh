#!/bin/bash
echo "Starting web server..."
sudo systemctl restart apache2  # For Apache (Ubuntu/Debian-based)
# sudo systemctl restart httpd  # For Apache (RHEL-based)
# sudo systemctl restart nginx  # If you're using Nginx
