import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  {
    slug: "device-monitoring-system",
    title: "Device Monitoring System",
    category: "Realtime backend system",
    tagline:
      "Devices send heartbeats. A background monitor marks the silent ones OFFLINE and pushes the change to a live dashboard.",
    description:
      "A monitoring system that tracks device availability. Devices report in with periodic heartbeats, a background process finds the ones that went quiet, and the dashboard updates over WebSocket without a page refresh.",
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

    technicalHighlights: [
      "10s device heartbeat interval",
      "5s background monitoring interval",
      "30s offline detection threshold",
      "WebSocket DEVICE_STATUS_CHANGED events",
      "Handler → Service → Repository architecture",
      "PostgreSQL connection pooling",
      "Concurrent multi-device simulation",
      "GitHub Actions CI validation",
    ],

    specs: [
      { label: "Heartbeat", value: "every 10 s" },
      { label: "Monitor", value: "checks every 5 s" },
      { label: "Offline", value: "after 30 s of silence" },
      { label: "Push", value: "WebSocket, DEVICE_STATUS_CHANGED" },
    ],

    architectureFlow: [
      {
        name: "Device / Simulator",
        description: "Sends a heartbeat request every 10 seconds.",
      },
      {
        name: "Go backend",
        description:
          "Authenticates requests, applies business logic, stores state and emits realtime events.",
        via: "HTTP heartbeat",
      },
      {
        name: "PostgreSQL",
        description:
          "Stores device information, heartbeat activity and monitoring state.",
        via: "SQL",
      },
      {
        name: "Background monitor",
        description:
          "Checks heartbeat activity every 5 seconds and finds devices past the offline threshold.",
        via: "every 5 s",
      },
      {
        name: "WebSocket",
        description:
          "Broadcasts status changes to connected dashboard clients.",
        via: "DEVICE_STATUS_CHANGED",
      },
      {
        name: "Next.js dashboard",
        description:
          "Shows the current status of each device and updates when an event arrives.",
        via: "WebSocket",
      },
    ],

    monitoringFlow: [
      "Device sends a heartbeat every 10 seconds.",
      "The backend records the latest heartbeat activity.",
      "A background monitor checks device activity every 5 seconds.",
      "A device is considered offline when no heartbeat is received for more than 30 seconds.",
      "The backend updates the device status.",
      "A DEVICE_STATUS_CHANGED event is broadcast through WebSocket.",
      "Connected dashboards update the device status without a page refresh.",
    ],

    implementation: [
      {
        title: "Heartbeat processing",
        description:
          "Devices send heartbeat requests to the Go backend. The latest activity timestamp is stored so the monitor can tell whether a device is still active.",
      },
      {
        title: "Background monitoring",
        description:
          "A background process compares heartbeat activity against the configured timeout and changes the device status when the threshold is exceeded.",
      },
      {
        title: "Realtime broadcasting",
        description:
          "When a status changes, the backend broadcasts a DEVICE_STATUS_CHANGED event over WebSocket so connected dashboards update immediately.",
      },
      {
        title: "Layered backend",
        description:
          "HTTP handlers, business services and database repositories are separate, so transport, logic and persistence stay isolated.",
      },
      {
        title: "Authentication",
        description:
          "JWT protects backend operations, and passwords are handled with bcrypt.",
      },
    ],

    problem:
      "Device monitoring that relies on manual refreshes or polling makes it hard to notice failures and slow to show status changes.",
    solution:
      "Devices report their own activity with heartbeats. A background monitor spots missing heartbeats and sets the device to OFFLINE, and WebSocket events carry the change to connected dashboards in realtime.",
    architecture:
      "Devices or simulators send heartbeat requests to the Go backend. The backend stores activity in PostgreSQL while a background monitor evaluates heartbeat timeouts. Status changes are then broadcast over WebSocket to the Next.js dashboard.",

    challenges: [
      "Designing reliable heartbeat timeout detection",
      "Synchronizing background monitoring with database state",
      "Broadcasting device status changes through WebSocket",
      "Keeping HTTP handlers, services and repositories separate",
      "Handling multiple simulated devices concurrently",
    ],

    screenshots: [
      {
        src: "/projects/device-monitoring-system/02-realtime-online.png",
        alt: "Device Monitoring System dashboard showing two devices online, three offline, and toast notifications for devices coming online.",
        caption:
          "The dashboard after two devices resume heartbeats: counters update and toasts announce DMS-003 and DMS-004 ONLINE.",
        width: 1915,
        height: 910,
      },
      {
        src: "/projects/device-monitoring-system/03-realtime-offline.png",
        alt: "Device Monitoring System dashboard showing all five devices offline with toast notifications.",
        caption:
          "The same dashboard after the devices stop reporting: all five are OFFLINE.",
        width: 1915,
        height: 907,
      },
      {
        src: "/projects/device-monitoring-system/01-device-list.png",
        alt: "Device Monitoring System device list with device ID, name, serial number, IP address, location, status and last-seen time.",
        caption: "Device management with metadata, status and last-seen time.",
        width: 1264,
        height: 438,
      },
    ],

    video: {
      sources: [
        {
          src: "/projects/device-monitoring-system/realtime-demo.mp4",
          type: "video/mp4",
        },
        {
          src: "/projects/device-monitoring-system/realtime-demo.webm",
          type: "video/webm",
        },
      ],
      poster: "/projects/device-monitoring-system/realtime-demo-poster.webp",
      alt: "Screen recording of the dashboard. Five devices are online. The simulator stops, all five turn offline with toast notifications, then they come back online after a restart.",
      caption:
        "Local recording with the five-device simulator. I stop the simulator, every device goes OFFLINE once the heartbeat timeout passes, and ONLINE again when it restarts. The timeout was set to 15 s for the recording (default 30 s).",
      width: 1280,
      height: 800,
    },

    github: "https://github.com/shiinobu/device-monitoring-system",
    result:
      "Runs locally with Docker Compose. A five-device simulator generates heartbeats, so the ONLINE to OFFLINE flow can be watched without real hardware.",
  },

  {
    slug: "disbursement-api",
    title: "Disbursement API",
    category: "Transactional backend API",
    tagline:
      "A disbursement starts as PENDING and can be approved or rejected once. Anything already processed returns 409.",
    description:
      "A backend API for managing fund disbursement requests, with JWT authentication, role-based authorization, status rules, pagination, search and CSV export.",
    featured: true,

    technologies: ["Go", "REST API", "MySQL", "JWT", "GORM", "Docker"],

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

    specs: [
      { label: "States", value: "PENDING → APPROVED or REJECTED" },
      { label: "Guard", value: "409 if already processed" },
      { label: "Auth", value: "JWT, role-based access" },
      { label: "Lists", value: "pagination, search, CSV export" },
    ],

    requests: [
      {
        method: "POST",
        path: "/api/auth/login",
        status: 200,
        statusText: "OK",
        note: "Returns a JWT and the user with role: admin.",
      },
      {
        method: "POST",
        path: "/api/disbursements",
        status: 201,
        statusText: "Created",
        note: 'status: "PENDING", admin_fee: 2500 for an amount of 1500000.',
      },
      {
        method: "PATCH",
        path: "/api/disbursements/1/status",
        status: 200,
        statusText: "OK",
        note: 'Body { "status": "APPROVED" }. Response has status: "APPROVED" and processed_by.',
      },
      {
        method: "PATCH",
        path: "/api/disbursements/1/status",
        status: 409,
        statusText: "Conflict",
        note: 'Body { "status": "REJECTED" } on the same record. Error: "hanya disbursement pending yang dapat diproses" (only pending disbursements can be processed).',
      },
    ],

    architectureFlow: [
      {
        name: "API client",
        description: "Sends authenticated requests to the disbursement REST API.",
      },
      {
        name: "HTTP handler",
        description:
          "Receives requests, validates input and maps them to application operations.",
        via: "HTTP + JWT",
      },
      {
        name: "Service layer",
        description:
          "Applies business rules, authorization requirements and status transitions.",
      },
      {
        name: "Repository",
        description: "Handles persistence against the database.",
      },
      {
        name: "MySQL",
        description: "Stores users, disbursement records and transaction data.",
        via: "GORM",
      },
    ],

    implementation: [
      {
        title: "JWT authentication",
        description:
          "Protected operations verify the identity of the requesting user before any business logic runs.",
      },
      {
        title: "Role-based authorization",
        description:
          "Sensitive operations are limited by user role, so only authorized users can perform administrative actions.",
      },
      {
        title: "Status management",
        description:
          "A disbursement moves through PENDING, APPROVED and REJECTED with controlled transitions instead of open-ended CRUD.",
      },
      {
        title: "Business rules",
        description:
          "Approval, rejection and deletion are checked against the current record status and the user's permissions before anything is written.",
      },
      {
        title: "Search and pagination",
        description:
          "List endpoints support search and pagination and return metadata about the current page and total records.",
      },
      {
        title: "CSV reporting",
        description:
          "Disbursement data can be exported as CSV for reporting.",
      },
    ],

    stateTransitions: [
      { from: "PENDING", action: "Approve", to: "APPROVED" },
      { from: "PENDING", action: "Reject", to: "REJECTED" },
    ],

    problem:
      "Money movement needs more than CRUD. Each operation has to follow business rules, user permissions and controlled state transitions.",
    solution:
      "The API is built around the disbursement lifecycle: JWT authentication, role-based authorization, status-based rules, pagination, search and reporting endpoints.",
    architecture:
      "Requests pass through the API layer to business services, which reach the MySQL database through repositories. Authentication and authorization middleware protect operations by role and by record status.",

    challenges: [
      "Implementing controlled disbursement state transitions",
      "Enforcing role-based permissions on sensitive operations",
      "Preventing invalid operations based on the current record status",
      "Designing consistent paginated API responses",
      "Supporting search and CSV reporting alongside transactional operations",
    ],

    screenshots: [
      {
        src: "/projects/disbursement-api/01-login-auth.png",
        alt: "Postman login request returning a JWT token for the Disbursement API.",
        caption: "Login returns a JWT and the authenticated user.",
        width: 1100,
        height: 653,
      },
      {
        src: "/projects/disbursement-api/02-create-disbursement.png",
        alt: "Postman create disbursement request returning a PENDING disbursement.",
        caption: "Creating a disbursement starts it as PENDING.",
        width: 1100,
        height: 652,
      },
      {
        src: "/projects/disbursement-api/03-disbursement-list.png",
        alt: "Postman disbursement list endpoint showing paginated results.",
        caption: "Paginated listing with response metadata.",
        width: 1100,
        height: 651,
      },
      {
        src: "/projects/disbursement-api/04-approval.png",
        alt: "Postman approval request changing a pending disbursement to APPROVED.",
        caption: "Approval moves PENDING to APPROVED.",
        width: 1100,
        height: 654,
      },
      {
        src: "/projects/disbursement-api/05-rejection.png",
        alt: "Postman rejection request changing a pending disbursement to REJECTED.",
        caption: "Rejection records a reason.",
        width: 1100,
        height: 649,
      },
      {
        src: "/projects/disbursement-api/06-business-rule-409.png",
        alt: "Postman response returning 409 Conflict when processing an already processed disbursement.",
        caption: "Processing an already processed disbursement returns 409.",
        width: 1100,
        height: 331,
      },
    ],

    github: "https://github.com/shiinobu/disbursement-api",
    result:
      "Every state change is checked against the current status and the user's role. Responses share one shape (data, message, success), and errors carry field-level messages.",
  },

  {
    slug: "manufacture-system-api",
    title: "Manufacture System API",
    category: "Business management API",
    tagline:
      "A Go REST API for users, customers, suppliers, products and purchases, protected with JWT.",
    description:
      "A Go REST API for managing core manufacturing data across users, customers, suppliers, products and purchase transactions.",
    featured: false,

    technologies: ["Go", "Gorilla Mux", "JWT", "MySQL", "GitHub Actions"],

    technicalHighlights: [
      "JWT authentication",
      "Protected API routes",
      "Multi-domain business entities",
      "User, customer, supplier and product management",
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
        name: "API client",
        description:
          "Sends requests to the API for authentication and business operations.",
      },
      {
        name: "Gorilla Mux",
        description:
          "Routes each request to the controller for the requested resource.",
        via: "HTTP + JWT",
      },
      {
        name: "Controller",
        description:
          "Handles requests and coordinates operations for users, customers, suppliers, products and purchases.",
        via: "route match",
      },
      {
        name: "MySQL",
        description: "Stores manufacturing entities and purchase data.",
        via: "SQL",
      },
    ],

    implementation: [
      {
        title: "JWT authentication",
        description:
          "Authentication protects the API and identifies the requesting user.",
      },
      {
        title: "Several domains, one API",
        description:
          "The backend manages users, customers, suppliers, products and purchases.",
      },
      {
        title: "Structured controllers",
        description:
          "Each controller owns the HTTP operations for one business resource.",
      },
      {
        title: "MySQL persistence",
        description:
          "Manufacturing and purchase data are stored in MySQL as structured relational data.",
      },
      {
        title: "Environment configuration",
        description:
          "Configuration lives outside the source code, in environment variables.",
      },
      {
        title: "CI validation",
        description:
          "GitHub Actions runs the automated tests and Go static analysis.",
      },
    ],

    problem:
      "Manufacturing workflows involve several related business entities that have to be managed consistently in one backend.",
    solution:
      "A Go REST API that splits each domain into its own controller and model, with authentication, database persistence and automated CI validation.",
    architecture:
      "Gorilla Mux routes requests, JWT protects the endpoints, controllers handle each domain, and MySQL stores the data.",

    challenges: [
      "Organizing several related business entities in one API",
      "Keeping HTTP behavior consistent across controllers",
      "Protecting routes with JWT authentication",
      "Managing relational manufacturing and purchase data",
      "Keeping quality up with automated CI validation",
    ],

    screenshots: [],
    github: "https://github.com/shiinobu/manufacture-system-api",
    result:
      "Backed by automated tests, with GitHub Actions running go test and go vet.",
  },

  {
    slug: "tourism-management-api",
    title: "Tourism Management API",
    category: "Full-stack REST API",
    tagline:
      "A Laravel REST API with a React frontend for managing tourism destinations and their images.",
    description:
      "A full-stack application built with Laravel and React for managing tourism destinations through a REST API.",
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
        name: "React frontend",
        description:
          "The interface for managing destinations. It talks to the backend over HTTP.",
      },
      {
        name: "Axios",
        description:
          "Carries HTTP requests between the React frontend and the Laravel API.",
        via: "HTTP",
      },
      {
        name: "Laravel API",
        description:
          "Handles authentication, request validation, CRUD operations, API Resources and image management.",
        via: "REST",
      },
      {
        name: "Eloquent",
        description: "Relational data access between Laravel and MySQL.",
      },
      {
        name: "MySQL",
        description: "Stores destination and application data.",
        via: "SQL",
      },
    ],

    implementation: [
      {
        title: "Laravel REST API",
        description:
          "The backend exposes REST endpoints for managing destination data.",
      },
      {
        title: "Request validation",
        description:
          "Incoming requests are validated before data is created or updated.",
      },
      {
        title: "Image management",
        description:
          "Destination images can be uploaded and replaced.",
      },
      {
        title: "API Resources",
        description:
          "Laravel API Resources give the data returned to clients a consistent shape.",
      },
      {
        title: "Authentication",
        description:
          "Laravel Sanctum protects authenticated API operations.",
      },
      {
        title: "React integration",
        description:
          "The React frontend consumes the Laravel API through Axios and provides the management interface.",
      },
    ],

    problem:
      "Tourism content needs structured destination management and image handling behind a usable web interface.",
    solution:
      "A Laravel REST API with validation, authentication, image management and API Resources, connected to a React frontend for managing destinations.",
    architecture:
      "The React frontend talks to the Laravel API through Axios. Laravel handles authentication, validation, business operations and image management, and stores data in MySQL through Eloquent.",

    challenges: [
      "Handling image upload and replacement",
      "Keeping API validation and responses consistent",
      "Connecting a React frontend to the Laravel API",
      "Managing authenticated API access",
      "Keeping frontend and backend responsibilities separate",
    ],

    screenshots: [],
    github: "https://github.com/shiinobu/tourism-management-api",
    result:
      "The React frontend consumes the Laravel API through Axios, and destination images can be uploaded and replaced.",
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
