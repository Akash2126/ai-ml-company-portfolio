import awsImg from '../assets/certifications/aws.png'
import googleImg from '../assets/certifications/google.png'
import ibmImg from '../assets/certifications/ibm.png'
import linkedinImg from '../assets/logos/LinkedIn.png'
import microsoftImg from '../assets/logos/microsoft.png'

export const certifications = [
  {
    id: 1,
    title: 'AWS Data Engineering Virtual Internship',
    issuer: 'Amazon Web Services',
    description:
      'Hands-on experience with AWS data services including S3, Redshift, and Glue for building data pipelines.',
    image: awsImg,
    logo: awsImg,
    badgeColor: '#FF9900',
    link: '#',
  },
  {
    id: 2,
    title: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    description:
      'Foundational understanding of AWS cloud services, architecture best practices, and core AWS solutions.',
    image: awsImg,
    logo: awsImg,
    badgeColor: '#FF9900',
    certificateLink: 'https://drive.google.com/file/d/1FQ6xpzMLRGbR3PVoiVjIolk6pKKqd7r1/view',
    verified: true
  },
  {
    id: 3,
    title: 'Google Gemini AI Certification',
    issuer: 'Google Cloud',
    description:
      'Certification covering Gemini AI models, multimodal AI applications, and prompt engineering techniques.',
    image: googleImg,
    logo: googleImg,
    badgeColor: '#4285F4',
    certificateLink: 'https://u.google.accredible.com/e6fb658b-d4e2-4478-b074-8c8e7a2b705e#acc.UoHJuaTP',
    verified: true
  },
  {
    id: 4,
    title: 'Python for Data Science',
    issuer: 'IBM',
    description:
      'Comprehensive Python programming, including NumPy fundamentals for data science and Pandas libraries.',
    image: ibmImg,
    logo: ibmImg,
    badgeColor: '#054ADA',
    certificateLink: "https://www.credly.com/badges/6527a176-a637-452e-b5eb-7ec59173b08c/public_url",
    verified: true
  },
  {
    id: 5,
    title: 'Quantum Enigmas',
    issuer: 'IBM',
    description:
      'Introduction to quantum computing concepts, quantum algorithms, and their applications in solving complex problems.',
    image: ibmImg,
    logo: ibmImg,
    badgeColor: '#054ADA',
    certificateLink: 'https://www.credly.com/badges/7ddb513c-d57a-454b-8d02-c06ddc48c39d/public_url',
    verified: true
  },
  {
    id: 6,
    title: 'Learning Data Analytics: 1 Foundations',
    issuer: 'LinkedIn Learning',
    description:
      'Covers foundational concepts of data analytics including data interpretation, analytical thinking, and real-world data skills.',
    image: ibmImg,
    logo: linkedinImg,
    badgeColor: '#0A66C2',
    link: 'https://www.linkedin.com/learning/certificates/49e48791ba5c7495ff68f82d91c1eee8e050f57abdcca78f37958cd2692f4f1e',
  },
  {
    id: 7,
    title: 'Introduction to Vibe Coding',
    issuer: 'Microsoft Learn',
    description:
      'Microsoft Learn module covering modern development workflows and AI-assisted coding practices.',
    logo: microsoftImg,
    badgeColor: '#00A4EF',
    certificateLink: 'https://learn.microsoft.com/en-us/users/akashkumartiwari-7731/achievements/2j8lh5zv',
    verified: true
  },
]

