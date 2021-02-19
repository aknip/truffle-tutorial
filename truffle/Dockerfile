FROM node:10

# Install Truffle
RUN npm install -g truffle
RUN npm config set bin-links false

# Move Contract Files
# => Removed copy operations, replaced by Volume mappings in docker-compose-dev.yml
# COPY contracts ./contracts
# COPY migrations ./migrations
# COPY test ./test
COPY truffle-config.js ./truffle-config.js

# Move React Files
# => Removed copy operations, replaced by Volume mappings in docker-compose-dev.yml
# COPY app/src ./app/src
# COPY app/public ./app/public
COPY app/package.json ./app/package.json
COPY app/package-lock.json ./app/package-lock.json

# Clean Install NPM Dependencies
RUN cd app && npm ci




