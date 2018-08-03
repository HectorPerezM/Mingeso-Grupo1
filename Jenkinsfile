pipeline {
    agent {docker { image 'maven:3.5.4' } }
    stages {
        stage('Build') {
            steps {
                sh 'mvn --version'
            }
        }
        stage('Test') {
            steps {
                echo 'Aqui iran los test'
            }
        }
    }
}