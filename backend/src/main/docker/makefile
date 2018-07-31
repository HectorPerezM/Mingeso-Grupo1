.PHONY: install
install:
	cd ../../../; mvn clean package docker:build
	docker-compose up

.PHONY: build
build:
	cd ../../../; mvn clean package docker:build

.PHONY: run
run:
	docker-compose up

.PHONY: clean
clean:
	rm -R ../../../target

.PHONY: down
down:
	docker-compose down

.PHONY: destroy
destroy:
	rm -R ../../../target
	docker-compose down