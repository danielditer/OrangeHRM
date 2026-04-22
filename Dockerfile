FROM cypress/included:14.0.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV CYPRESS_username=Admin
ENV CYPRESS_password=admin123

CMD ["npm", "run", "smoke"]