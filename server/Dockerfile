FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . ./

ENV MONGO_URL=mongodb+srv://rohitParjapat:rohitParjapat@cluster0.yde0bnb.mongodb.net/?retryWrites=true&w=majority
ENV AWS_S3_ACCESS_KEY=AKIA6NSDGRJG3T4AADCW
ENV AWS_S3_SECRET_KEY=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
ENV GOOGLE_CLIENT_ID=652147979498-g3ls2sge9tgl53c1p4nstvtj1vm81131.apps.googleusercontent.com
ENV GOOGLE_SECRET_ID=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

RUN npm run build

CMD [ "npm","run","start" ]