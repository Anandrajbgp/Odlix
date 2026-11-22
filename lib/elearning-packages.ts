export type PackageSlug = "beginner" | "pro" | "expert" | "life-mastery";

export type PackageDetail = {
  slug: PackageSlug;
  name: string;
  tagline: string;
  headline: string;
  intro: string;
  price: number;
  earning: string;
  commission: string;
  color: string;
  motivation: string;
  skills: string[];
  outcomes: string[];
  bonuses: string[];
  accessRule?: string;
};

export const elearningPackages: PackageDetail[] = [
  {
    slug: "beginner",
    name: "Beginner",
    tagline: "Begin Your Skill Journey",
    headline: "Build Your First Income Skill Stack",
    intro:
      "This is your launchpad. You stop overthinking, start executing, and learn the exact beginner skills that create your first digital income.",
    price: 999,
    earning: "₹8–10k/month",
    commission: "Direct 54% | 2nd Level 12%",
    color: "from-blue-600 to-cyan-500",
    motivation:
      "If you're serious about changing your life, this is where momentum starts. No confusion. Just action.",
    skills: [
      "Spoken English",
      "Basic Graphic Design",
      "Video Editing",
      "Affiliate Marketing",
      "Rich Mindset & Time Management",
      "Content Creation",
      "Advanced Communication",
      "Banking & Digital Finance",
    ],
    outcomes: [
      "Confidence in digital communication",
      "Portfolio-ready beginner projects",
      "First affiliate conversions",
      "Clear weekly execution system",
    ],
    bonuses: [
      "Beginner execution planner",
      "Daily focus checklist",
      "Weekly accountability templates",
    ],
  },
  {
    slug: "pro",
    name: "Pro",
    tagline: "Master the Digital Craft",
    headline: "Turn Skills into Serious Monthly Cashflow",
    intro:
      "Pro is for builders who are ready to become unstoppable. You sharpen high-value skills and convert them into freelancing and content income channels.",
    price: 2499,
    earning: "₹25–30k/month",
    commission: "Direct 56% | 2nd Level 14%",
    color: "from-cyan-600 to-blue-700",
    motivation:
      "You are not here to stay average. Pro gives you the structure to earn like a creator and think like a business owner.",
    skills: [
      "Everything in Beginner +",
      "Advanced Graphic Design",
      "YouTube Mastery",
      "Social Media Marketing",
      "Public Speaking",
      "Copywriting",
      "Freelancing",
      "Stock Market Basics",
    ],
    outcomes: [
      "Higher-ticket freelance skillset",
      "Content growth strategy clarity",
      "Repeatable client acquisition process",
      "Strong personal brand foundation",
    ],
    bonuses: [
      "Client proposal swipe files",
      "Viral content framework",
      "30-day monetization sprint",
    ],
  },
  {
    slug: "expert",
    name: "Expert",
    tagline: "Scale to the Top",
    headline: "Build Wealth Systems and Lead at the Highest Level",
    intro:
      "Expert is for the top 1% mindset. You learn advanced digital finance, powerful brand leverage, and scale systems that create long-term wealth.",
    price: 4999,
    earning: "₹80k–1L+/month",
    commission: "Direct 58% | 2nd Level 17%",
    color: "from-blue-900 to-indigo-900",
    motivation:
      "This is the elite lane. If you want real freedom, authority, and scale — this package is built for you.",
    skills: [
      "Everything in Pro +",
      "Financial Literacy (Mutual Funds, SIPs)",
      "NFTs & Digital Assets",
      "Commodities & Real Estate Basics",
      "Cryptocurrency & Blockchain",
      "Advanced Video Editing & Motion Graphics",
      "Personal Branding",
      "AI Tools & Data Analytics",
    ],
    outcomes: [
      "Multi-income digital model setup",
      "Advanced growth + scale playbook",
      "Brand authority positioning",
      "Long-term wealth planning mindset",
    ],
    bonuses: [
      "Expert scale dashboard",
      "Wealth compounding blueprint",
      "Leadership and influence toolkit",
    ],
  },
  {
    slug: "life-mastery",
    name: "Life Mastery",
    tagline: "Post-completion track",
    headline: "Upgrade Character, Decisions, and Long-Term Leadership",
    intro:
      "Life Mastery starts after completing your core package. This track sharpens your judgment, discipline, and awareness so you can sustain success in money, relationships, and society.",
    price: 0,
    earning: "Long-term life leverage",
    commission: "No direct commission",
    color: "from-amber-500 to-yellow-400",
    motivation:
      "Skills can earn you income, but Life Mastery helps you keep it, grow it, and lead with purpose.",
    skills: [
      "Tax Planning",
      "Emotional Intelligence",
      "Mindfulness",
      "Relationship Skills",
      "Civic Awareness",
      "Ethical Decisions",
      "Critical Thinking",
      "Environment Awareness",
    ],
    outcomes: [
      "Stronger decision-making under pressure",
      "Healthy personal and professional relationships",
      "More responsible money and tax behavior",
      "Balanced mindset for sustainable growth",
    ],
    bonuses: [
      "Life planning reflection templates",
      "Weekly discipline checkpoints",
      "Ethical dilemma case studies",
    ],
    accessRule: "Unlocked after completing core package",
  },
];

export const packageBySlug: Record<PackageSlug, PackageDetail> = {
  beginner: elearningPackages[0],
  pro: elearningPackages[1],
  expert: elearningPackages[2],
  "life-mastery": elearningPackages[3],
};
