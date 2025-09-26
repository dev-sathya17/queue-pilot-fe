type DocItem = {
  title: string;
  content: string;
};

type DocCategory = {
  name: string;
  items: DocItem[];
};

export const docCategories: DocCategory[] = [
  {
    name: "Getting Started",
    items: [
      {
        title: "Creating an Account",
        content:
          "Sign up with your email or use Google OAuth for a fast login. Only verified emails can access the platform to ensure security and reliability.",
      },
      {
        title: "Dashboard Overview",
        content:
          "Once logged in, you'll land on the main dashboard. Here you can track current jobs, see their statuses, view past jobs in a paginated history, and monitor your available credits.",
      },
      {
        title: "Navigating the Interface",
        content:
          "Use the sidebar (or mobile dropdown) to access documentation, job history, and account settings. Key metrics like job progress and credit usage are displayed prominently.",
      },
    ],
  },
  {
    name: "Credits System",
    items: [
      {
        title: "How Credits Work",
        content:
          "Each job type consumes a set number of credits. For example, resizing an image costs 2 credits per file, while sending an email notification costs 3 credits per recipient. Monitor your credits on the dashboard and ensure you have enough before submitting jobs.",
      },
      {
        title: "Purchasing Credits",
        content:
          "If you run out of credits, you can buy additional credits through the payment gateway. Credits are applied instantly and can be used across all job types.",
      },
      {
        title: "Credit Expiration",
        content:
          "Credits may have an expiration period depending on your plan. Keep an eye on your dashboard to avoid losing unused credits.",
      },
    ],
  },
  {
    name: "Jobs & Usage",
    items: [
      {
        title: "Submitting Image Resizing Jobs",
        content:
          "Upload one or multiple images for resizing. Each image consumes 2 credits. Monitor progress in real-time and download results once completed. Failed jobs are retried automatically based on your plan's retry policy.",
      },
      {
        title: "Sending Email Notifications",
        content:
          "Provide a list of recipients and compose your message. Each recipient consumes 3 credits. Track delivery status and errors in the dashboard.",
      },
      {
        title: "Job History & Tracking",
        content:
          "All past jobs are stored in a paginated history with timestamps, execution duration, and status. You can filter and search jobs for easy tracking.",
      },
    ],
  },
  {
    name: "Account & Profile",
    items: [
      {
        title: "Updating Profile",
        content:
          "You can update your name, phone number, and avatar at any time. Email addresses are fixed and must be verified to access the platform.",
      },
      {
        title: "Security & Verification",
        content:
          "Only verified users can log in. Use strong passwords and keep your account information up-to-date. All activities are logged for security and auditing purposes.",
      },
      {
        title: "Theme & Preferences",
        content:
          "Switch between dark and light modes from your profile. Customize job notifications and dashboard preferences for a personalized experience.",
      },
    ],
  },
];

export const faqCategory = {
  name: "FAQ",
  items: [
    {
      title: "What happens if I run out of credits mid-job?",
      content:
        "Jobs will stop executing if you don't have enough credits. You can top up your credits via the payment gateway and resume pending jobs.",
    },
    {
      title: "Do credits expire?",
      content:
        "No. Credits do not expire. They remain in your account until you use them.",
    },
    {
      title: "Why did my job fail?",
      content:
        "Jobs can fail due to invalid inputs, insufficient credits, or temporary server issues. Failed jobs are retried automatically according to your plan's retry policy.",
    },
    {
      title: "Can I submit multiple jobs at once?",
      content:
        "Yes! You can batch multiple jobs, and each will consume credits individually. Monitor progress in real-time on your dashboard.",
    },
    {
      title: "Can I change my email?",
      content:
        "No, email addresses cannot be changed once verified. Only verified emails can access the platform for security reasons.",
    },
    {
      title: "Do you offer a free plan?",
      content:
        "Yes, the Basic plan is free and includes a limited number of credits per month. You can upgrade to Pro or Enterprise for additional credits and advanced features.",
    },
    {
      title: "How do I contact support?",
      content:
        "You can reach support via the contact form in your dashboard or by emailing our support team. We respond promptly to all inquiries.",
    },
  ],
};
