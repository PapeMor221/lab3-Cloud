# Kubernetes Lab DevOps - Employees API - Employees API

## Description

Ce lab Kubernetes, dans le cadre du cours de DevOps, déploie l'API Employés, une application Node.js intégrée avec PostgreSQL, en utilisant des manifestes Kubernetes pour gérer la configuration, le déploiement et la mise à l'échelle. L'API RESTful est conçue pour gérer les enregistrements des employés et est implémentée avec Express.js et Sequelize pour les interactions avec la base de données.

## Prérequis

Avant de déployer l'application sur Kubernetes, assurez-vous d'avoir les éléments suivants installés :

1. **Docker**: Pour exécuter les conteneurs.
2. **Minikube**: Pour créer un cluster Kubernetes local.
3. **kubectl**: L'outil en ligne de commande pour interagir avec votre cluster Kubernetes.

### Installation de Minikube avec Docker

Pour démarrer Minikube avec le driver Docker, exécutez la commande suivante :

```sh
minikube start --driver=docker
```


## Installation et Execution

### 1. Cloner le Repository

Clone the GitHub repository:

```sh
git clone https://github.com/PapeMor221/Kubernetes-Lab.git
```


### 2. Deployer l'application dans Kubernetes

Déployez l'application en utilisant les manifestes Kubernetes :

```sh
kubectl apply -f k8s/
```

### 3. Voir la liste des Pods et Services
Une fois les pods en cours d'exécution, vous pouvez obtenir la liste des pods et des services en utilisant :

```sh
kubectl get pods
```

```sh
kubectl get services
```

### 4. Obtenir l'url du Service BackEnd 

```sh
minikube service backend-service --url
```
* **Exemple de {{Base_Url}}**: http://192.168.58.2:30080

Cette {{Base_Url}} sera utilisé Pour tester les api de l'application BackEdn


### 5. Tester Les EndPoints /health/live et /health/ready

Une fois que l'url du service backend disponible vous pouvez tester si tout marche avec les endpoints /health/live et /health/ready en executant ces curls dans votre terminal :

```sh
curl http://192.168.58.2:30080/health/live
```
Et

```sh
curl http://192.168.58.2:30080/health/ready
```


### 6. Acceder aux APIs

Une fois que les pods sont en etat de running, les APIs seront disponibles ici:

* **API Endpoints**: {{Base_Url}}/employees ==> **Exemple**: http://192.168.58.2:30080/employees
* **Swagger Documentation pour les tests**: {{Base_Url}}/docs ==> **Exemple**: http://192.168.58.2:30080/docs


### 7. Interagir avec les APIs

Vous pouvez utiliser les points de terminaison de l'API pour effectuer les opérations suivantes :

* **GET /employees**: Obtenir tous les employés.
* **POST /employees**: Créer un employé.
* **GET /employees/{id}**: Obtenir un employé par ID.
* **PUT /employees/{id}**: Mettre à jour un employé par ID.
* **DELETE /employees/{id}**: Supprimer un employé par ID.
