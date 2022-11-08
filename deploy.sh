ssh "ubuntu@43.204.97.22115.207.111.146" "cd app/gitlab-zomato-clone-project && sudo docker-compose stop && git pull && sudo docker-compose up -d --build && exit"
