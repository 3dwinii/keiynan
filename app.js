// const express = require('express');
// const bodyParser = require('body-parser');


const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "b38b8f7dc396ed3ab56625aaaf41ddec-us21",
  server: "us21",
});

const list = homies;
const footerInfo = {
    company: 'Keiynan Lonsdale',
    city: 'Sydney',
    country: 'Australia'
}
const campaignDefaults = {
    fromName: 'Keiynan',
    fromEmail: 'edwinamessenger@icloud.com', //needs to be changed!
    subject: 'Life Updates 🥰',
    language: 'EN-US'
}



async function run() {
    let res = await mailchimp.ping.get();
    console.log(res)
}


run()

// async function run() {
//   const response = await mailchimp.ping.get();
//   console.log(response);
// }

// run();
