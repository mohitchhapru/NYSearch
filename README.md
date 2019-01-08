New York Search Engine

How to start locally:

	* git clone https://github.com/mohitchhapru/NYSearch.git
	* Start Back-End:
		- cd NYSearch/api-gateway/
		- ./gradlew  // wraper command to build
    		- (Please follow same steps for "eureka-server" and "users-api" project
		- docker-compose up // on NYSearch root directory		
	* Front-End
		- navigate to UI directory
		- npm i
		- ng serve -o
