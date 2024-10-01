# Mini Company Requirement Management System

## Description
This is a web-based Mini Company Requirement Management (CRM) system designed to help users manage company details, track interactions, and streamline processes. It provides a simple interface for adding, viewing, and managing company information.

## Features
- **Company Management:** Add and view company profiles.
- **User Authentication:** not included you can add according to your requirement.
- **Interactive Dashboard:** View all registered companies in a user-friendly interface.
- **Responsive Design:** Accessible from desktops devices.

## Prerequisites

- **Node.js:** Download and install Node.js
- **MongoDB:** You can use MongoDB Compass to manage your database.
- **VS Code:** Download and install VS Code

## Installation & Set Up

1. Install project dependencies

```bash
  npm install
```

2. Add environment variables on your `.env`

```env
  MONGO_URI=mongodb://localhost:27017/mini-crm
```

3. Start the development server

```bash
  npm run dev
```
### Usage
Navigate to http://localhost:3000 to view the home page. Go to /create-company to create a new company. Go to /view-companies to see all the companies.



