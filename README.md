# Integrate React into a Spring Boot application
An example on how to integrate React into a Spring Boot application for simple playground projects.

1. Spring Initializer (web starter)
2. ````npx crate-react-app frontend````
3. Move node_modules, package.json package-lock.json from frontend directory to Spring Boot app source directory and merge .gitignore files
4. Move frontend/public/* files to src/main/static/
5. Move frontend/src/* files to src/main/js and src/test/js
6. ```npm install react-app-rewired --save-dev```
7. Create a config-overrides.js file
8. Adapt package.json to use react-app-rewired instead of react-scripts
9. Add "proxy": "http://localhost:8080" to package.json
10. The frontend-maven-plugin will build the React frontend and add it to the packaged JAR file
