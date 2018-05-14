pipeline {
    agent any
    stages
    {
      stage('Build')
      {
        steps
        {
          dir('backend')
          {
            withMaven(maven : 'maven')
            {
              sh 'mvn clean compile'
            }
          }
		    }
      }
      stage('Test')
      {
        steps
        {
	  //build('Load_Tester')
          dir('backend')
          {
            withMaven(maven : 'maven')
            {
              sh 'mvn test'
            }
          } 
        }
      }
      stage('Deploy')
      {
        steps
        {
          dir('backend')
          {
            withMaven(maven : 'maven')
            {
              sh 'mvn -Dmaven.tomcat.port=8082 tomcat:deploy'
            }
          }
        }
      }
    }
}

