import careoptImg from '../assets/projects/careopt.png'
import anomalyImg from '../assets/projects/anomaly.png'

export const projects = [
  {
    id: 1,
    title: 'CareOpt AI',
    status: 'Completed',
    domain: 'Healthcare AI',
    description:
      'Healthcare decision-support platform that recommends affordable hospitals based on treatment type, city, and budget.',
    image: careoptImg,
    icon: '🏥',
    tech: ['FastAPI', 'PostgreSQL', 'React', 'Tailwind', 'Leaflet'],
    additionalInfo: null,
    github: 'https://github.com/Akash2126/careopt-ai',
    liveDemo: 'careopt-demo',
    doc: 'https://drive.google.com/file/d/1lqZSZ6BmCQelS-BwSWUQOX8RAgQX_00t/view',
    caseStudy: '/case-study/careopt-ai',
  },
  {
    id: 2,
    title: 'Product Return Probability Predictor',
    status: 'Completed',
    domain: 'E-commerce AI',
    description:
      'Machine learning system predicting the likelihood of product returns in e-commerce platforms.',
    image: null,
    icon: '📦',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    additionalInfo: null,
    github: 'https://github.com/Akash2126/product-return-probability-predictor',
    liveDemo: 'product-return-demo',
    doc: 'https://docs.google.com/document/d/1kHzZmdqmpdXkZvTOSQlInvgnXzB3LCICZ6xBtRDHF8A/edit',
    caseStudy: '/case-study/product-return-predictor',
  },
  {
    id: 3,
    title: 'AI-Driven Healthcare Anomaly Detection',
    status: 'Completed',
    tag: 'Healthcare Monitoring',
    description:
      'Real-time patient monitoring system detecting abnormal vitals using streaming data pipelines and ML models including Autoencoders and Isolation Forest.',
    image: anomalyImg,
    icon: '📡',
    tags: ['Python', 'Kafka', 'Flask', 'PostgreSQL', 'Autoencoder', 'Isolation Forest'],
    additionalInfo: {
      'Model': 'Autoencoder + Isolation Forest',
      'Pipeline': 'Kafka Streaming',
      'Database': 'PostgreSQL'
    },
    github: 'https://github.com/Akash2126/AI-Driven-Healthcare-Anomaly-Detection-System',
    liveDemo: 'healthcare-anomaly-demo',
    doc: 'https://drive.google.com/file/d/1-meLq8AvsrHulCzaONwCi7nFze4haBgB/view',
    caseStudy: '/case-study/healthcare-anomaly-detection',
  },
  {
    id: 4,
    title: 'FinRelief AI',
    domain: 'Financial AI',
    status: 'In Progress',
    description:
      'AI-driven financial decision-support platform for loan optimization and financial analysis. Uses intelligent algorithms to personalize financial recommendations.',
    image: null,
    icon: '💰',
    tech: ['Python', 'FastAPI', 'React', 'ML', 'PostgreSQL'],
    additionalInfo: null,
    github: 'https://github.com/Akash2126/finrelief-ai',
    liveDemo: 'finrelief-demo',
    caseStudy: '/case-study/finrelief-ai',
  },
]

const buttonConfig = {
  code: { label: 'View Code', icon: '{ }' },
  demo: { label: 'Live Demo', icon: '▶' },
  doc: { label: 'Project Doc', icon: '📄' },
  case: { label: 'Case Study', icon: '🔍' },
  coming: { label: 'Coming Soon', icon: '⏳' },
}

export const getButtonConfig = () => buttonConfig

