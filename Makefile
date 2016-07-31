.PHONY: test
test:
ifeq ($(TRAVIS),)
	@npm run test:nyc
else
	@npm run test:coveralls
endif
