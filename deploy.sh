ssh "ubuntu@3.109.207.92" "cd app/gitlab-zomato-clone-project && sudo docker-compose stop && git pull && sudo docker-compose up -d --build && exit"
