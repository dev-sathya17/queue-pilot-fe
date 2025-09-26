import { Zap, BarChart3, Shield, CreditCard, CheckCircle } from "lucide-react";

export const features = [
  {
    icon: <Zap className="w-8 h-8 text-pink-400" />,
    title: "Blazing Fast Execution",
    desc: "Jobs are queued and executed instantly, ensuring minimal wait times.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    title: "Real-Time Monitoring",
    desc: "Track job progress, retries, and performance metrics in real time.",
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-400" />,
    title: "Secure by Design",
    desc: "Encryption, role-based access, and audit logs keep your data safe.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-yellow-400" />,
    title: "Credits-Based SaaS",
    desc: "Simple pricing — pay with credits per job, track usage, and scale effortlessly as you grow.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-pink-300" />,
    title: "Reliable Queues",
    desc: "Built with fault-tolerance, ensuring no jobs get lost in the process.",
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: "Scalable Architecture",
    desc: "Whether 10 or 10,000 jobs, Queue Pilot scales effortlessly.",
  },
];
