// app/api/companies/[companiesID].js
import connectDB from '../../../connection/mongodb';
import Company from '../../../models/Company';

export default async function handler(req, res) {
  await connectDB();
  const { companiesID } = req.query;
  if (req.method === 'GET') {
    try {
      const company = await Company.findById(companiesID);
      if (!company) {
        return res.status(404).json({ error: 'Company not found' });
      }
      res.status(200).json(company);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch company' });
    }
  }
}
