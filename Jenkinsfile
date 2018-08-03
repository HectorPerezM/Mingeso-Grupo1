pipeline {
    agent any
    tools {
        maven 'Maven 3.5.4'
        jdk 'jdk8'
    }
    stages {
        stage('Build') {
            steps {
                sh 'mvn --version'
		    }
        }
        stage('Test') {
            steps {
                // sh 'cd backend && mvn sonar:sonar \
                //     -Dsonar.host.url=http://localhost:9000 \
                //     -Dsonar.login=000742e847d18dc752d5581789982fa4a6e3fa5c'
                echo 'Aqui va Sonarqube'
            }
        }
    }
}