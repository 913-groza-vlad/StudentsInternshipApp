export type Internship = {
  id: number,
  title: string,
  summary: string,
  salary: number,
}

export const internshipsHardcodedInitialState = [
  {
    "id": 1,
    "title": "Ruby on Rails + React Full-Stack Intern",
    "summary": "You will be responsible for building and maintaining a dynamic internships platform, using Ruby on Rails for backend development and React for the frontend. They will develop and integrate APIs, manage the database, and create user-friendly, responsive interfaces, ensuring a seamless experience for both students and companies. This role requires collaboration with other team members to deliver high-quality, scalable solutions.",
    "salary": 2000
  },
  {
    "id": 2,
    "title": "Digital Marketing Intern",
    "summary": "As a Digital Marketing Intern, you will assist in creating and executing online marketing campaigns, managing social media accounts, analyzing performance data, and contributing to content creation. This role will provide hands-on experience in SEO, SEM, content marketing, and social media strategy.",
    "salary": 1500
  },
  {
    "id": 3,
    "title": "Product Management Intern",
    "summary": "The Product Management Intern will work closely with the product team to define features, create user stories, and prioritize tasks. You will assist with market research, gathering customer feedback, and collaborating on the development and launch of new product features.",
    "salary": 2200
  },
  {
    "id": 4,
    "title": "Graphic Design Intern",
    "summary": "The Graphic Design Intern will assist in creating visual assets for marketing campaigns, social media, websites, and other digital content. This role involves collaboration with the design and marketing teams to produce engaging, brand-consistent designs.",
    "salary": 1800
  },
  {
    "id": 5,
    "title": "Business Development Intern",
    "summary": "As a Business Development Intern, you will support the sales and marketing teams by identifying new business opportunities, preparing proposals, conducting market research, and assisting in client outreach efforts. This role offers valuable exposure to the business growth process.",
    "salary": 1600
  },
  {
    "id": 6,
    "title": "Human Resources Intern",
    "summary": "The HR Intern will support the HR team in recruitment, employee engagement, onboarding, and other HR processes. You will help in organizing training sessions, maintaining employee records, and assisting with performance reviews and HR compliance.",
    "salary": 1700
  }
]

export const getInternshipsFromLocalStorage = () => {
  const storedInternships = localStorage.getItem("internships");

  // If internships exist in localStorage, return them, else store the default and return it
  if (storedInternships) {
    return JSON.parse(storedInternships);
  } else {
    localStorage.setItem("internships", JSON.stringify(internshipsHardcodedInitialState));
    return internshipsHardcodedInitialState;
  }
};