ssh "ubuntu@52.66.246.150" "cd app/gitlab-zomato-clone-project && sudo docker-compose stop && git pull && sudo docker-compose up -d --build && exit"
