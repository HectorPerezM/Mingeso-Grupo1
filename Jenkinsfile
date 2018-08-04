pipeline {
    agent any
    tools {
        maven 'maven'
        jdk 'jdk'
    }
    stages {
        stage('Build') {
            steps {
                dir('backend') {
                    sh 'mvn validate'
                    sh 'mvn compile'
                    sh 'mvn package'
                }
		    }
        }
        // stage('Test') {
        //     steps {
        //         sh 'cd backend && mvn sonar:sonar \
        //             -Dsonar.host.url=http://localhost:9000 \
        //             -Dsonar.login=000742e847d18dc752d5581789982fa4a6e3fa5c'
                
        //     }
        // }
    }
}