require('dotenv').config();

console.log("Deploying to bucket: ", process.env.S3_BUCKET);
console.log("REGION: ", process.env.S3_REGION);

const deploy = require('s3-website').deploy,
  AWS = require('aws-sdk'),
  s3 = new AWS.S3({ region: process.env.S3_REGION });

deploy(s3, { region: process.env.S3_REGION, uploadDir: 'build', domain: process.env.S3_BUCKET }, (err, website) => {
  if(err) {
    throw err;
  }
  console.log(website);
})