import { TicketType, UserType } from "@/supabase/functions/common/schema"
import { v4 as uuidv4 } from "uuid"

export const users: UserType[] = [
  {
    id: uuidv4(),
    clerk_id: "clerk_01",
    name: "Alice Johnson",
    user_department: "engineering",
    avatar: ["https://example.com/avatar1.png"],
  },
  {
    id: uuidv4(),
    clerk_id: "clerk_02",
    name: "Bob Smith",
    user_department: "design",
    avatar: ["https://example.com/avatar2.png"],
  },
  {
    id: uuidv4(),
    clerk_id: "clerk_03",
    name: "Charlie Brown",
    user_department: "marketing",
    avatar: ["https://example.com/avatar3.png"],
  },
  {
    id: uuidv4(),
    clerk_id: "clerk_04",
    name: "Dana White",
    user_department: "financial",
    avatar: ["https://example.com/avatar4.png"],
  },
  {
    id: uuidv4(),
    clerk_id: "clerk_05",
    name: "Eve Davis",
    user_department: "main office",
    avatar: ["https://example.com/avatar5.png"],
  },
]

export const tickets: TicketType[] = [
  {
    id: uuidv4(),
    user_id: "user-1",
    title: "Update Network Security",
    description: "Enhance the security of the office network.",
    target_department: "engineering",
    source_department: "main office",
    status: "fulfilled",
    fulfill_message: "Network security updated successfully.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-2",
    title: "Design New Product Packaging",
    description: "Create packaging design for the new product line.",
    target_department: "design",
    source_department: "marketing",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-3",
    title: "Prepare Budget Proposal",
    description: "Draft a budget proposal for the upcoming year.",
    target_department: "financial",
    source_department: "main office",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Proposal lacks sufficient detail.",
  },
  {
    id: uuidv4(),
    user_id: "user-4",
    title: "Organize Annual Meeting",
    description: "Plan and organize the company's annual meeting.",
    target_department: "main office",
    source_department: "engineering",
    status: "fulfilled",
    fulfill_message: "Annual meeting scheduled successfully.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-5",
    title: "Launch Digital Campaign",
    description: "Start a digital marketing campaign for the new product.",
    target_department: "marketing",
    source_department: "design",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-6",
    title: "Upgrade Office Equipment",
    description: "Replace outdated office equipment.",
    target_department: "main office",
    source_department: "engineering",
    status: "fulfilled",
    fulfill_message: "All equipment has been upgraded.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-7",
    title: "Review Financial Statements",
    description: "Conduct a review of the quarterly financial statements.",
    target_department: "financial",
    source_department: "marketing",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Statements are incomplete.",
  },
  {
    id: uuidv4(),
    user_id: "user-8",
    title: "Redesign Website",
    description: "Redesign the company website for better user experience.",
    target_department: "design",
    source_department: "marketing",
    status: "fulfilled",
    fulfill_message: "Website redesign completed successfully.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-9",
    title: "Implement New HR Policies",
    description: "Update and implement new HR policies.",
    target_department: "main office",
    source_department: "financial",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-10",
    title: "Optimize Marketing Budget",
    description: "Review and optimize the marketing budget.",
    target_department: "financial",
    source_department: "marketing",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Budget is already optimized.",
  },
  {
    id: uuidv4(),
    user_id: "user-11",
    title: "Plan Product Launch Event",
    description: "Organize the product launch event.",
    target_department: "marketing",
    source_department: "design",
    status: "fulfilled",
    fulfill_message: "Event was a success.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-12",
    title: "Engineering Tools Maintenance",
    description: "Schedule maintenance for engineering tools.",
    target_department: "engineering",
    source_department: "main office",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-13",
    title: "Develop Training Program",
    description: "Create a training program for new employees.",
    target_department: "main office",
    source_department: "engineering",
    status: "fulfilled",
    fulfill_message: "Training program is ready.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-14",
    title: "Prepare Year-End Financial Report",
    description: "Compile the financial report for the year-end review.",
    target_department: "financial",
    source_department: "engineering",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Data is missing.",
  },
  {
    id: uuidv4(),
    user_id: "user-15",
    title: "Launch Social Media Campaign",
    description: "Promote the new product on social media.",
    target_department: "marketing",
    source_department: "design",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-16",
    title: "Create Company Newsletter",
    description: "Design and distribute the company newsletter.",
    target_department: "design",
    source_department: "marketing",
    status: "fulfilled",
    fulfill_message: "Newsletter sent to all employees.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-17",
    title: "Revise Budget Allocation",
    description: "Adjust the budget allocation for the next quarter.",
    target_department: "financial",
    source_department: "main office",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Budget adjustment not needed.",
  },
  {
    id: uuidv4(),
    user_id: "user-18",
    title: "Engineering Team Expansion",
    description: "Hire additional engineers for new projects.",
    target_department: "engineering",
    source_department: "main office",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-19",
    title: "Organize Charity Event",
    description: "Plan a charity event for community outreach.",
    target_department: "marketing",
    source_department: "financial",
    status: "fulfilled",
    fulfill_message: "Charity event raised $10,000.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-20",
    title: "Upgrade Office Infrastructure",
    description: "Improve the IT infrastructure in the office.",
    target_department: "engineering",
    source_department: "main office",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-21",
    title: "Design Trade Show Booth",
    description: "Create a booth design for the upcoming trade show.",
    target_department: "design",
    source_department: "marketing",
    status: "fulfilled",
    fulfill_message: "Booth design approved and built.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-22",
    title: "Review Marketing Strategy",
    description: "Assess the effectiveness of the current marketing strategy.",
    target_department: "marketing",
    source_department: "financial",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Strategy needs revision.",
  },
  {
    id: uuidv4(),
    user_id: "user-23",
    title: "Implement New Payroll System",
    description: "Install and configure a new payroll system.",
    target_department: "engineering",
    source_department: "financial",
    status: "fulfilled",
    fulfill_message: "Payroll system is operational.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-24",
    title: "Redesign Office Layout",
    description: "Improve the layout of the office space.",
    target_department: "design",
    source_department: "main office",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-25",
    title: "Financial Risk Assessment",
    description: "Conduct an assessment of financial risks.",
    target_department: "financial",
    source_department: "main office",
    status: "fulfilled",
    fulfill_message: "Risk assessment completed.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-26",
    title: "Organize Customer Feedback Survey",
    description: "Conduct a survey to gather customer feedback.",
    target_department: "marketing",
    source_department: "design",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-27",
    title: "Develop New Software Feature",
    description: "Create a new feature for the company's software.",
    target_department: "engineering",
    source_department: "marketing",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Feature is not needed.",
  },
  {
    id: uuidv4(),
    user_id: "user-28",
    title: "Update Financial Forecast",
    description: "Recalculate the financial forecast based on new data.",
    target_department: "financial",
    source_department: "engineering",
    status: "fulfilled",
    fulfill_message: "Forecast updated successfully.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-29",
    title: "Design New Product Logo",
    description: "Create a logo for the new product line.",
    target_department: "design",
    source_department: "marketing",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-30",
    title: "Manage Vendor Relations",
    description: "Improve relationships with key vendors.",
    target_department: "main office",
    source_department: "financial",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Vendors declined changes.",
  },
  {
    id: uuidv4(),
    user_id: "user-31",
    title: "Host Online Webinar",
    description: "Plan and conduct an online webinar for customers.",
    target_department: "marketing",
    source_department: "design",
    status: "fulfilled",
    fulfill_message: "Webinar was a success.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-32",
    title: "Upgrade Accounting Software",
    description: "Install and configure new accounting software.",
    target_department: "financial",
    source_department: "engineering",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-33",
    title: "Create Employee Handbook",
    description: "Develop a handbook for all employees.",
    target_department: "main office",
    source_department: "financial",
    status: "fulfilled",
    fulfill_message: "Handbook distributed to employees.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-34",
    title: "Conduct Market Research",
    description: "Analyze the market for new opportunities.",
    target_department: "marketing",
    source_department: "design",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-35",
    title: "Design New Office Furniture",
    description: "Create designs for the new office furniture.",
    target_department: "design",
    source_department: "main office",
    status: "fulfilled",
    fulfill_message: "Designs approved and manufacturing started.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-36",
    title: "Revise Financial Policies",
    description: "Update the financial policies for the company.",
    target_department: "financial",
    source_department: "main office",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Policies are up to date.",
  },
  {
    id: uuidv4(),
    user_id: "user-37",
    title: "Implement New Security Protocol",
    description: "Enhance security measures for the office.",
    target_department: "engineering",
    source_department: "financial",
    status: "fulfilled",
    fulfill_message: "Security protocols implemented successfully.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-38",
    title: "Design Marketing Collateral",
    description: "Create brochures and flyers for marketing.",
    target_department: "design",
    source_department: "marketing",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-39",
    title: "Perform IT Audit",
    description: "Conduct an audit of the company's IT systems.",
    target_department: "engineering",
    source_department: "main office",
    status: "fulfilled",
    fulfill_message: "IT audit completed successfully.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-40",
    title: "Develop New Pricing Strategy",
    description: "Create a pricing strategy for new products.",
    target_department: "financial",
    source_department: "marketing",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Strategy was not approved.",
  },
  {
    id: uuidv4(),
    user_id: "user-41",
    title: "Organize Team Building Event",
    description: "Plan a team-building activity for the company.",
    target_department: "main office",
    source_department: "marketing",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-42",
    title: "Design Product Catalog",
    description: "Create a catalog showcasing all products.",
    target_department: "design",
    source_department: "marketing",
    status: "fulfilled",
    fulfill_message: "Catalog design completed and distributed.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-43",
    title: "Analyze Marketing ROI",
    description: "Evaluate the return on investment for marketing efforts.",
    target_department: "marketing",
    source_department: "financial",
    status: "rejected",
    fulfill_message: null,
    reject_message: "ROI data is insufficient.",
  },
  {
    id: uuidv4(),
    user_id: "user-44",
    title: "Upgrade Office Wi-Fi",
    description: "Improve the Wi-Fi coverage in the office.",
    target_department: "engineering",
    source_department: "main office",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-45",
    title: "Create New Employee Onboarding",
    description: "Develop a comprehensive onboarding process for new hires.",
    target_department: "main office",
    source_department: "financial",
    status: "fulfilled",
    fulfill_message: "Onboarding process implemented successfully.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-46",
    title: "Prepare Quarterly Financial Report",
    description: "Compile and review the quarterly financial report.",
    target_department: "financial",
    source_department: "engineering",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Report is incomplete.",
  },
  {
    id: uuidv4(),
    user_id: "user-47",
    title: "Design Trade Show Materials",
    description: "Create all necessary materials for the trade show.",
    target_department: "design",
    source_department: "marketing",
    status: "fulfilled",
    fulfill_message: "Materials designed and printed.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-48",
    title: "Implement CRM Software",
    description: "Install and configure new CRM software.",
    target_department: "engineering",
    source_department: "marketing",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-49",
    title: "Organize Press Conference",
    description: "Plan and execute a press conference for product launch.",
    target_department: "marketing",
    source_department: "design",
    status: "fulfilled",
    fulfill_message: "Press conference was successful.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-50",
    title: "Evaluate Vendor Contracts",
    description: "Review and renegotiate contracts with key vendors.",
    target_department: "financial",
    source_department: "main office",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Vendors declined new terms.",
  },
  {
    id: uuidv4(),
    user_id: "user-51",
    title: "Develop Mobile App",
    description: "Create a mobile app for customer engagement.",
    target_department: "engineering",
    source_department: "marketing",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-52",
    title: "Design New Office Layout",
    description: "Plan and implement a new office layout.",
    target_department: "design",
    source_department: "main office",
    status: "fulfilled",
    fulfill_message: "Layout redesign completed.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-53",
    title: "Optimize Sales Strategy",
    description: "Revise and optimize the sales strategy.",
    target_department: "marketing",
    source_department: "financial",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Strategy does not align with goals.",
  },
  {
    id: uuidv4(),
    user_id: "user-54",
    title: "Conduct Employee Survey",
    description: "Gather feedback from employees on workplace satisfaction.",
    target_department: "main office",
    source_department: "engineering",
    status: "fulfilled",
    fulfill_message: "Survey results analyzed.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-55",
    title: "Review Customer Support Processes",
    description: "Improve customer support procedures.",
    target_department: "engineering",
    source_department: "main office",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-56",
    title: "Design Employee Recognition Program",
    description: "Create a program to recognize outstanding employees.",
    target_department: "main office",
    source_department: "financial",
    status: "fulfilled",
    fulfill_message: "Program launched successfully.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-57",
    title: "Analyze Competitor Pricing",
    description: "Review and compare competitor pricing models.",
    target_department: "financial",
    source_department: "marketing",
    status: "rejected",
    fulfill_message: null,
    reject_message: "Insufficient data for analysis.",
  },
  {
    id: uuidv4(),
    user_id: "user-58",
    title: "Upgrade Data Backup Systems",
    description: "Enhance the data backup infrastructure.",
    target_department: "engineering",
    source_department: "main office",
    status: "fulfilled",
    fulfill_message: "Backup systems upgraded.",
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-59",
    title: "Create New Marketing Collateral",
    description: "Design and produce new marketing materials.",
    target_department: "design",
    source_department: "marketing",
    status: "processing",
    fulfill_message: null,
    reject_message: null,
  },
  {
    id: uuidv4(),
    user_id: "user-60",
    title: "Conduct Environmental Impact Assessment",
    description: "Evaluate the environmental impact of company operations.",
    target_department: "engineering",
    source_department: "financial",
    status: "fulfilled",
    fulfill_message: "Assessment completed with recommendations.",
    reject_message: null,
  },
]
