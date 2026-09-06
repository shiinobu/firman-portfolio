import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
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
            "Docker Compose",
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

        technicalHighlights: [
            "10s device heartbeat interval",
            "5s background monitoring interval",
            "30s offline detection threshold",
            "WebSocket DEVICE_STATUS_CHANGED events",
            "Handler → Service → Repository architecture",
            "PostgreSQL connection pooling",
            "Concurrent multi-device simulation",
            "Automated backend testing",
            "GitHub Actions CI validation",
        ],

        architectureFlow: [
            {
                name: "Device / Simulator",
                description:
                    "Sends periodic heartbeat requests to report device activity.",
            },
            {
                name: "Go Backend",
                description:
                    "Receives device requests and coordinates authentication, business logic, persistence, and realtime events.",
            },
            {
                name: "PostgreSQL",
                description:
                    "Stores device information, heartbeat activity, and monitoring state.",
            },
            {
                name: "Background Monitor",
                description:
                    "Periodically evaluates heartbeat activity and detects devices that exceed the offline threshold.",
            },
            {
                name: "WebSocket",
                description:
                    "Broadcasts device status changes to connected dashboard clients in realtime.",
            },
            {
                name: "Next.js Dashboard",
                description:
                    "Displays the current device status and updates the interface when realtime events are received.",
            },
        ],

        monitoringFlow: [
            "Device sends a heartbeat every 10 seconds.",
            "The backend records the latest heartbeat activity.",
            "A background monitor checks device activity every 5 seconds.",
            "A device is considered offline when no heartbeat is received for more than 30 seconds.",
            "The backend updates the device status.",
            "A DEVICE_STATUS_CHANGED event is broadcast through WebSocket.",
            "Connected dashboards update the device status without page refresh.",
        ],

        implementation: [
            {
                title: "Heartbeat Processing",
                description:
                    "Devices periodically send heartbeat requests to the Go backend. The latest activity timestamp is persisted so the monitoring process can determine whether a device is still active.",
            },
            {
                title: "Background Monitoring",
                description:
                    "A background process periodically evaluates heartbeat activity against the configured timeout and changes device status when the heartbeat threshold is exceeded.",
            },
            {
                title: "Realtime Event Broadcasting",
                description:
                    "When a device status changes, the backend broadcasts a DEVICE_STATUS_CHANGED event through WebSocket so connected dashboard clients can update immediately.",
            },
            {
                title: "Layered Backend Architecture",
                description:
                    "HTTP handlers are separated from business services and database repositories, keeping transport, business logic, and persistence concerns isolated.",
            },
            {
                title: "Authentication",
                description:
                    "JWT-based authentication protects backend operations while password credentials are securely handled using bcrypt.",
            },
        ],

        problem:
            "Traditional device monitoring often relies on manual refreshes or periodic polling, making it difficult to detect device failures and reflect status changes immediately.",

        solution:
            "Implemented a heartbeat-based monitoring system where devices periodically report their activity. A background monitor detects missing heartbeats and changes the device status to OFFLINE, while WebSocket events propagate status changes to connected dashboards in realtime.",

        architecture:
            "Devices or simulators send heartbeat requests to the Go backend. The backend stores device activity in PostgreSQL while a background monitoring process evaluates heartbeat timeouts. Status changes are then broadcast through WebSocket to the Next.js dashboard.",

        challenges: [
            "Designing reliable heartbeat timeout detection",
            "Synchronizing background monitoring with database state",
            "Broadcasting device status changes through WebSocket",
            "Maintaining clean separation between HTTP handlers, services, and repositories",
            "Handling multiple simulated devices concurrently",
        ],

        screenshots: [],

        github: "https://github.com/shiinobu/device-monitoring-system",

        result:
            "The system provides realtime visibility into device availability without requiring dashboard refreshes, while demonstrating practical backend engineering across realtime communication, background processing, database persistence, authentication, testing, and containerized deployment.",
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

        technicalHighlights: [
            "JWT authentication",
            "Role-based access control",
            "PENDING → APPROVED / REJECTED workflow",
            "Status-based deletion rules",
            "Protected administrative operations",
            "Pagination metadata",
            "Search query support",
            "CSV reporting",
            "Layered repository/service/handler structure",
            "MySQL persistence with GORM",
        ],

        architectureFlow: [
            {
                name: "API Client",
                description:
                    "Sends authenticated requests to the disbursement REST API.",
            },
            {
                name: "HTTP Handler",
                description:
                    "Receives HTTP requests, validates input, and maps requests to application operations.",
            },
            {
                name: "Service Layer",
                description:
                    "Applies business rules, authorization requirements, and disbursement state transitions.",
            },
            {
                name: "Repository",
                description:
                    "Handles persistence operations against the MySQL database.",
            },
            {
                name: "MySQL",
                description:
                    "Stores users, disbursement records, and transactional data.",
            },
        ],

        implementation: [
            {
                title: "JWT Authentication",
                description:
                    "Protected API operations use JWT-based authentication to verify the identity of the requesting user before business operations are executed.",
            },
            {
                title: "Role-Based Authorization",
                description:
                    "Sensitive operations are restricted according to user roles, ensuring that only authorized users can perform administrative actions.",
            },
            {
                title: "Disbursement State Management",
                description:
                    "Disbursement records follow controlled status transitions such as PENDING, APPROVED, and REJECTED instead of allowing unrestricted CRUD operations.",
            },
            {
                title: "Business Rule Enforcement",
                description:
                    "Operations such as approval, rejection, and deletion are validated against the current record status and user permissions before modifying persistent data.",
            },
            {
                title: "Search & Pagination",
                description:
                    "List endpoints support search and pagination while returning metadata that allows clients to understand the current result set and total records.",
            },
            {
                title: "CSV Reporting",
                description:
                    "Disbursement data can be exported into CSV format for reporting and operational use cases.",
            },
        ],

        stateTransitions: [
            {
                from: "PENDING",
                action: "Approve",
                to: "APPROVED",
            },
            {
                from: "PENDING",
                action: "Reject",
                to: "REJECTED",
            },
        ],

        problem:
            "Financial or transactional workflows require more than basic CRUD operations. Different operations must follow business rules, user permissions, and controlled state transitions.",

        solution:
            "Designed a REST API around the disbursement lifecycle, with JWT authentication, role-based authorization, status-based business rules, pagination, search, and reporting endpoints.",

        architecture:
            "HTTP requests are handled by the API layer and passed through business services before interacting with the MySQL persistence layer through repositories. Authentication and authorization middleware protect operations according to user roles and business rules.",

        challenges: [
            "Implementing controlled disbursement state transitions",
            "Enforcing role-based permissions on sensitive operations",
            "Preventing invalid operations based on the current record status",
            "Designing consistent paginated API responses",
            "Supporting search and CSV reporting alongside transactional operations",
        ],

        screenshots: [],

        github: "https://github.com/shiinobu/disbursement-api",

        result:
            "The API demonstrates how business rules, authorization, transaction states, pagination, search, and reporting can be organized into a maintainable Go backend architecture.",
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
            "Purchase management",
        ],

        technicalHighlights: [
            "JWT authentication",
            "Protected API routes",
            "Multi-domain business entities",
            "User, customer, supplier, and product management",
            "Purchase transaction management",
            "MySQL persistence",
            "Environment-based configuration",
            "Centralized response helpers",
            "Automated testing",
            "GitHub Actions CI",
            "go test validation",
            "go vet validation",
        ],

        architectureFlow: [
            {
                name: "API Client",
                description:
                    "Sends requests to the manufacturing REST API for authentication and business operations.",
            },
            {
                name: "Gorilla Mux",
                description:
                    "Routes HTTP requests to the appropriate controller based on the requested resource.",
            },
            {
                name: "Controller",
                description:
                    "Handles HTTP requests and coordinates operations for users, customers, suppliers, products, and purchases.",
            },
            {
                name: "MySQL",
                description:
                    "Persists manufacturing entities and purchase transaction data.",
            },
        ],

        implementation: [
            {
                title: "JWT Authentication",
                description:
                    "Authentication protects the API and provides a mechanism for identifying authenticated users.",
            },
            {
                title: "Multi-domain API",
                description:
                    "The backend manages several related manufacturing domains including users, customers, suppliers, products, and purchases.",
            },
            {
                title: "Structured Controllers",
                description:
                    "Domain-specific controllers organize HTTP operations around individual business resources.",
            },
            {
                title: "MySQL Persistence",
                description:
                    "Manufacturing and purchase data are persisted in MySQL for structured relational data management.",
            },
            {
                title: "Environment Configuration",
                description:
                    "Application configuration is separated from source code through environment-based configuration.",
            },
            {
                title: "Automated CI Validation",
                description:
                    "GitHub Actions validates the backend using automated tests and Go static analysis.",
            },
        ],

        problem:
            "Manufacturing workflows involve multiple related business entities that need to be managed consistently through a single backend system.",

        solution:
            "Built a Go REST API that separates manufacturing domains into structured controllers and models while providing authentication, database persistence, and automated CI validation.",

        architecture:
            "The API uses HTTP routing through Gorilla Mux, protected endpoints through JWT authentication, business controllers for domain operations, and MySQL persistence for manufacturing data.",

        challenges: [
            "Organizing multiple related business entities within a single API",
            "Maintaining consistent HTTP behavior across different controllers",
            "Protecting API routes with JWT authentication",
            "Managing relational manufacturing and purchase data",
            "Maintaining backend quality through automated CI validation",
        ],

        screenshots: [],

        github: "https://github.com/shiinobu/manufacture-system-api",

        result:
            "The project demonstrates practical Go API development across multiple business domains with JWT authentication, MySQL persistence, automated testing, and CI validation.",
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
            "Bootstrap",
        ],

        features: [
            "RESTful API",
            "Tourism destination CRUD",
            "Request validation",
            "Image upload",
            "Image replacement",
            "API Resources",
            "Laravel Sanctum authentication",
            "React frontend",
        ],

        technicalHighlights: [
            "Laravel REST API",
            "CRUD tourism destination management",
            "Request validation",
            "Image upload and replacement",
            "API Resource transformation",
            "Laravel Sanctum authentication",
            "Eloquent ORM",
            "React API integration",
            "Axios HTTP client",
            "MySQL persistence",
        ],

        architectureFlow: [
            {
                name: "React Frontend",
                description:
                    "Provides the user interface for managing tourism destinations and communicates with the backend through HTTP requests.",
            },
            {
                name: "Axios",
                description:
                    "Handles HTTP communication between the React frontend and Laravel REST API.",
            },
            {
                name: "Laravel API",
                description:
                    "Provides authentication, request validation, CRUD operations, API Resources, and image management.",
            },
            {
                name: "Eloquent",
                description:
                    "Handles relational data access between the Laravel application and MySQL.",
            },
            {
                name: "MySQL",
                description:
                    "Persists tourism destination and application data.",
            },
        ],

        implementation: [
            {
                title: "Laravel REST API",
                description:
                    "The backend exposes REST endpoints for managing tourism destination data and related operations.",
            },
            {
                title: "Request Validation",
                description:
                    "Incoming requests are validated before application data is created or updated.",
            },
            {
                title: "Image Management",
                description:
                    "The application supports tourism destination image upload and replacement workflows.",
            },
            {
                title: "API Resources",
                description:
                    "Laravel API Resources provide a structured representation of backend data returned to clients.",
            },
            {
                title: "Authentication",
                description:
                    "Laravel Sanctum is used to protect authenticated API operations.",
            },
            {
                title: "React API Integration",
                description:
                    "The React frontend consumes the Laravel REST API through Axios and provides the management interface.",
            },
        ],

        problem:
            "Tourism content requires both structured destination management and image-based content handling through an accessible web interface.",

        solution:
            "Built a Laravel REST API with validation, authentication, image management, and API Resources, then integrated it with a React frontend for destination management.",

        architecture:
            "The React frontend communicates with the Laravel REST API through Axios. Laravel handles authentication, request validation, business operations, image management, and MySQL persistence through Eloquent.",

        challenges: [
            "Handling image upload and replacement workflows",
            "Maintaining consistent API validation and responses",
            "Connecting a React frontend with the Laravel REST API",
            "Managing authenticated API access",
            "Keeping frontend and backend responsibilities clearly separated",
        ],

        screenshots: [],

        github: "https://github.com/shiinobu/tourism-management-api",

        result:
            "The project demonstrates full-stack API integration using Laravel and React while expanding backend experience beyond Go into PHP-based application development.",
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
    return projects.filter((project) => project.featured);
}

export function getSupportingProjects() {
    return projects.filter((project) => !project.featured);
}