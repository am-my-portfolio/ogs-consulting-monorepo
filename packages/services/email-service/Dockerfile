FROM node:18-slim

WORKDIR /dryft

RUN npm i -g yarn@berry

RUN node -v

RUN npm -v

COPY package*.json tsconfig.json ./

COPY ./packages/services/admin-svc/package.json ./packages/services/admin-svc/package-lock.json /dryft/packages/services/admin-svc/

COPY ./packages/shared/*/package-*.json /dryft/packages/shared/

RUN npm ci

COPY ./packages/services/admin-svc /dryft/packages/services/admin-svc/

COPY ./packages/shared/* /dryft/packages/shared/

RUN npm run build

WORKDIR /dryft/packages/services/admin-svc

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "executable" ]