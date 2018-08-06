pipeline {
    agent any
    tools {
        maven 'maven'
        jdk 'jdk'
    }
    stages {
        stage('Build') {
            steps {
                sh 'cd backend && mvn validate && mvn compile'
		    }
        }
        stage('Test') {
            steps {
                sh 'cd backend && mvn sonar:sonar \
                //     -Dsonar.host.url=http://localhost:9000 \
                //     -Dsonar.login=000742e847d18dc752d5581789982fa4a6e3fa5c'

                //build('Load_Tester')
            }
        }
        stage('Desploy') {
            steps {
                sh 'cd backend && mvn clean deploy'
            }
        }
    }
}