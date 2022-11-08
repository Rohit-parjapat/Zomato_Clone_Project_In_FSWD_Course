ssh "ubuntu@43.204.97.221" "cd app/gitlab-zomato-clone-project && sudo docker-compose stop && git pull && sudo docker-compose up -d --build && exit"
