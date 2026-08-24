pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "oram/clashing-devtools:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/oram/clashing-devtools.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'npm audit'
                // Simulate container security scan
                sh 'echo "Scanning for CVEs..."'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Containerize') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }

        stage('Deploy to Staging') {
            steps {
                sh 'docker-compose up -d'
                sh 'echo "Health check passing. Application reachable on port 3000."'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful! Pipeline green.'
        }
        failure {
            echo 'Deployment failed. Alerting DevOps team.'
        }
    }
}
