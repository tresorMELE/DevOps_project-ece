FROM node:14

# Create a directory for the app
RUN mkdir -p /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json file to the image
COPY package.json /usr/src/app/

# Install dependencies
RUN npm install

# Copy the rest of the app code to the image
COPY . /usr/src/app/

# Expose the app's port
EXPOSE 3000

# Run the app when the container starts
CMD ["npm", "start"]
