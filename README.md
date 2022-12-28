# DevOps SRE nodejs App project

This is a Node.js application that demonstrates how to develop, deploy, and test a web server using various tools and frameworks. It includes a few routes that return different responses when accessed, and it can be deployed using Docker and Kubernetes. It also includes a test environment with a Redis server, and a Swagger UI for testing API requests.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [Redis](https://redis.io/)

## Development

To develop this app, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Write your code and test it locally to ensure it works as expected.

## Deployment with Docker

To deploy this app using Docker, follow these steps:

1. Create a `Dockerfile` that specifies how to build a Docker image for the app. The `Dockerfile` should specify the base image to use, any dependencies that need to be installed, and how to start the app when the Docker container is launched.
2. Build the Docker image using the `Dockerfile`. You can do this using the `docker build` command.
3. Test the Docker image to ensure it works as expected. You can do this by launching a Docker container using the `docker run` command and verifying that the app is running correctly.
4. Push the Docker image to a container registry such as [Docker Hub](https://hub.docker.com/) or [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/).

## Deployment with Kubernetes

To deploy this app using Kubernetes, follow these steps:

1. Set up a [Kubernetes cluster](https://kubernetes.io/docs/setup/), either on a cloud platform such as [Azure](https://azure.microsoft.com/en-us/services/kubernetes-service/) or on-premises.
2. Install the [Kubernetes command-line tool](https://kubernetes.io/docs/tasks/tools/install-kubectl/), `kubectl`, and configure it to connect to your cluster.
3. Create a Kubernetes deployment configuration file that specifies how to deploy the app. This file should specify the Docker image to use, the number of replicas to run, and any other necessary configuration such as environment variables or resource limits.
4. Use `kubectl` to deploy the app to the cluster by applying the deployment configuration file.
5. Optionally, you can use a tool such as [Helm](https://helm.sh/) or [Istio](https://istio.io/) to manage and deploy the app more easily.

## Testing with Redis

To set up a test environment with a Redis server, follow these steps:

1. Install [Redis](https://redis.io/download) on a separate machine or in a separate Docker container.


## Author
ECE DevOps project
- Tresor MELE MBE
- Abdourhamane DIALO 
- Maiylis HARCHAOUI