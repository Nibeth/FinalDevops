pipeline{
    agent none
    stages{
        stage ("Get app code"){
        agent {label 'master'}
        steps{
            git 'https://github.com/Nibeth/FinalDevops.git'
            echo "Repository cloned"
            }
        }
        stage ("Build"){
            agent {docker 'trion/ng-cli:8.2.0'}
            steps{
             sh "npm install"
             sh "ng build --prod --base-href=/coches/"
            }
        }
       /* stage ("Run unit test "){
            agent {docker 'trion/ng-cli:8.2.0'}
            steps{
             sh "ng test"
            }
        }*/
        stage ("Archive artifact"){
            agent {label 'master'}
            steps{
                 archiveArtifacts 'dist/'
                sh "docker build -t nibeth/coches ."
                sh "docker save -o coches.tar nibeth/coches"
                stash name: "stash-artifact", includes: "coches.tar"
            }
        }
         stage ("Deploy QA server"){
            agent {label 'master'}
            steps{
                sh "docker rm coches -f || true"
                sh "docker run -d -p 8085:8080 --name coches nibeth/coches"
            }
        }
        stage ("Deployment PROD"){
            agent {label 'master'}
            steps{
                sh "ansible-playbook playbook.yml"
                
            }
        }
    }
}

