export interface CaseStudy {
  title: string;
  subtitle: string;
  metrics: {
    value: string;
    label: string;
  }[];
  overview: string;
  challenges: {
    icon: string;
    text: string;
  }[];
  solutions: string[];
  results: {
    value: string;
    label: string;
  }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  financial: {
    title: "Case Study",
    subtitle: "Financial Institution",
    metrics: [
      {
        value: "17%",
        label: "Negative Attrition Rate",
      },
    ],
    overview:
      "A prominent financial institution faced significant challenges in recruiting and retaining quality staff for various positions. They partnered with Advent Global, a leading staffing company, to overcome these hurdles and streamline their hiring process.",
    challenges: [
      {
        icon: "square",
        text: "High-volume hiring for difficult locations.",
      },
      {
        icon: "square",
        text: "Limited candidate pools in certain areas.",
      },
      {
        icon: "square",
        text: "Candidates backing out during the interview process.",
      },
      {
        icon: "square",
        text: "Need for qualified candidates across multiple job categories.",
      },
    ],
    solutions: [
      "Strategic Candidate Pipeline",
      "Comprehensive Recruitment",
      "Diversity Focus",
      "Enhanced Communication",
      "Candidate Support",
      "Compliance & Quality Assurance",
    ],
    results: [
      {
        value: "98%",
        label: "Requisition\nResponsiveness",
      },
      {
        value: "12%",
        label: "Reduced\nRejection Rate",
      },
      {
        value: "100%",
        label: "Compliance\nwith Onboarding",
      },
      {
        value: "95%",
        label: "Contractor\nRetention Rate",
      },
    ],
  },
  Efficient: {
    title: "Case Study",
    subtitle: "Efficient Recruitment",
    metrics: [
      {
        value: "",
        label: "Fashion and Lifestyle Industry",
      },
    ],
    overview:
      "A leading global fashion and lifestyle company faced significant challenges in recruiting top-tier talent for various technical and specialized roles, as well as implementing critical enterprise systems. Advent Global partnered with this client to revolutionize their hiring process, secure high-quality candidates in a competitive market, and provide crucial support for major system implementations.",
    challenges: [
      {
        icon: "square",
        text: "Sourcing candidates with industry-specific experience.",
      },
      {
        icon: "square",
        text: "High competition for skilled professionals.",
      },
      {
        icon: "square",
        text: "Balancing technical expertise with essential soft skills.",
      },
      {
        icon: "square",
        text: "Unexpected candidate dropouts during the recruitment process.",
      },
      {
        icon: "square",
        text: "Competing with other companies for talent in similar locations.",
      },
      {
        icon: "square",
        text: "Implementing complex enterprise systems, specifically SAP and Workday.",
      },
    ],
    solutions: [
      "Talent Pipeline Development.",
      "Enhanced Candidate Engagement.",
      "Refined Screening Process.",
      "Strategic Sourcing.",
      "	Employer Branding.",
      "Specialized Project Support.",
    ],
    results: [
      {
        value: "",
        label: "Key Roles Filled",
      },
      {
        value: "",
        label: "Efficient Recruitment",
      },
      {
        value: "",
        label: "Skill Balance",
      },
      {
        value: "",
        label: "Diverse Sourcing",
      },
    ],
  },
  Logistics: {
    title: "Case Study",
    subtitle: "Logistics Industry",
    metrics: [
      {
        value: "95%",
        label: "On Time Fulfillment",
      },
    ],
    overview:
      "A leading logistics and package delivery company faced challenges in sourcing and placing candidates across diverse roles, including technical and administrative positions. Struggling with high turnover, tight fulfillment deadlines, and complex eligibility requirements, they needed a solution to enhance their staffing efficiency and satisfaction. Advent Global Solutions Inc. stepped in to address these issues. ",
    challenges: [
      {
        icon: "square",
        text: "High Turnover Rate",
      },
      {
        icon: "square",
        text: "Candidate Satisfaction",
      },
      {
        icon: "square",
        text: "Timely Fulfillment",
      },
      {
        icon: "square",
        text: "Efficient Candidate Screening",
      },
      {
        icon: "square",
        text: "Compliance and Eligibility",
      },
      {
        icon: "square",
        text: "Billing Conflicts",
      },
    ],
    solutions: [
      "Maintaining a talent pool for quick access to qualified candidates.",
      "Implementing a rapid response system for immediate job notifications.",
      "Using multi-channel communication to keep candidates engaged.",
      "Leveraging platforms like Monster and CareerBuilder for candidate sourcing.",
      "Utilizing ATS systems like Oorwin for efficient applicant tracking.",
    ],
    results: [
      {
        value: "95%",
        label: "On Time\nFulfillment",
      },
      {
        value: "100%",
        label: "compliance Eligibility\nRequirements",
      },
      {
        value: "98%",
        label: "Skill Set\nCompliance",
      },
      {
        value: "98%",
        label: "Billing Conflicts\nResolved",
      },
    ],
  },
  Pharma: {
    title: "Case Study",
    subtitle: "Pharma Industry",
    metrics: [
      {
        value: "30%",
        label: "Higher Conversion Rate",
      },
    ],
    overview:
      "A major pharmaceutical firm wanted to address their complex staffing needs. The client required assistance in filling various specialized roles across their organization and therefore partnered with Advent Global to find a solution to their problems. ",
    challenges: [
      {
        icon: "square",
        text: "Shortage of specialized talent, particularly in California and Washington.",
      },
      {
        icon: "square",
        text: "High competition for qualified candidates in the pharmaceutical industry.",
      },
      {
        icon: "square",
        text: "Balancing technical skills with soft skills in candidate selection.",
      },
      {
        icon: "square",
        text: "Candidates unexpectedly dropping out of the recruitment process.",
      },
      {
        icon: "square",
        text: "Competition with other pharmaceutical companies hiring in the same locations.",
      },
    ],
    solutions: [
      "Talent Pipeline Development.",
      "Competitive Offerings.",
      "Enhanced Screening Process.",
      "Candidate Engagement.",
      "Rapid Response.",
      "Accuracy and Compliance.",
    ],
    results: [
      {
        value: "70%",
        label: "Response Rate",
      },
      {
        value: "30%",
        label: "Increased\nConversion Rate",
      },
      {
        value: "95%",
        label: "Compliance\nRate",
      },
      {
        value: "1%",
        label: "Negative\nAttrition Rate",
      },
    ],
  },
};
