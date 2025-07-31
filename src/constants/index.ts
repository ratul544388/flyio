import { User } from "@/features/auth/types";

import {
  Plane,
  Globe,
  CreditCard,
  Clock,
  ShieldCheck,
  Smartphone,
  CalendarCheck,
  Users,
  Home,
  List,
  Map,
} from "lucide-react";

export const navLinks = (user: User | null) => [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Flights",
    href: "/flights",
    icon: Map,
  },
  ...(user?.role === "ADMIN"
    ? [
        {
          label: "Bookings",
          href: "/bookings",
          icon: List,
        },
      ]
    : []),
];

export const API_URL = "https://flight-server-six.vercel.app";

export const placeholderAvatar = "/placeholder-avatar.webp";

export const seats = [
  "1A",
  "1B",
  "1C",
  "1D",
  "2A",
  "2B",
  "2C",
  "2D",
  "3A",
  "3B",
  "3C",
  "3D",
  "4A",
  "4B",
  "4C",
  "4D",
  "5A",
  "5B",
  "5C",
  "5D",
  "6A",
  "6B",
  "6C",
  "6D",
  "7A",
  "7B",
  "7C",
  "7D",
  "8A",
  "8B",
  "8C",
  "8D",
  "9A",
  "9B",
  "9C",
  "9D",
  "10A",
  "10B",
  "10C",
  "10D",
  "11A",
  "11B",
  "11C",
  "11D",
  "12A",
  "12B",
  "12C",
  "12D",
  "13A",
  "13B",
  "13C",
  "13D",
  "14A",
  "14B",
  "14C",
  "14D",
  "15A",
  "15B",
  "15C",
  "15D",
];

export const whyChooseUsData = [
  {
    icon: Plane,
    title: "Fast & Easy Booking",
    description: "Book your flights in minutes with our intuitive interface.",
  },
  {
    icon: Globe,
    title: "Worldwide Destinations",
    description: "Explore flights across continents at competitive prices.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment Options",
    description: "Multiple payment methods with end-to-end encryption.",
  },
  {
    icon: Clock,
    title: "Real-Time Availability",
    description: "Always up-to-date with seat availability and flight times.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Thousands",
    description: "Verified flights and secure transactions you can rely on.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Smooth booking experience across all devices.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Date Search",
    description: "Choose the best dates with our flexible calendar tool.",
  },
  {
    icon: Users,
    title: "24/7 Customer Support",
    description: "We're here to help—anytime, anywhere.",
  },
];

export const reviews = [
  "This platform has transformed how we manage our team. Work tracking and payroll processing are finally seamless. It saved us hours every week. A must-have for any modern HR department.",
  "We started using this system last month, and it's been a game-changer. Employees can log work effortlessly, and HR can manage everything from one place. The entire team loves it.",
  "As an HR executive, verifying employees, managing salaries, and reviewing progress is so much easier now. The UI is clean and everything works without hassle. Great job!",
  "This web app truly simplifies employee management. Real-time updates and toast notifications keep everyone informed. We now spend less time managing, and more time growing our business.",
  "Our employees no longer struggle to report their daily tasks. The form is intuitive and quick. HR can see everything instantly and follow up when needed. Very practical tool.",
  "I can finally say goodbye to messy spreadsheets! Payroll and work logs are now centralized, and payment tracking is automated. This solution fits perfectly into our workflow.",
  "Managing a team used to be stressful. But now, the clear dashboards, instant CRUD feedback, and secure role-based access make everything feel under control. Very smart design.",
  "Our admin loves the salary management features. The ability to increase salaries safely and promote employees is incredibly helpful. It works like a real enterprise-grade system.",
  "Switching to this system helped us reduce manual errors and miscommunications. Everyone knows what to do, where to report, and how to view their history. Very efficient!",
  "The responsive layout means our team can log work from any device—even on the go. That flexibility alone made this platform worth using.",
  "Payment history and transaction tracking used to be a headache. Now it's all logged and searchable. Our finance department is much happier now.",
  "The chart visualization of employee performance and salary is a great touch. Helps us make better decisions and motivates employees to stay productive.",
  "Employees really appreciate how easy it is to log their hours. It's simple but powerful. Plus, they can see their own history and updates in real-time.",
  "The HR dashboard offers everything we need in one place—verification, salary updates, payment handling. It's made our HR workflow smooth and completely digital.",
  "This app feels like it was built for real teams, not just a demo. Every feature solves a specific business pain point. We're impressed.",
  "We needed a system that was both easy to use and secure. This one checks all the boxes. Firebase auth with role-based routes is perfectly implemented.",
  "Onboarding new team members is now so much faster. Registering roles, setting designations, uploading photos—it's all intuitive and polished. Great user experience.",
  "We especially like how payment approval and execution are split between HR and Admin. It mirrors how real companies operate. Very thoughtful design choices.",
  "Finally, we can manage HR, Employee, and Admin roles without overlap or confusion. The access control is spot-on and keeps the system safe.",
  "We didn't expect such a polished tool for internal use. Everything just works—from toast messages to secure API routes. Excellent work overall.",
  "This is exactly what small to mid-sized companies need. Lightweight, responsive, and covers all essential operations. Highly recommend to any HR team.",
  "Our team adopted it within days. No training needed—just clear forms, smart layout, and everything is self-explanatory. Really speaks to the quality of the UX.",
  "I especially appreciate that data updates reflect instantly without reloads. This makes the whole platform feel modern and highly efficient for day-to-day use.",
  "From managing employees to monitoring workflow and approving salaries, this web app has become an integral part of our daily operations. Couldn't ask for more.",
];
