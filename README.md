# rabbitmq-test

From powershell run this command in base directory:
```
docker-compose up --scale server=4
```

Docker will run containers:
* 4 node server containers that will listen on host port 1313
* 1 nginx 
* 1 rabbitmq 
* 1 node producer 
* 1 node consumer

