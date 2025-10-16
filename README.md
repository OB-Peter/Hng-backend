# 🧑‍💻 HNG Zero Task – "Me" Endpoint

## 🚀 Overview
This project is part of the **HNG Zero Internship**.  
It’s a simple **Node.js/Express** endpoint that fetches a random cat fact from an external API and returns it along with the developer’s basic information in JSON format.

## 📦 Endpoint Description
**Route:** `/api/me` *(or as configured)*  
**Method:** `GET`  

### ✅ Example Response
```json
{
  "status": "success",
  "user": {
    "email": "Obpeterapp@gmail.com",
    "name": "Oluyemi Boluwatife Peter",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T17:43:21.123Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
