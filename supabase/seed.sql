-- seed.sql
INSERT INTO
  ticket_table (
    user_id,
    title,
    description,
    target_department,
    source_department,
    fulfill_message,
    reject_message
  )
VALUES
  (
    'user-1',
    'API Integration',
    'Integrate the new payment gateway API for seamless transactions.',
    'engineering',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-2',
    'Website Redesign',
    'Redesign the company website to improve user engagement.',
    'design',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-3',
    'Marketing Strategy',
    'Develop a strategy for the upcoming product launch.',
    'marketing',
    'financial',
    'Approved with changes.',
    NULL
  ),
  (
    'user-4',
    'Data Backup Automation',
    'Automate data backup processes across departments.',
    'engineering',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-5',
    'Office Layout Optimization',
    'Reorganize office layout for better collaboration.',
    'main office',
    'design',
    NULL,
    NULL
  ),
  (
    'user-6',
    'Financial Audit Preparation',
    'Prepare for the end-of-year financial audit.',
    'financial',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-7',
    'Security Upgrade',
    'Upgrade network security to protect sensitive data.',
    'engineering',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-8',
    'Brand Identity Refresh',
    'Update brand guidelines to reflect modern values.',
    'design',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-9',
    'Customer Feedback Analysis',
    'Analyze feedback from recent customer surveys.',
    'marketing',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-10',
    'Internal Training Program',
    'Develop a training program for new software tools.',
    'main office',
    'engineering',
    NULL,
    NULL
  ),
  (
    'user-11',
    'Product Packaging Design',
    'Design packaging for the new product line.',
    'design',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-12',
    'Database Optimization',
    'Optimize the company database for faster queries.',
    'engineering',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-13',
    'Social Media Campaign',
    'Launch a targeted social media campaign for brand awareness.',
    'marketing',
    'design',
    NULL,
    NULL
  ),
  (
    'user-14',
    'Expense Reduction Plan',
    'Identify areas to reduce operational costs.',
    'financial',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-15',
    'Employee Engagement Survey',
    'Conduct a survey to gauge employee satisfaction.',
    'main office',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-16',
    'Mobile App Development',
    'Develop a mobile app to enhance customer experience.',
    'engineering',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-17',
    'Sales Forecasting',
    'Create sales forecasts for the next quarter.',
    'financial',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-18',
    'Cloud Migration',
    'Migrate legacy systems to the cloud for scalability.',
    'engineering',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-19',
    'Annual Report Preparation',
    'Compile data for the annual report to stakeholders.',
    'financial',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-20',
    'SEO Optimization',
    'Optimize website content for better search engine rankings.',
    'marketing',
    'design',
    NULL,
    NULL
  ),
  (
    'user-21',
    'Vendor Management System',
    'Implement a new system to manage vendor relationships.',
    'main office',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-22',
    'Cybersecurity Training',
    'Train employees on the latest cybersecurity practices.',
    'engineering',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-23',
    'Product Feature Enhancement',
    'Enhance the existing product features based on customer feedback.',
    'engineering',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-24',
    'Content Creation Plan',
    'Develop a plan for consistent content creation across channels.',
    'marketing',
    'design',
    NULL,
    NULL
  ),
  (
    'user-25',
    'Financial Compliance Audit',
    'Ensure all financial processes meet regulatory standards.',
    'financial',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-26',
    'Intranet Redesign',
    'Redesign the company intranet for better usability.',
    'design',
    'engineering',
    NULL,
    NULL
  ),
  (
    'user-27',
    'Data Privacy Compliance',
    'Implement measures to comply with data privacy laws.',
    'engineering',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-28',
    'Product Launch Event Planning',
    'Plan and execute the upcoming product launch event.',
    'marketing',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-29',
    'Expense Tracking System',
    'Implement a system for tracking departmental expenses.',
    'financial',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-30',
    'Cross-Department Collaboration',
    'Facilitate collaboration between marketing and engineering teams.',
    'main office',
    'engineering',
    NULL,
    NULL
  ),
  (
    'user-31',
    'Supply Chain Optimization',
    'Optimize the supply chain for faster deliveries.',
    'financial',
    'engineering',
    NULL,
    NULL
  ),
  (
    'user-32',
    'UX/UI Enhancement',
    'Improve the user experience and interface of our website.',
    'design',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-33',
    'Market Research Report',
    'Conduct market research for potential expansion.',
    'marketing',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-34',
    'Network Infrastructure Upgrade',
    'Upgrade network infrastructure to improve performance.',
    'engineering',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-35',
    'Corporate Presentation',
    'Prepare a presentation for the upcoming board meeting.',
    'main office',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-36',
    'Business Intelligence Tools',
    'Implement BI tools to enhance decision-making.',
    'financial',
    'engineering',
    NULL,
    NULL
  ),
  (
    'user-37',
    'Product Prototyping',
    'Create a prototype for the next-gen product.',
    'engineering',
    'design',
    NULL,
    NULL
  ),
  (
    'user-38',
    'Public Relations Strategy',
    'Develop a PR strategy to improve public perception.',
    'marketing',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-39',
    'Operational Efficiency Audit',
    'Audit current operations to identify inefficiencies.',
    'main office',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-40',
    'E-commerce Platform Update',
    'Update the e-commerce platform with new features.',
    'engineering',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-41',
    'Customer Satisfaction Survey',
    'Launch a survey to gauge customer satisfaction.',
    'marketing',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-42',
    'Product Lifecycle Management',
    'Implement a product lifecycle management system.',
    'engineering',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-43',
    'Market Penetration Strategy',
    'Create a strategy for deeper market penetration.',
    'marketing',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-44',
    'Software Licensing Audit',
    'Audit current software licenses to ensure compliance.',
    'engineering',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-45',
    'Brand Equity Study',
    'Conduct a study to measure brand equity.',
    'marketing',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-46',
    'Customer Support System Upgrade',
    'Upgrade the customer support ticketing system.',
    'engineering',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-47',
    'Strategic Partnership',
    'Identify and establish strategic partnerships.',
    'main office',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-48',
    'Financial Risk Assessment',
    'Assess financial risks and create mitigation plans.',
    'financial',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-49',
    'Employee Retention Program',
    'Develop a program to improve employee retention.',
    'main office',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-50',
    'Automation of Repetitive Tasks',
    'Automate repetitive tasks to improve productivity.',
    'engineering',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-51',
    'Competitive Analysis',
    'Analyze competitors to refine our market position.',
    'marketing',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-52',
    'Capital Expenditure Planning',
    'Plan capital expenditures for the upcoming fiscal year.',
    'financial',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-53',
    'Internal Communications Improvement',
    'Enhance internal communications across departments.',
    'main office',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-54',
    'New Feature Rollout',
    'Plan the rollout of new features for the main product.',
    'engineering',
    'marketing',
    NULL,
    NULL
  ),
  (
    'user-55',
    'Employee Wellness Initiative',
    'Implement initiatives to improve employee wellness.',
    'main office',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-56',
    'Operational Cost Analysis',
    'Analyze and reduce operational costs.',
    'financial',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-57',
    'Sales Process Optimization',
    'Optimize the sales process for better conversion rates.',
    'marketing',
    'financial',
    NULL,
    NULL
  ),
  (
    'user-58',
    'Innovation Workshop',
    'Organize a workshop to foster innovation.',
    'engineering',
    'design',
    NULL,
    NULL
  ),
  (
    'user-59',
    'Financial Projections',
    'Create financial projections for the next five years.',
    'financial',
    'main office',
    NULL,
    NULL
  ),
  (
    'user-60',
    'Website Performance Monitoring',
    'Implement monitoring tools for website performance.',
    'engineering',
    'marketing',
    NULL,
    NULL
  );

INSERT INTO
  user_table (sender_id, name, user_department)
VALUES
  ('clerk_001', 'Alice Johnson', 'main office'),
  ('clerk_002', 'Bob Smith', 'main office'),
  ('clerk_003', 'Charlie Brown', 'main office'),
  ('clerk_004', 'Diana Prince', 'engineering'),
  ('clerk_005', 'Ethan Hunt', 'engineering'),
  ('clerk_006', 'Fiona Gallagher', 'engineering'),
  ('clerk_007', 'George Michael', 'design'),
  ('clerk_008', 'Hannah Montana', 'design'),
  ('clerk_009', 'Ian McKellen', 'design'),
  ('clerk_010', 'Jack Sparrow', 'marketing'),
  ('clerk_011', 'Karen Page', 'marketing'),
  ('clerk_012', 'Luke Cage', 'marketing'),
  ('clerk_013', 'Monica Geller', 'financial'),
  ('clerk_014', 'Nancy Drew', 'financial'),
  ('clerk_015', 'Oscar Isaac', 'financial');