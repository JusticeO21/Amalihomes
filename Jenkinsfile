pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        def scannerHome = tool 'SonarQube'
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Testing pipeline') {
            steps {
                script {
                    echo 'Testing pipeline<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>'
                }
            }
        }
    }

    post {
        always {
            echo 'One way or another, I have finished'
            cleanWs()
        }
        success {
            script {
                withAWS(region: 'eu-west-1', credentials: 'aws-cred') {
                    echo 'operation successful'
                }
            }
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            script {
                withAWS(region: 'eu-west-1', credentials: 'aws-cred') {
                    echo 'operation failed'
                }
            }
        }
        changed {
            echo 'Things were different before...'
        }
    }
}

