import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  industry: { type: String, required: true },
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Company || mongoose.model('Company', companySchema);
