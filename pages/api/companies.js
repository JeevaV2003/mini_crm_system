// pages/api/companies.js
import connectDB from '../../connection/mongodb';
import Company from '../../models/Company';

export default async function handler(req, res) {
  await connectDB();
  
  if (req.method === 'POST') {
    try {
      const newCompany = await Company.create(req.body);
      res.status(201).json(newCompany);
    } catch (error) {
      res.status(400).json({ error: 'Company creation failed' });
    }
  } else if (req.method === 'GET') {
    try {
      const companies = await Company.find(); // This should return all companies
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch companies' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
