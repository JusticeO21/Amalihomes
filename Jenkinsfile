pipeline {
    agent any

    tools {
        nodejs "node22"
    }

    stages {

        stage('Install pnpm') {
            steps {
                sh 'npm install -g pnpm'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'rm -rf node_modules'
                sh 'pnpm install'
            }
        }

        // stage('Linting') {
        //     steps {
        //         script {
        //             echo 'Running ESLint...'
        //             sh 'pnpm run lint'
        //         }
        //     }
        // }

        stage('Build Application') {
            steps {
                sh 'pnpm run build'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'pnpm test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        def scannerHome = tool 'SonarQube'
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }


    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
        success {
            withAWS(region: 'eu-west-1', credentials: 'aws-cred') {
                echo 'Build and test succeeded!'
            }
        }
        failure {
            withAWS(region: 'eu-west-1', credentials: 'aws-cred') {
                echo 'Build failed!'
            }
        }
    }

}

