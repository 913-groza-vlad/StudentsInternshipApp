import { Company } from "../models/Company";

const companies: Company[] = [
  {
    id: 1,
    companyName: 'Google',
    industry: 'Technology',
    mission: 'To organize the world’s information and make it universally accessible and useful.',
    location: 'USA',
  },
  {
    id: 2,
    companyName: 'Tesla',
    industry: 'Automotive',
    mission: 'To accelerate the world’s transition to sustainable energy.',
    location: 'USA',
  },
  {
    id: 3,
    companyName: 'Nike',
    industry: 'Sportswear',
    mission: 'To bring inspiration and innovation to every athlete in the world.',
    location: 'USA',
  },
];

export const companyService = {
  getCompanyById: (id: number): Company | undefined => {
    return companies.find((company) => company.id === id);
  },

  updateCompany: (updatedCompany: Company): boolean => {
    const index = companies.findIndex((company) => company.id === updatedCompany.id);

    if (index !== -1) {
      companies[index] = { ...companies[index], ...updatedCompany };
      return true;
    }

    return false;
  },

  addCompany: (newCompany: Company): void => {
    const nextId = companies.length > 0 ? companies[companies.length - 1].id + 1 : 1;
    companies.push({ ...newCompany, id: nextId });
  },

  getAllCompanies: (): Company[] => {
    return companies;
  },

  deleteCompany: (id: number): boolean => {
    const index = companies.findIndex((company) => company.id === id);

    if (index !== -1) {
      companies.splice(index, 1);
      return true;
    }

    return false;
  },
};
