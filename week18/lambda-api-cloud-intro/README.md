# ✅ Week 18 – AWS Lambda, API Gateway & Environment Variables

This week’s assignment focuses on understanding **cloud computing** using **AWS Lambda**, **API Gateway**, and **environment variables**. We explored how serverless functions are created, deployed, and exposed as API endpoints on AWS.

---

## 🎯 Objectives

- Understand cloud computing and its relevance to backend development.
- Create and deploy a Lambda function using Node.js.
- Trigger the Lambda via API Gateway (HTTP API).
- Use environment variables to customize Lambda responses.
- Test everything using the browser/Postman.

---

## 📌 What Is Cloud Computing?

Cloud computing delivers computing services (servers, storage, databases, networking, software, etc.) over the internet to offer faster innovation, flexible resources, and economies of scale.

### 💡 Benefits for Backend Developers

- 🚀 **Scalability** – Automatically adjust to traffic.
- 💰 **Cost-Efficiency** – Pay only for what you use.
- 🧰 **Flexibility** – Deploy new features with minimal infrastructure management.
- 🔐 **Security** – Built-in features for access control and data safety.

---

## 🛠️ Step-by-Step Implementation

### 1️⃣ **Created a Node.js Lambda Function**

- Logged in to [AWS Lambda Console](https://console.aws.amazon.com/lambda/)
- Created a new Lambda function named `helloLambda`
- Selected runtime: **Node.js 18.x**
- Used this function code:


// index.mjs or handler.js
export const handler = async (event) => {
    const greeting = process.env.GREETING || "Hello from Lambda!";
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: greeting,
            statusCode: 200
        }),
    };
};
2️⃣ Set Environment Variable
In Lambda configuration, under Configuration > Environment variables, added:

GREETING = Welcome to Cloud!


![Lambda Screenshot](week18/lambda-api-cloud-intro/assets/lambaa.png)
![Lambda Screenshot](week18/lambda-api-cloud-intro/assets/lamba.png)

3️⃣ Created an API Gateway
API Gateway Console

Created a new HTTP API named helloLambda

Added a route:

Path: /hello

Method: GET

Integration Target: the Lambda function created above

Deployed the API 

4️⃣ Tested the Endpoint
Copied the Invoke URL:
### ✅ Successful API Response using browser

https://vbb76qt8q4.execute-api.us-east-1.amazonaws.com/helloTested 

![Response Screenshot](week18/lambda-api-cloud-intro/assets/webtest.png)

{
  "message": "Welcome to Cloud!",
  "statusCode": 200
}

✅ Successful response Postman
![Response Screenshot](week18/lambda-api-cloud-intro/assets/postman.png)


Also tested using curl:
curl https://vbb76qt8q4.execute-api.us-east-1.amazonaws.com/hello



📤 How to Deploy and Test
Write your Lambda function with environment variables.

Create an HTTP API from API Gateway.

Connect your Lambda as the integration target.

Deploy the API to a stage.

![API Gateway Screenshot](week18/lambda-api-cloud-intro/assets/apigate.png)



📂 Project Structure (optional if deploying via console)

lambda-api-cloud-intro/
├── index.js
├── README.md
├── function.zip
└── assets/
    ├── apigate.png
    ├── lamba.png
    └── postman.png

🚀 Final Thoughts
This assignment provides a hands-on introduction to serverless architecture using AWS services. It demonstrates how backend developers can offload infrastructure responsibilities while deploying production-grade APIs.

💡 “Serverless lets you focus on code — not servers.” – AWS