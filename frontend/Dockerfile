# Build the React application
FROM node:alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --fetch-retries=5 --fetch-retry-factor=2 --fetch-retry-mintimeout=10000
COPY . .
RUN npm run build

# Serve the application with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
