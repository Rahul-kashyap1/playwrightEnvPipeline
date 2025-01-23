pipeline {
    agent any
     parameters {
        string(name: 'stage', defaultValue: 'stage', description: 'Stage environment')
        string(name: 'dev', defaultValue: 'dev', description: 'Dev environment')
        choice(name: 'ENVIRONMENT', choices: ['dev', 'stage'], description: 'Select the environment')
    }
    environment {
        STAGING_ENV = "${params.stage}"
        DEV_ENV = "${params.dev}"
        ENV = "${params.ENVIRONMENT}"
    }
    stages {

        stage('Checkout Code') {
            steps {
                // Replace with your Git repository URL and branch
                git branch: 'main', url: 'https://github.com/Rahul-kashyap1/playwrightEnvPipeline.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                bat '''
                npm install
                '''
            }
        }
        stage('Install playwright') {
            steps {
                // Install project dependencies
                bat '''
                npx playwright install
                '''
            }
        }
        stage('Run Playwright Tests') {
            steps {
                bat """
                npm run "${ENV}"
                """
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
        success {
            echo 'Tests ran successfully.'
        }
        failure {
            echo 'Tests failed. Check the logs for details.'
        }
    }

}
