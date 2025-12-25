
import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Yaman Vora",
  title: "Senior Flutter Developer",
  experience: "3+ Years",
  phone: "+91 9313660083",
  introduction: "Hi, I am Yaman Vora. I specialize in building high-performance mobile applications using Flutter & Dart. I have hands-on experience working on enterprise, fintech, crypto, HR management, logistics, and utility-based applications.",
  summary: "Results-driven Flutter Developer with strong expertise in building scalable, secure, and high-quality applications. Worked across 4 IT companies contributing to end-to-end app development.",
  email: "vorayaman5@gmail.com",
  github: "https://github.com/vorayaman/",
  linkedin: "https://www.linkedin.com/in/yaman-vora-a41a4b240",
  whatsapp: "https://wa.me/919313660083"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend (Mobile)",
    icon: "📱",
    skills: ["Flutter (Android & iOS)", "Dart", "Material UI & Custom UI", "Responsive UI & Performance Optimization", "Native Bridges"]
  },
  {
    title: "Backend & Cloud",
    icon: "☁️",
    skills: ["Firebase Authentication", "Cloud Firestore", "Firebase Storage", "REST APIs (Dio/HTTP)", "Cloud Functions"]
  },
  {
    title: "State Management",
    icon: "🏗️",
    skills: ["Provider", "GetX", "flutter_bloc", "Clean Architecture", "Reactive Programming"]
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Google Maps & Geofencing", "QR / Barcode Scanning", "Crypto Wallet Integration", "Bluetooth & Printer Integration", "Git & GitHub", "Payment Gateways"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "TechVivanta (Current)",
    role: "Senior Flutter Developer",
    duration: "Present",
    projects: ["Fujitsu AC Management", "IHP Delivery App", "Wave Money", "Restaurant Management"],
    description: "Contributing to end-to-end app development, from UI/UX implementation to backend integration and production deployment. Leading a team for complex utility and fintech solutions."
  },
  {
    company: "Influket IT Solutions",
    role: "Flutter Developer",
    duration: "Past",
    projects: ["Instagram Clone App"],
    description: "Developed real-time social media features including post interactions, user profiles, and Firebase-based real-time updates."
  },
  {
    company: "PagarGuru",
    role: "Flutter Developer",
    duration: "Past",
    projects: ["Attendance & Payroll Software"],
    description: "Built a robust geofencing system and QR-based attendance tracking with automatic salary deduction and calculation logic."
  },
  {
    company: "NSB IT Solutions",
    role: "Flutter Developer",
    duration: "Past",
    projects: ["HR Management System"],
    description: "Developed comprehensive employee management systems including leave tracking, payroll, shift management, and asset allocation."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "wave-money",
    title: "Wave Money",
    company: "TechVivanta",
    description: "All-in-one crypto & utility platform with wallet management, coin transfer, and card services.",
    tags: ["Flutter", "Crypto", "Firebase", "Web3"],
    features: [
      "Crypto wallet integration for secure asset storage",
      "Coin transfer, swap & withdraw functionality",
      "Wallet balance real-time tracking",
      "All-in-one utility platform for recharges & bookings",
      "Virtual and physical card creation & management"
    ],
    icon: "💰",
    workflow: "Initiated with thorough research on blockchain security, followed by UI/UX prototyping. Developed using Flutter with BLoC for high-state predictability, integrated Firebase for real-time data, and implemented secure crypto transaction modules."
  },
  {
    id: "fujitsu-ac",
    title: "Fujitsu AC Management",
    company: "TechVivanta",
    description: "Enterprise service location tracking and technician assignment system for cooling solutions.",
    tags: ["Enterprise", "Google Maps", "Tracking"],
    features: [
      "Real-time service location tracking via Google Maps",
      "Automated technician assignment based on proximity",
      "Service scheduling & management dashboard",
      "Field report generation and synchronization"
    ],
    icon: "❄️",
    workflow: "Developed a custom location tracking engine using Google Maps API. Built a specialized admin panel for automated task allocation based on technician availability and distance metrics, ensuring efficient service deployment."
  },
  {
    id: "ihp-delivery",
    title: "IHP Delivery App",
    company: "TechVivanta",
    description: "Delivery-based application with specialized roles for Driver, Marker, and Admin.",
    tags: ["Logistics", "Google Maps", "Fleet Management"],
    features: [
      "Dynamic route marking system for delivery optimization",
      "Role-based access (Driver, Marker, Admin)",
      "Comprehensive Admin control panel for logistics oversight",
      "Real-time delivery status updates"
    ],
    icon: "🚚",
    workflow: "Designed a multi-tier role system to manage distinct delivery workflows. Implemented Geofencing to verify pick-up and drop-off points, and utilized Dio for robust communication with the logistics backend."
  },
  {
    id: "restaurant-mgmt",
    title: "Restaurant Management App",
    company: "TechVivanta",
    description: "Billing & order flow software with hardware integration for restaurant operations.",
    tags: ["POS", "Bluetooth", "Utility"],
    features: [
      "Complete billing & order management flow",
      "Bluetooth printer integration for instant receipts",
      "Kitchen order management display",
      "Inventory and sales reporting"
    ],
    icon: "🍽️",
    workflow: "Focused on low-latency Bluetooth communication for thermal printers. Managed complex order state transitions (Pending -> Preparing -> Served -> Paid) using Provider state management."
  },
  {
    id: "pagarguru",
    title: "PagarGuru Attendance",
    company: "PagarGuru",
    description: "Attendance & Payroll software featuring geofencing and QR-based tracking.",
    tags: ["Geofencing", "QR", "Fintech"],
    features: [
      "Precision geofencing system for site-specific check-ins",
      "QR/Scan-based attendance for secure verification",
      "Automatic salary deduction & calculation engine",
      "Firebase-based backend for high scalability"
    ],
    icon: "📍",
    workflow: "Built a background location service for continuous geofencing verification. Developed a specialized QR scanner module for rapid employee identification, and integrated a custom payroll engine linked to Firestore."
  },
  {
    id: "insta-clone",
    title: "Instagram Clone",
    company: "Influket IT Solutions",
    description: "Social media application clone featuring posts, likes, comments, and real-time updates.",
    tags: ["Social", "Real-time", "UI/UX"],
    features: [
      "Post creation with image support",
      "Real-time like and comment system",
      "Complete user profile management",
      "Firebase real-time synchronization"
    ],
    icon: "📸",
    workflow: "Structured the app around real-time listener patterns in Firestore. Implemented image compression before upload to Firebase Storage and utilized custom animations for a seamless social media experience."
  }
];
