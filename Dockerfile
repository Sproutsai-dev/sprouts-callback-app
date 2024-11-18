FROM node:22.4.1-slim as build
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .

RUN npm run build

FROM nginx:1.27.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf

# # add env.sh to docker-entrypoint.d
# COPY env.sh /docker-entrypoint.d/env.sh

# EXPOSE 80
# RUN chmod +x /docker-entrypoint.d/env.sh