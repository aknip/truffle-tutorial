START:

In Terminal:
./dev_build.sh
./dev_run.sh

In Browser:
http://localhost:3000/


Metamask:
Main menu (Circle avatar at top right): "Import account", use private key from Ganache (see Terminal log)

Contract Development:
- Edit/change contract in truffle/contracts
- Open second Terminal: docker exec -t truffle truffle test
  This will compile all contracts and run all tests

Node Development / Dependencies ändern:
In zweitem Terminal: ./npm_install.sh
In der Bash des Containers: 
npm install jquery 
=> Installiert neue dependency "jQuery" und aktualisiert package.json/package_lock.json


****************************************************************

FROM: 
https://medium.com/@lzhou1110/the-complete-truffle-suite-on-docker-truffle-ganache-drizzle-47ab18b1ec83
https://github.com/lzhou1110/drizzle-truffle-ganache-docker-box

****************************************************************

CHANGES:
- Verzeichnis und Docker-Instanz umbenannt von "truffle-drizzle" in "truffle"
- Verzeichnis "client" umbenannt in "app"
- alte Versionen in _BACKUP




NOTES FOR DOCKER:


docker-compose -f docker-compose-dev.yml up -d
docker-compose -f docker-compose-dev.yml down


docker exec -t truffle truffle compile

docker exec -t truffle truffle migrate

docker exec -t truffle truffle console

docker exec -t truffle-drizzle truffle unbox react-uport --force

docker exec -t truffle /bin/bash


Stoppen aller Container
sudo docker stop $(sudo docker ps -a -q)

Löschen aller Machines
sudo docker rm $(sudo docker ps -a -q)

Löschen aller Images
sudo docker rmi $(sudo docker images -q)





