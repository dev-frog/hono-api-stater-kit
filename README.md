# Hono API Boilerplate

```bash
yarn install
yarn run dev
```

```bash
open http://localhost:8080
```

## Docker Images

```bash
docker build -t my-node-app .

docker tag my-node-app <your-dockerhub-username>/my-node-app
docker push <your-dockerhub-username>/my-node-app

```

## Kubernetes

> Apply the Configuration Files

```bash
kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

```

> Verify the Deployment

```bash
kubectl get pods

kubectl get services

```

> Access Your App

```bash
minikube service my-node-app-service
```

## Scaling the Application

```bash
kubectl scale deployment my-node-app --replicas=5

kubectl get deployment my-node-app

```

## Kubernetes Metrics Server

> Prometheus + Grafana

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm repo update

helm install prometheus prometheus-community/kube-prometheus-stack

helm list

```
