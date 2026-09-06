export const projects = [
    {
        slug: "device-monitoring-system",
        title: "Device Monitoring System",
        category: "Realtime Backend System",
        tagline:
            "Realtime device monitoring system built with Go, PostgreSQL, WebSocket, Docker, and Next.js.",
        description:
            "A realtime device monitoring system designed to track device availability through periodic heartbeats and automatically detect ONLINE/OFFLINE status changes.",
        featured: true,
        technologies: [
            "Go",
            "Gin",
            "PostgreSQL",
            "WebSocket",
            "JWT",
            "Docker",
            "Next.js",
            "TypeScript",
        ],
        features: [
            "Heartbeat-based device monitoring",
            "Automatic ONLINE/OFFLINE detection",
            "Background status monitoring",
            "WebSocket realtime communication",
            "JWT authentication",
            "Device CRUD",
            "Monitoring summary",
            "CSV report export",
            "Browser notifications",
            "Multi-device simulator",
        ],
        problem:
            "Traditional device monitoring often relies on manual refreshes or periodic polling, making it difficult to detect device failures and reflect status changes immediately.",
        solution:
            "Implemented a heartbeat-based monitoring system where devices periodically report their activity. A background monitor detects missing heartbeats and changes the device status to OFFLINE, while WebSocket events propagate status changes to connected dashboards in realtime.",
        architecture:
            "Device / Simulator → Go Backend → PostgreSQL + Status Monitor → WebSocket → Next.js Dashboard",
        challenges: [
            "Reliable offline device detection",
            "Realtime status propagation",
            "Concurrent background monitoring",
            "Maintaining clean separation between handlers, services, and repositories",
        ],
        screenshots: [],
        demo: "",
        github: "https://github.com/shiinobu/device-monitoring-system",
        result:
            "A reproducible realtime monitoring system demonstrating backend architecture, asynchronous processing, WebSocket communication, and database-driven device management.",
    },
    {
        slug: "disbursement-api",
        title: "Disbursement API",
        category: "Transactional Backend API",
        tagline:
            "Business-driven disbursement API built with Go, MySQL, JWT authentication, and role-based access control.",
        description:
            "A backend API for managing fund disbursement workflows with authentication, authorization, transaction status management, search, pagination, and reporting capabilities.",
        featured: true,
        technologies: [
            "Go",
            "REST API",
            "MySQL",
            "JWT",
            "GORM",
            "Docker",
        ],
        features: [
            "RESTful API",
            "JWT authentication",
            "Role-based authorization",
            "Disbursement lifecycle management",
            "Approval workflow",
            "Rejection workflow",
            "Status-based business rules",
            "Pagination",
            "Search and filtering",
            "CSV export",
        ],
        problem:
            "Financial or transactional workflows require more than basic CRUD operations. Different operations must follow business rules, user permissions, and controlled state transitions.",
        solution:
            "Designed a REST API around the disbursement lifecycle, with JWT authentication, role-based authorization, status-based business rules, pagination, search, and reporting endpoints.",
        architecture:
            "Client → REST API → Handler → Service → Repository → MySQL",
        challenges: [
            "Enforcing role-based authorization",
            "Implementing controlled status transitions",
            "Separating business logic from persistence",
            "Designing consistent paginated API responses",
        ],
        screenshots: [],
        demo: "",
        github: "https://github.com/shiinobu/disbursement-api",
        result:
            "A structured transactional API demonstrating authentication, authorization, business rules, database persistence, and production-oriented API design.",
    },
    {
        slug: "manufacture-system-api",
        title: "Manufacture System API",
        category: "Business Management API",
        tagline:
            "Go REST API for managing manufacturing data and purchase workflows with JWT authentication and MySQL.",
        description:
            "A Go-based REST API for managing core manufacturing data across users, customers, suppliers, products, and purchase transactions.",
        featured: false,
        technologies: [
            "Go",
            "Gorilla Mux",
            "JWT",
            "MySQL",
            "GitHub Actions",
        ],
        features: [
            "RESTful API",
            "JWT authentication",
            "Protected routes",
            "User management",
            "Customer management",
            "Supplier management",
            "Product management",
            "Purchase transactions",
        ],
        problem: "",
        solution: "",
        architecture:
            "Client → Go REST API → Controllers → Models → MySQL",
        challenges: [],
        screenshots: [],
        demo: "",
        github: "https://github.com/shiinobu/manufacture-system-api",
        result:
            "A multi-domain Go backend demonstrating REST API development, authentication, relational data management, and CI validation.",
    },
    {
        slug: "tourism-management-api",
        title: "Tourism Management API",
        category: "Full-Stack REST API",
        tagline:
            "Laravel REST API with React frontend for managing tourism destinations and image-based content.",
        description:
            "A full-stack tourism management application built with Laravel and React for managing tourism destinations through a REST API.",
        featured: false,
        technologies: [
            "PHP",
            "Laravel",
            "React",
            "MySQL",
            "Eloquent",
            "Sanctum",
            "Axios",
        ],
        features: [
            "Laravel REST API",
            "Tourism destination CRUD",
            "React frontend integration",
            "MySQL persistence",
            "Image upload",
            "Image replacement",
            "Request validation",
            "Laravel API Resources",
        ],
        problem: "",
        solution: "",
        architecture:
            "React → Axios → Laravel REST API → Eloquent → MySQL",
        challenges: [],
        screenshots: [],
        demo: "",
        github: "https://github.com/shiinobu/tourism-management-api",
        result:
            "A full-stack REST application demonstrating Laravel API development, React integration, image management, and relational database persistence.",
    },
] as const;