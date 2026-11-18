import { ProjectData } from "@/types";

export const projects: ProjectData[] = [
  {
    id: "ibiios-app",
    number: "01",
    title: "IbiiOS",
    tagline: "Modern 3-in-1 Point of Sales (POS) & Unified Business Engine",
    category: "Cloud Point of Sales & Business OS",
    accentColor: "#2563EB",
    gradient: "from-blue-600 via-indigo-600 to-sky-600",
    summary:
      "Platform software kasir digital (POS) 3-in-1 modern yang menyatukan operasional ritel & minimarket, kafe & restoran (lengkap dengan QR Self-Order & Kitchen Display System / KDS), serta manajemen jasa servis dalam satu ekosistem terpadu tanpa biaya komisi.",
    problem:
      "Pelaku usaha ritel, F&B, dan jasa servis selama ini terbebani software yang terfragmentasi (harus langganan aplikasi kasir terpisah untuk toko dan kafe), tingginya potongan komisi per transaksi, serta antarmuka yang lambat dan macet saat koneksi internet toko mengalami gangguan.",
    approach:
      "Membangun arsitektur modern Next.js yang ringan dan responsif dengan kapabilitas Offline-First. Menggabungkan 3 spesialisasi bisnis dalam satu dasbor: alur cepat kasir ritel dengan pemindai barcode, alur meja & pemesanan mandiri QR untuk F&B bersama display dapur (KDS), serta pelacakan tiket pengerjaan servis gadget.",
    architecture: {
      overview:
        "IbiiOS Web Client / PWA -> Edge API Routes & Middleware -> PostgreSQL & IndexedDB (Offline-First Cache) -> WebSocket Kitchen Display System -> ESC/POS Thermal Bluetooth Service",
      nodes: [
        { id: "client", label: "Kasir & QR Self-Order", role: "Next.js Responsive PWA", iconName: "Monitor" },
        { id: "gateway", label: "Edge API & Auth", role: "Realtime Business Logic", iconName: "Server" },
        { id: "offline", label: "IndexedDB Local Store", role: "Offline-First Engine", iconName: "HardDrive" },
        { id: "db", label: "PostgreSQL Database", role: "Master Cloud Storage", iconName: "Database" },
        { id: "kds", label: "Kitchen Display (KDS)", role: "Realtime WebSocket Feed", iconName: "Tv" },
        { id: "printer", label: "Printer Thermal 58/80mm", role: "ESC/POS Bluetooth / USB", iconName: "Printer" },
      ],
      edges: [
        { from: "client", to: "gateway", label: "Order & Checkout" },
        { from: "client", to: "offline", label: "Local Cache (Offline Sync)" },
        { from: "gateway", to: "db", label: "Master Sync" },
        { from: "gateway", to: "kds", label: "Live Order Broadcast" },
        { from: "client", to: "printer", label: "Raw Thermal Struk" },
      ],
    },
    features: [
      {
        title: "Konsep 3-in-1 Serbaguna",
        description: "Mendukung operasional ritel/minimarket, kafe/resto (QR Self-Order + KDS), hingga manajemen reparasi/servis dalam satu platform.",
        tag: "Core Capability",
      },
      {
        title: "Arsitektur Offline-First",
        description: "Kasir tetap dapat bertransaksi saat internet bermasalah, data tersimpan di local cache dan otomatis tersinkronisasi ketika online kembali.",
        tag: "High Reliability",
      },
      {
        title: "Tanpa Biaya Komisi (0% Fee)",
        description: "Memberikan efisiensi maksimal bagi pelaku usaha tanpa ada potongan persentase margin dari setiap transaksi penjualan.",
        tag: "Business Value",
      },
      {
        title: "Cetak Struk Thermal Fleksibel",
        description: "Integrasi cetak langsung ke printer thermal 58mm & 80mm melalui koneksi Bluetooth, USB, maupun jaringan LAN.",
        tag: "Hardware Integration",
      },
      {
        title: "QR Self-Order & Kitchen Display",
        description: "Pelanggan resto cukup memindai QR code di meja untuk memesan, pesanan langsung tampil di layar dapur (KDS) secara instan.",
        tag: "F&B Automation",
      },
      {
        title: "Laporan Omzet & Analitik Realtime",
        description: "Monitoring performa penjualan, laba kotor, produk terlaris, dan arus kas harian secara visual dan transparan.",
        tag: "Analytics",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "IndexedDB",
      "WebSockets",
      "ESC/POS Thermal",
      "Tailwind CSS",
    ],
    challenges: [
      {
        challenge: "Menjaga integritas data saat transaksi dilakukan dalam kondisi offline dan disinkronkan serentak ketika kembali online.",
        solution: "Menerapkan event-driven conflict resolution berbasis timestamp dan queue state lokal dengan enkripsi IndexedDB yang andal.",
      },
      {
        challenge: "Kebutuhan alur kerja F&B yang berbeda total dengan alur kasir ritel barcode biasa.",
        solution: "Mendesain modular state machine terpisah untuk manajemen meja & pesanan dapur tanpa menambah kompleksitas UI kasir ritel standar.",
      },
    ],
    results: [
      { metric: "3-in-1", label: "Ritel, F&B, dan Jasa Servis Terpadu" },
      { metric: "100%", label: "Offline-First Transaction Reliability" },
      { metric: "0%", label: "Biaya Komisi Transaksi Merchant" },
      { metric: "< 0.4s", label: "Generasi & Cetak Struk Kasir" },
    ],
    gitCommits: [
      { hash: "7c19a4e", title: "feat: implement offline-first sync engine with indexeddb", description: "Enables offline transaction caching with automated background cloud synchronization.", date: "Commit 7c19a4e" },
      { hash: "3f82b01", title: "feat: f&b qr self-order workflow and live kds dispatcher", description: "Table ordering system with instant websocket notifications to kitchen screen.", date: "Commit 3f82b01" },
      { hash: "9e51c8d", title: "feat: esc/pos bluetooth thermal receipt generation", description: "Modular driver supporting 58mm and 80mm thermal paper standard commands.", date: "Commit 9e51c8d" },
    ],
    links: {
      demo: "https://ibiios.app/",
    },
  },
  {
    id: "konter-system",
    number: "02",
    title: "Konter System",
    tagline: "Multi-Tenant Store OS, Repair Service Kanban & PPOB Management",
    category: "Enterprise Multi-Tenant SaaS & POS",
    accentColor: "#0284C7",
    gradient: "from-sky-600 via-blue-600 to-indigo-600",
    summary:
      "Sistem ERP retail multi-tenant khusus konter HP, reparasi gadget, dan loket pulsa/PPOB. Dilengkapi pemisahan buku kas fisik vs saldo digital server, papan kanban servis, cetak struk thermal Bluetooth ESC/POS, dan asisten bisnis AI.",
    problem:
      "Pengelola konter HP kesulitan mencatat inventaris unit ber-IMEI, melacak suku cadang pada unit servis yang masih dikerjakan teknisi, menghitung bagi hasil komisi perbaikan, serta memisahkan saldo deposit server pulsa dari uang cash fisik di laci kasir.",
    approach:
      "Mendesain arsitektur multi-tenant dengan isolasi data tingkat tenant. Mengembangkan frontend Next.js yang responsif, backend Express/TypeScript dengan Prisma ORM, aplikasi mobile via Capacitor untuk cetak printer Bluetooth thermal, serta integrasi AI Function Calling untuk asisten tanya jawab performa bisnis.",
    architecture: {
      overview:
        "Multi-Tenant Client (Next.js & Mobile Web) -> Express.js API Gateway (RBAC & Tenant Middleware) -> Prisma ORM -> PostgreSQL Multi-Tenant DB -> Repair Kanban Engine & Bluetooth Thermal Print Service",
      nodes: [
        { id: "client", label: "Next.js Kasir & Mobile UI", role: "Hybrid Web & PWA", iconName: "Smartphone" },
        { id: "gateway", label: "Express API & Tenant Auth", role: "RBAC & Multi-Tenant Routing", iconName: "ShieldCheck" },
        { id: "db", label: "PostgreSQL Multi-Tenant", role: "Tenant-Isolated Database", iconName: "Database" },
        { id: "kanban", label: "Service Kanban Engine", role: "Technician & Sparepart Tracker", iconName: "Wrench" },
        { id: "ai", label: "AI Business Assistant", role: "Function Calling Analytics", iconName: "Sparkles" },
        { id: "printer", label: "ESC/POS 58mm Thermal", role: "Bluetooth Raw Receipt Bytes", iconName: "Printer" },
      ],
      edges: [
        { from: "client", to: "gateway", label: "Tenant Scoped API Request" },
        { from: "gateway", to: "db", label: "Tenant-Filtered Queries" },
        { from: "gateway", to: "kanban", label: "Service Lifecycle Updates" },
        { from: "gateway", to: "ai", label: "Business Query Execution" },
        { from: "client", to: "printer", label: "Bluetooth Thermal Raw Output" },
      ],
    },
    features: [
      {
        title: "Sistem Kasir & Pemindai Barcode IMEI",
        description: "Pencatatan transaksi instan dengan barcode scanner, pencarian cepat stok aksesoris, pulsa, dan handphone ber-IMEI.",
        tag: "Point of Sale",
      },
      {
        title: "Workflow Servis HP (Kanban Board)",
        description: "Tracking status unit masuk, estimasi biaya, alokasi sparepart toko, dan perhitungan komisi otomatis bagi teknisi.",
        tag: "Repair Management",
      },
      {
        title: "Pemisahan Buku Kas Tunai vs Saldo Server",
        description: "Pemisahan ketat antara arus uang fisik kasir dengan saldo digital server pulsa guna mencegah selisih pembukuan.",
        tag: "Fintech & Bookkeeping",
      },
      {
        title: "Multi-Tenant Control Plane",
        description: "Arsitektur multi-tenant dengan isolasi data aman antar pemilik toko/cabang konter dengan sistem kuota dan aktivasi merchant.",
        tag: "Cloud Architecture",
      },
      {
        title: "Cetak Struk Thermal Bluetooth 58mm",
        description: "Pencetakan nota transaksi kasir dan bukti tanda terima servis langsung ke printer thermal tanpa popup dialog bawaan browser yang lambat.",
        tag: "Hardware Integration",
      },
      {
        title: "Asisten Analitik AI",
        description: "Modul tanya jawab cerdas untuk menganalisa keuntungan produk terlaris dan ringkasan komisi teknisi secara instan.",
        tag: "AI Integration",
      },
    ],
    technologies: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Capacitor",
      "ESC/POS",
      "Tailwind CSS",
      "Groq AI API",
    ],
    challenges: [
      {
        challenge: "Menghindari risiko kebocoran data antar pemilik konter pada query database relasional yang kompleks.",
        solution: "Menerapkan Prisma Client extension middleware yang menyuntikkan tenant_id secara otomatis ke setiap kueri baca dan tulis.",
      },
      {
        challenge: "Menghasilkan cetakan thermal Bluetooth yang presisi dari aplikasi web di perangkat seluler tanpa driver khusus PC.",
        solution: "Menulis driver ESC/POS ringan yang menghasilkan byte array langsung dan mengirimnya ke channel Bluetooth RFCOMM.",
      },
    ],
    results: [
      { metric: "Multi-Tenant", label: "Strict Tenant Data Isolation" },
      { metric: "58mm", label: "Direct Bluetooth Thermal Printing" },
      { metric: "100%", label: "Akurasi Buku Kas Tunai vs Saldo Server" },
      { metric: "45%", label: "Efisiensi Pengerjaan Servis & Komisi" },
    ],
    gitCommits: [
      { hash: "a49d11c", title: "feat: multi-tenant middleware & tenant onboarding schema", description: "Enforced strict tenant scoping across all Express routes and Prisma queries.", date: "Commit a49d11c" },
      { hash: "7b13e9a", title: "feat: repair kanban board with technician commission formula", description: "Dynamic stage transitions and sparepart cost deduction engine.", date: "Commit 7b13e9a" },
      { hash: "3c85f2b", title: "feat: esc/pos bluetooth thermal printing integration", description: "Added raw byte formatting and auto-cut commands for 58mm receipts.", date: "Commit 3c85f2b" },
    ],
    links: {
      demo: "https://konter-system.vercel.app/",
    },
  },
];
