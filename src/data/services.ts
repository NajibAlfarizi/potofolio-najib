import { ServiceItem } from "@/types";

export const freelanceServices: ServiceItem[] = [
  {
    number: "01",
    title: "Web Applications",
    tagline: "High-Performance Modern Web Apps",
    description:
      "Membangun aplikasi web fullstack yang cepat, responsif, dan SEO-friendly menggunakan Next.js dan React modern dengan UI berstandar SaaS.",
    deliverables: [
      "Custom Frontend & Responsive UI",
      "Server-Side Rendering (SSR/SSG)",
      "Interactive Dashboards & Data Tables",
      "Authentication & Protected Routes",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    timeline: "1 - 3 Minggu",
  },
  {
    number: "02",
    title: "Business Management Systems & POS",
    tagline: "Custom Point of Sale & Operational ERP",
    description:
      "Sistem kasir cerdas, manajemen inventaris stok barang/IMEI, pelacakan histori pelanggan, hingga integrasi printer thermal Bluetooth ESC/POS.",
    deliverables: [
      "Point of Sale (POS) & Barcode Scanner",
      "Manajemen Inventaris & Multi-Gudang",
      "Pemisahan Buku Kas & Laporan Finansial",
      "Cetak Struk Thermal Bluetooth 58mm",
    ],
    technologies: ["TypeScript", "Express.js", "PostgreSQL", "Prisma", "Capacitor"],
    timeline: "2 - 4 Minggu",
  },
  {
    number: "03",
    title: "Multi-Tenant SaaS Architecture",
    tagline: "Scalable Subscription Software",
    description:
      "Perancangan dan implementasi platform SaaS dengan isolasi data tingkat tenant, manajemen lisensi/kuota, dan admin super-panel terpusat.",
    deliverables: [
      "Multi-Tenant Tenant Isolation & RBAC",
      "Onboarding & Subscription Management",
      "Superadmin Global Monitoring Panel",
      "Automated Database Migrations & Seeds",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    timeline: "3 - 6 Minggu",
  },
  {
    number: "04",
    title: "High-Performance Backend APIs",
    tagline: "Secure, Scalable & Documented REST Endpoints",
    description:
      "Pengembangan API backend handal dengan validasi skema ketat, enkripsi JWT, optimasi kueri database relasional, dan real-time WebSockets.",
    deliverables: [
      "RESTful API & WebSockets (Socket.IO)",
      "Database Schema Design & Indexing",
      "JWT Authentication & Role Permissions",
      "Rate Limiting & Error Handling Middleware",
    ],
    technologies: ["Express.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.IO"],
    timeline: "1 - 3 Minggu",
  },
  {
    number: "05",
    title: "Payment & System Integrations",
    tagline: "Midtrans, Escrow & Hardware APIs",
    description:
      "Integrasi seamless dengan payment gateway nasional (Midtrans Snap/QRIS), sistem penahanan dana (escrow), bot WhatsApp, dan AI Assistant.",
    deliverables: [
      "Payment Gateway (Midtrans Snap & QRIS)",
      "Webhook Verification & Idempotency",
      "AI Assistant (Groq / Gemini Function Calling)",
      "Automated Expiration Background Workers",
    ],
    technologies: ["Midtrans", "REST Webhooks", "Cron Jobs", "Groq AI"],
    timeline: "1 - 2 Minggu",
  },
  {
    number: "06",
    title: "Cloud Deployment & Infrastructure",
    tagline: "Production Ready CI/CD & Cloud Hosting",
    description:
      "Konfigurasi deployment ke Vercel, VPS Linux (Ubuntu), container Docker, konfigurasi Nginx reverse proxy, SSL/HTTPS, dan continuous deployment.",
    deliverables: [
      "Dockerization & Compose Setup",
      "VPS Setup (Ubuntu, Nginx, Certbot SSL)",
      "Automated CI/CD via GitHub Actions",
      "Performance Monitoring & Backup Routine",
    ],
    technologies: ["Docker", "Linux / VPS", "Nginx", "GitHub Actions", "Vercel"],
    timeline: "3 - 7 Hari",
  },
];
