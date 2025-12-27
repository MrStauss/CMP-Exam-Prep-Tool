// CMP Study Tool - Complete Data Structure

const cmpData = {
    domains: {
        "A": {
            name: "Strategic Planning",
            weight: 9,
            items: 14,
            color: "#7a8471",
            skills: [
                {
                    name: "Discovery Phase",
                    concepts: [
                        "Mission/Vision/Culture Analysis",
                        "Needs Assessment",
                        "Value Proposition",
                        "Initial KPIs"
                    ]
                },
                {
                    name: "Event Plan Development", 
                    concepts: [
                        "Goals and Objectives",
                        "Financial Analysis",
                        "Data Collection Methods",
                        "Audience Profiling",
                        "Sustainability Planning",
                        "Communication Strategy"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What is the primary purpose of conducting a needs assessment in the discovery phase?",
                    options: [
                        "To determine the event budget",
                        "To determine if an event is necessary and viable",
                        "To select the event venue",
                        "To hire event staff"
                    ],
                    correct: 1,
                    explanation: "A needs assessment determines if an event is necessary and viable by analyzing organizational goals and stakeholder needs."
                },
                {
                    question: "Which of the following best describes the difference between goals and objectives?",
                    options: [
                        "Goals are specific and measurable, objectives are broad",
                        "Goals are broad aims, objectives are specific measurable outcomes",
                        "Goals and objectives are interchangeable terms",
                        "Goals are financial, objectives are strategic"
                    ],
                    correct: 1,
                    explanation: "Goals are broad aims that provide direction, while objectives are specific, measurable outcomes that support those goals."
                },
                {
                    question: "What does 'value proposition' mean in event planning?",
                    options: [
                        "The total cost of the event",
                        "How the event serves both organizational strategy and audience needs",
                        "The venue selection criteria",
                        "The marketing budget"
                    ],
                    correct: 1,
                    explanation: "Value proposition articulates how the event serves both organizational strategy and audience needs, creating mutual benefit."
                }
            ]
        },
        "B": {
            name: "Project Management",
            weight: 6,
            items: 9,
            color: "#c9a96e",
            skills: [
                {
                    name: "Project Lifecycle",
                    concepts: [
                        "Initiation",
                        "Planning", 
                        "Execution",
                        "Monitoring/Controlling",
                        "Closure"
                    ]
                },
                {
                    name: "Scope and Responsibilities",
                    concepts: [
                        "Scope of Work",
                        "Roles and Responsibilities",
                        "Organizational Elements"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What are the five phases of project management in correct order?",
                    options: [
                        "Planning, Execution, Initiation, Monitoring, Closure",
                        "Initiation, Planning, Execution, Monitoring/Controlling, Closure",
                        "Execution, Planning, Initiation, Closure, Monitoring",
                        "Initiation, Execution, Planning, Closure, Monitoring"
                    ],
                    correct: 1,
                    explanation: "The correct order is: Initiation, Planning, Execution, Monitoring/Controlling, and Closure."
                },
                {
                    question: "What is 'scope creep' in project management?",
                    options: [
                        "The natural expansion of project timeline",
                        "Uncontrolled expansion of project scope beyond original objectives",
                        "The process of hiring additional staff",
                        "Budget increases during planning"
                    ],
                    correct: 1,
                    explanation: "Scope creep is the uncontrolled expansion of project scope beyond original objectives without proper approval."
                }
            ]
        },
        "C": {
            name: "Sustainability and Social Impact",
            weight: 5,
            items: 7,
            color: "#7a8471",
            skills: [
                {
                    name: "Sustainability Policy and Planning",
                    concepts: [
                        "UN Sustainable Development Goals",
                        "Standards Alignment",
                        "Procurement Process",
                        "KPI Coordination",
                        "Performance Reporting"
                    ]
                },
                {
                    name: "Social Impact Management",
                    concepts: [
                        "Universal Design",
                        "DEI Initiatives",
                        "Code of Conduct",
                        "Positive Legacy"
                    ]
                },
                {
                    name: "Environmental Responsibility",
                    concepts: [
                        "Carbon Footprint",
                        "Regenerative Practices",
                        "Stakeholder Engagement"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "How many UN Sustainable Development Goals are there?",
                    options: ["10", "15", "17", "20"],
                    correct: 2,
                    explanation: "There are 17 UN Sustainable Development Goals that provide a framework for sustainability planning."
                },
                {
                    question: "What is the difference between universal design and accommodations?",
                    options: [
                        "They are the same concept",
                        "Universal design improves accessibility without special accommodations",
                        "Accommodations are better than universal design",
                        "Universal design only applies to physical spaces"
                    ],
                    correct: 1,
                    explanation: "Universal design improves accessibility for people with disabilities without requiring special accommodations."
                }
            ]
        },
        "D": {
            name: "Risk Management",
            weight: 7,
            items: 10,
            color: "#1a2332",
            skills: [
                {
                    name: "Risk Identification and Analysis",
                    concepts: [
                        "Code of conduct violations",
                        "Data privacy/security",
                        "Environmental risks",
                        "Health and safety",
                        "Intangibles",
                        "Organizational",
                        "People",
                        "Property",
                        "Social justice"
                    ]
                },
                {
                    name: "Risk Response Strategies",
                    concepts: [
                        "Avoid",
                        "Mitigate", 
                        "Transfer",
                        "Accept"
                    ]
                },
                {
                    name: "Risk Management Planning",
                    concepts: [
                        "Contingency Plans",
                        "Duty of Care",
                        "Insurance",
                        "Emergency Response Plan",
                        "Crisis Communications"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "Which risk response strategy involves eliminating the risk entirely?",
                    options: ["Mitigate", "Avoid", "Transfer", "Accept"],
                    correct: 1,
                    explanation: "Avoidance strategy involves eliminating the risk entirely by changing plans or procedures."
                },
                {
                    question: "What is 'duty of care' in event management?",
                    options: [
                        "The legal obligation to provide insurance",
                        "The responsibility for participant safety and wellbeing",
                        "The duty to follow all regulations",
                        "The obligation to minimize costs"
                    ],
                    correct: 1,
                    explanation: "Duty of care is the legal and ethical responsibility to ensure participant safety and wellbeing during events."
                }
            ]
        },
        "E": {
            name: "Financial Management",
            weight: 7,
            items: 11,
            color: "#c9a96e",
            skills: [
                {
                    name: "Budget Design",
                    concepts: [
                        "Financial Objectives",
                        "Accounting Principles",
                        "Budget Parameters",
                        "Audit Procedures",
                        "Funding Sources"
                    ]
                },
                {
                    name: "Budget Execution",
                    concepts: [
                        "Resource Management",
                        "Pricing Strategy",
                        "Transaction Procedures",
                        "Financial Monitoring",
                        "Financial Statements",
                        "Final Reconciliation"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What is ROI (Return on Investment)?",
                    options: [
                        "Registration of Interest",
                        "Return on Investment - a financial metric measuring profitability",
                        "Rate of Increase",
                        "Revenue on Income"
                    ],
                    correct: 1,
                    explanation: "ROI (Return on Investment) is a financial metric measuring the profitability or value generated from investments."
                },
                {
                    question: "What should pricing strategy be based on?",
                    options: [
                        "What competitors charge",
                        "Market analysis to meet financial targets",
                        "The highest possible price",
                        "Organizational preferences"
                    ],
                    correct: 1,
                    explanation: "Pricing strategy should be based on market analysis to meet financial targets and goals."
                }
            ]
        },
        "F": {
            name: "Talent Management",
            weight: 5,
            items: 8,
            color: "#7a8471",
            skills: [
                {
                    name: "Talent Planning",
                    concepts: [
                        "Needs Identification",
                        "Inclusive Recruitment",
                        "Orientation and Training"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What is inclusive recruitment in talent management?",
                    options: [
                        "Hiring only the most qualified candidates",
                        "Seeking people with disabilities, diverse backgrounds, and multi-generational representation",
                        "Recruiting from local areas only",
                        "Hiring based on personal connections"
                    ],
                    correct: 1,
                    explanation: "Inclusive recruitment involves seeking people with disabilities, diverse backgrounds, and multi-generational representation."
                }
            ]
        },
        "G": {
            name: "Stakeholder Management",
            weight: 7,
            items: 10,
            color: "#1a2332",
            skills: [
                {
                    name: "Supplier/Vendor Management",
                    concepts: [
                        "Needs Analysis",
                        "Relationship Management",
                        "Contract Considerations",
                        "Supply Chain Strategy",
                        "Contract Management"
                    ]
                },
                {
                    name: "Sponsor and Partner Management",
                    concepts: [
                        "Opportunity Identification",
                        "Partnership Development",
                        "Deliverables Management"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What is force majeure in contract management?",
                    options: [
                        "A type of insurance",
                        "A contract clause for extraordinary events beyond control",
                        "A payment schedule",
                        "A cancellation policy"
                    ],
                    correct: 1,
                    explanation: "Force majeure is a contract clause that frees parties from liability due to extraordinary events beyond their control."
                },
                {
                    question: "What is the difference between sponsors and strategic partners?",
                    options: [
                        "They are the same",
                        "Sponsors provide funding, partners provide mutual benefits",
                        "Partners are more important than sponsors",
                        "Sponsors are long-term, partners are short-term"
                    ],
                    correct: 1,
                    explanation: "Sponsors typically provide funding, while strategic partners create mutually beneficial relationships."
                }
            ]
        },
        "H": {
            name: "Event Design",
            weight: 25,
            items: 38,
            color: "#c9a96e",
            skills: [
                {
                    name: "Event Development",
                    concepts: [
                        "Organizing Principles",
                        "Cognitive Design",
                        "Inclusivity",
                        "Event Components",
                        "Programme Content",
                        "Delivery Methods",
                        "Diverse Collaborators"
                    ]
                },
                {
                    name: "Experience Design",
                    concepts: [
                        "Design Elements",
                        "Room Layout",
                        "Sensory Elements",
                        "Attendee Interaction",
                        "Signage"
                    ]
                },
                {
                    name: "Speakers, Performers, and Dignitaries",
                    concepts: [
                        "Selection Criteria",
                        "Requirements and Protocols",
                        "Expectation Management",
                        "Logistics"
                    ]
                },
                {
                    name: "Food and Beverage Services",
                    concepts: [
                        "Guidelines",
                        "Provider Selection",
                        "Sustainability Practices",
                        "Alcohol Management"
                    ]
                },
                {
                    name: "Audiovisual and Technical Production",
                    concepts: [
                        "Needs Assessment",
                        "Equipment Requirements",
                        "Production Oversight"
                    ]
                },
                {
                    name: "Attendee Logistics",
                    concepts: [
                        "Registration and Housing",
                        "Travel Coordination",
                        "Crowd Management",
                        "Accessibility",
                        "Lodging",
                        "Transportation",
                        "Safety and Security",
                        "Communication"
                    ]
                },
                {
                    name: "Exhibitions",
                    concepts: [
                        "Floor Plan Development",
                        "Sales Management",
                        "Activity Monitoring",
                        "Exhibitor Guidelines",
                        "Engagement Planning",
                        "Sustainability Integration"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What is cognitive design in event planning?",
                    options: [
                        "Design based on color preferences",
                        "Design based on how people process information and experiences",
                        "Design focused on cost reduction",
                        "Design for accessibility only"
                    ],
                    correct: 1,
                    explanation: "Cognitive design is based on how people process information and experiences psychologically."
                },
                {
                    question: "What are psychographics in audience profiling?",
                    options: [
                        "Geographic location data",
                        "Study of personality, values, attitudes, interests, and lifestyles",
                        "Income level information",
                        "Age and gender demographics"
                    ],
                    correct: 1,
                    explanation: "Psychographics is the study of personality, values, attitudes, interests, and lifestyles of target audiences."
                },
                {
                    question: "What should be considered when selecting F&B service providers?",
                    options: [
                        "Only the cost",
                        "Event design, budget, and participant needs including local/cultural, dietary, and faith-based requirements",
                        "Whatever is easiest to obtain",
                        "Only popular food options"
                    ],
                    correct: 1,
                    explanation: "F&B selection should consider event design, budget, and diverse participant needs including cultural, dietary, and religious requirements."
                },
                {
                    question: "What is the purpose of comprehensive signage at events?",
                    options: [
                        "Decoration only",
                        "Wayfinding and communication",
                        "Advertising opportunities",
                        "Meeting regulatory requirements"
                    ],
                    correct: 1,
                    explanation: "Comprehensive signage serves both wayfinding and communication purposes for attendees."
                }
            ]
        },
        "I": {
            name: "Site Management",
            weight: 10,
            items: 15,
            color: "#7a8471",
            skills: [
                {
                    name: "Event Site Selection",
                    concepts: [
                        "Selection Criteria",
                        "Selection Process",
                        "RFP Management",
                        "Site Evaluation",
                        "Subventions/Grants/Incentives",
                        "Site Recommendation",
                        "Contract Negotiation"
                    ]
                },
                {
                    name: "Event Site Layout",
                    concepts: [
                        "Space Utilization",
                        "Site Maps and Floorplans"
                    ]
                },
                {
                    name: "Event Site Management",
                    concepts: [
                        "Logistics Implementation",
                        "Team Communication",
                        "Real-Time Adaptation"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What is an RFP (Request for Proposal)?",
                    options: [
                        "A type of insurance",
                        "A formal document requesting bids from potential suppliers or venues",
                        "A marketing strategy",
                        "A financial report"
                    ],
                    correct: 1,
                    explanation: "An RFP is a formal document requesting bids from potential suppliers or venues for event services."
                },
                {
                    question: "What factors should be considered in site selection?",
                    options: [
                        "Only the cost",
                        "Accessibility needs, budget, competing events, compliance, concessions, destination demand, rates, and space",
                        "Just the location popularity",
                        "Whatever is available"
                    ],
                    correct: 1,
                    explanation: "Site selection should consider multiple factors including accessibility, budget, competing events, compliance, and more."
                }
            ]
        },
        "J": {
            name: "Marketing and Communications",
            weight: 9,
            items: 13,
            color: "#1a2332",
            skills: [
                {
                    name: "Marketing Plan",
                    concepts: [
                        "Historic KPI Analysis",
                        "Current KPI Definition",
                        "Market Segmentation",
                        "Plan Coordination",
                        "Messaging Strategies",
                        "Plan Monitoring"
                    ]
                },
                {
                    name: "Marketing Materials",
                    concepts: [
                        "Asset Determination",
                        "Design Specifications",
                        "Production and Distribution",
                        "Review and Optimization"
                    ]
                },
                {
                    name: "Event Promotion",
                    concepts: [
                        "Event Narrative",
                        "Social Media Strategy"
                    ]
                },
                {
                    name: "Public Relations",
                    concepts: [
                        "Media Monitoring"
                    ]
                },
                {
                    name: "On-Site Communications",
                    concepts: [
                        "Communication Plan",
                        "Equipment and Resources",
                        "Procedures and Protocols",
                        "Implementation"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What is market segmentation in event marketing?",
                    options: [
                        "Dividing the market by price only",
                        "Process of dividing target audience into distinct groups based on characteristics and needs",
                        "Segmenting by geographic location only",
                        "Breaking down the marketing budget"
                    ],
                    correct: 1,
                    explanation: "Market segmentation is the process of dividing the target audience into distinct groups based on characteristics and needs."
                },
                {
                    question: "What should on-site communication plans include?",
                    options: [
                        "Only digital communications",
                        "Apps/website, maps, print materials, run of show, scripts, signage, wifi",
                        "Just verbal communication",
                        "Only social media"
                    ],
                    correct: 1,
                    explanation: "On-site communication plans should be comprehensive, including digital and print materials, signage, scripts, and technical infrastructure."
                }
            ]
        },
        "K": {
            name: "Technology Integration",
            weight: 5,
            items: 8,
            color: "#7a8471",
            skills: [
                {
                    name: "Technology Assessment",
                    concepts: [
                        "Needs Determination",
                        "Emerging Technologies",
                        "Accessibility Integration",
                        "Systems Integration"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What emerging technologies should event professionals consider?",
                    options: [
                        "Only basic AV equipment",
                        "AI-enabled solutions, geolocation, Virtual Reality (VR)",
                        "Traditional registration systems",
                        "Basic lighting and sound"
                    ],
                    correct: 1,
                    explanation: "Event professionals should consider emerging technologies like AI-enabled solutions, geolocation, and Virtual Reality (VR)."
                }
            ]
        },
        "L": {
            name: "Evaluation Process",
            weight: 5,
            items: 7,
            color: "#c9a96e",
            skills: [
                {
                    name: "Performance Measurement",
                    concepts: [
                        "Outcome Measurement",
                        "Survey Distribution",
                        "Data Interpretation",
                        "Post-Event Debrief",
                        "Customized Reporting"
                    ]
                }
            ],
            practiceQuestions: [
                {
                    question: "What should be measured in outcome measurement?",
                    options: [
                        "Only attendance numbers",
                        "Attendance, economic impact, emergency preparedness KPIs, legacy, ROI, sustainability",
                        "Just profit and loss",
                        "Only participant satisfaction"
                    ],
                    correct: 1,
                    explanation: "Outcome measurement should include attendance, economic impact, emergency preparedness KPIs, legacy, ROI, and sustainability metrics."
                },
                {
                    question: "Who should receive post-event surveys?",
                    options: [
                        "Only attendees",
                        "All participants including attendees, entertainers, exhibitors, speakers, sponsors, suppliers",
                        "Just the event team",
                        "Only paying customers"
                    ],
                    correct: 1,
                    explanation: "Post-event surveys should be distributed to all participants including attendees, entertainers, exhibitors, speakers, sponsors, and suppliers."
                }
            ]
        }
    },

    flashcards: [
        {
            term: "Value Proposition",
            definition: "The unique benefit or value that an event provides to stakeholders, aligning organizational strategy with audience needs",
            domain: "A"
        },
        {
            term: "KPIs (Key Performance Indicators)",
            definition: "Measurable metrics used to evaluate event performance across engagement, financial, and sustainability dimensions",
            domain: "A"
        },
        {
            term: "UN Sustainable Development Goals",
            definition: "17 global goals providing framework for sustainability planning in events",
            domain: "C"
        },
        {
            term: "Universal Design",
            definition: "Design principles that improve accessibility for people with disabilities without requiring special accommodations",
            domain: "C"
        },
        {
            term: "Duty of Care",
            definition: "Legal and ethical responsibility to ensure participant safety and wellbeing during events",
            domain: "D"
        },
        {
            term: "Force Majeure",
            definition: "Contract clause that frees parties from liability due to extraordinary events beyond their control",
            domain: "G"
        },
        {
            term: "RFP (Request for Proposal)",
            definition: "Formal document requesting bids from potential suppliers or venues for event services",
            domain: "I"
        },
        {
            term: "ROI (Return on Investment)",
            definition: "Financial metric measuring the profitability or value generated from event investments",
            domain: "E"
        },
        {
            term: "Cognitive Design",
            definition: "Design approach based on how people process information and experiences psychologically",
            domain: "H"
        },
        {
            term: "Psychographics",
            definition: "Study of personality, values, attitudes, interests, and lifestyles of target audiences",
            domain: "A"
        },
        {
            term: "Scope of Work",
            definition: "Document defining all deliverables, tasks, and responsibilities required to meet event objectives",
            domain: "B"
        },
        {
            term: "Contingency Planning",
            definition: "Development of backup strategies and plans for potential risks and issues",
            domain: "D"
        },
        {
            term: "Market Segmentation",
            definition: "Process of dividing target audience into distinct groups based on characteristics and needs",
            domain: "J"
        },
        {
            term: "Carbon Footprint",
            definition: "Total greenhouse gas emissions generated directly and indirectly by an event",
            domain: "C"
        },
        {
            term: "Regenerative Practices",
            definition: "Sustainability approaches that go beyond reducing harm to actively restore environmental systems",
            domain: "C"
        },
        {
            term: "Scope Creep",
            definition: "Uncontrolled expansion of project scope beyond original objectives without proper approval",
            domain: "B"
        },
        {
            term: "SWOT Analysis",
            definition: "Strategic planning tool analyzing Strengths, Weaknesses, Opportunities, and Threats",
            domain: "A"
        },
        {
            term: "Stakeholder Matrix",
            definition: "Tool for mapping stakeholders by influence and interest to prioritize engagement strategies",
            domain: "G"
        },
        {
            term: "SMART Goals",
            definition: "Goals that are Specific, Measurable, Achievable, Relevant, and Time-bound",
            domain: "A"
        },
        {
            term: "Break-even Analysis",
            definition: "Financial calculation determining the point where total costs equal total revenue",
            domain: "E"
        }
    ],

    scenarios: [
        {
            domain: "H",
            title: "Hybrid Event Design Challenge",
            situation: "You're planning a 3-day international conference for 500 in-person attendees and 1,000 virtual participants. The conference includes keynote sessions, breakout workshops, networking events, and an exhibition hall.",
            challenge: "Design the attendee experience ensuring both in-person and virtual participants have engaging, interactive experiences. Consider technology, networking, content delivery, and exhibition components.",
            considerations: [
                "Technology requirements for seamless hybrid experience",
                "Networking opportunities for both audiences",
                "Content delivery methods and interactivity",
                "Exhibition hall virtual representation",
                "Accessibility considerations",
                "Budget constraints for technology and production"
            ],
            solution: "Implement a comprehensive hybrid platform with live streaming, interactive Q&A, virtual networking rooms, digital exhibition hall with exhibitor booths, and ensure all content is accessible to both audiences."
        },
        {
            domain: "D",
            title: "Risk Management Crisis",
            situation: "You're managing a 3-day outdoor festival with 5,000 attendees. On day 2, severe weather is forecast with high winds and heavy rain expected.",
            challenge: "Develop and implement a risk response strategy to ensure attendee safety while minimizing event disruption.",
            considerations: [
                "Attendee safety and duty of care",
                "Communication protocols",
                "Alternative indoor venues",
                "Insurance and liability",
                "Stakeholder communication",
                "Emergency response procedures"
            ],
            solution: "Activate contingency plans including weather monitoring, communication with attendees, potential venue changes, emergency protocols, and clear communication with all stakeholders about safety measures."
        },
        {
            domain: "E",
            title: "Budget Management Scenario",
            situation: "Your corporate event has a $500,000 budget. Mid-way through planning, a key sponsor withdraws $100,000 in funding, but all contracted expenses remain the same.",
            challenge: "Develop a strategy to manage the budget shortfall while maintaining event quality and attendee experience.",
            considerations: [
                "Revenue source identification",
                "Expense reduction opportunities",
                "Contract renegotiation",
                "Alternative funding options",
                "ROI impact assessment",
                "Stakeholder communication"
            ],
            solution: "Identify alternative revenue sources, renegotiate contracts, optimize expenses, and communicate transparently with stakeholders about budget adjustments while maintaining core event components."
        }
    ]
};

// Study progress tracking
let studyProgress = {
    domainProgress: {},
    flashcardProgress: {},
    questionStats: {},
    studyTime: 0,
    lastSession: null
};

// Initialize progress tracking for all domains
Object.keys(cmpData.domains).forEach(domainKey => {
    studyProgress.domainProgress[domainKey] = {
        mastery: 0,
        questionsAnswered: 0,
        questionsCorrect: 0,
        flashcardsMastered: 0,
        timeSpent: 0,
        lastStudied: null
    };
});

// Initialize flashcard progress
cmpData.flashcards.forEach((flashcard, index) => {
    studyProgress.flashcardProgress[index] = {
        mastery: 0, // 0 = not seen, 1 = learning, 2 = needs review, 3 = mastered
        timesReviewed: 0,
        lastReviewed: null
    };
});

console.log("CMP Study Data loaded successfully!");
console.log(`Domains: ${Object.keys(cmpData.domains).length}`);
console.log(`Flashcards: ${cmpData.flashcards.length}`);
console.log(`Total Practice Questions: ${Object.values(cmpData.domains).reduce((total, domain) => total + domain.practiceQuestions.length, 0)}`);