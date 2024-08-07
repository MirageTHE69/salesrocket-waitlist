import { FaGlobe, FaPlug, FaChartLine, FaTag } from "react-icons/fa";

export const FEATURES = [
  {
    icon: FaGlobe,
    title: "Global Sales Adaptation",
    content:
      "Our AI adapts to various cultural nuances and sales approaches, ensuring effective communication with customers around the world.",
  },
  {
    icon: FaPlug,
    title: "Effortless Integration",
    content:
      "Seamlessly integrate our solution with your existing systems to streamline workflows and enhance efficiency.",
  },
  {
    icon: FaChartLine,
    title: "Advanced Analytics & Insights",
    content:
      "Gain valuable insights and analytics from your data to make informed decisions and optimize your sales strategies.",
  },
  {
    icon: FaTag,
    title: "Automated Discount Management",
    content:
      "Easily create and manage automated coupon codes to incentivize customers and boost sales.",
  },
];

export const PLANS = [
  {
    type: "Personal",
    price: 5,
    features: ["1 Domain", "Analytics", "Insights Panel", "Share Features"],
  },
  {
    type: "Professional",
    price: 10,
    features: ["2 Domains", "Analytics", "Insights Panel", "Share Features"],
  },
  {
    type: "Business",
    price: 50,
    features: [
      "Unlimited Domains",
      "Analytics",
      "Insights Panel",
      "Share Features",
    ],
  },
];
