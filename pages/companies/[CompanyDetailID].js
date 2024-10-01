// pages/companies/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const CompanyDetail = () => {
  const [company, setCompany] = useState(null);
  const router = useRouter();
  const { CompanyDetailID} = router.query;

  useEffect(() => {
    if (CompanyDetailID) {
      fetch(`/api/companies/${CompanyDetailID}`)
        .then((res) => res.json())
        .then((data) => setCompany(data));
    }
  }, [CompanyDetailID]);

  if (!company) return <p>Loading...</p>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>Industry: {company.industry}</p>
      <p>Description: {company.description}</p>
      <p>Created At: {new Date(company.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default CompanyDetail;
