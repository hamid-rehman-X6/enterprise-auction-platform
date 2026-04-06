# ⚡ Real-Time Auction Management System (PERN Stack)

A production-ready, enterprise-grade **real-time auction platform** built with the PERN stack (PostgreSQL, Express, React, Node.js).  
The system supports **live bidding, real-time chat, role-based access control (RBAC), audit logging, and operational workflows** for managing large-scale auctions.

---

## 🚀 Overview

This platform enables organizations to run **fully real-time auctions** with strict server-authoritative state management.

Key capabilities:

- Live bidding with millisecond-level updates
- Real-time auction chat (moderated)
- Role-based dashboards and permissions (RBAC)
- Auction lifecycle management (draft → live → closed)
- Audit logs for compliance and traceability
- Multi-role system (Admin, Seller, Buyer, Moderator, Compliance)

Designed for:

- High concurrency auction events
- Enterprise compliance requirements
- Scalable multi-tenant architecture

---

## 🧠 Core Features

### 🔴 Real-Time Auction Engine

- Server-authoritative bid validation
- Anti-sniping timer extension logic
- Live highest bid tracking
- Bid history streaming
- Auction state synchronization

### 💬 Real-Time Chat System

- Auction-level chat rooms
- Moderator controls (mute/ban/delete)
- Message audit logs
- User presence indicators

### 🔐 Authentication & RBAC

- JWT-based authentication
- Role-based access control (RBAC)
- Granular permission system
- Session management
- 2FA support (optional extension)

### 📊 Admin & Compliance System

- Full audit log tracking
- Fraud/risk flag system
- User & organization management
- Auction lifecycle monitoring
- Policy enforcement dashboard

### 🧾 Auction Management

- Create/edit auctions
- Lot management system
- Scheduling engine
- Reserve price configuration
- Live control room (pause/close/extend)

---

## 🏗️ System Architecture

```text
Frontend (React)
|
| WebSocket (Socket.IO)
| REST API (Axios)
v
Backend (Node.js + Express)
|
|-- Auth Service (JWT + RBAC)
|-- Auction Service (Engine)
|-- Chat Service (Realtime)
|-- Audit Service (Logging)
|
Database (PostgreSQL)
```

### Real-Time Layer

- Socket.IO for:
  - bid updates
  - chat messages
  - auction state transitions
- Redis (optional scaling layer for pub/sub)

---

## 🗄️ Database (PostgreSQL)

### Core Tables

#### Users

- id
- name
- email
- password_hash
- role (ADMIN | SELLER | BUYER | MODERATOR | COMPLIANCE)
- status (ACTIVE | SUSPENDED | PENDING)

#### Auctions

- id
- title
- description
- status (DRAFT | SCHEDULED | LIVE | CLOSED)
- start_time
- end_time
- created_by

#### Lots

- id
- auction_id
- title
- description
- starting_bid
- reserve_price
- current_bid
- highest_bidder_id

#### Bids

- id
- lot_id
- user_id
- amount
- timestamp

#### ChatMessages

- id
- auction_id
- user_id
- message
- created_at
- moderation_status

#### AuditLogs

- id
- actor_id
- action
- entity_type
- entity_id
- metadata (JSONB)
- timestamp

#### Roles & Permissions

- role_permissions mapping table (RBAC system)

---

## 🔌 API Structure

### Auth

- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/logout`
- GET `/api/auth/me`

### Auctions

- GET `/api/auctions`
- POST `/api/auctions`
- GET `/api/auctions/:id`
- PATCH `/api/auctions/:id`
- DELETE `/api/auctions/:id`

### Bids

- POST `/api/bids`
- GET `/api/bids/:lotId`

### Chat

- GET `/api/chat/:auctionId`

### Admin

- GET `/api/admin/users`
- GET `/api/admin/audit-logs`

---

## ⚡ Real-Time Events (Socket.IO)

### Bid Events

- `bid:place`
- `bid:update`
- `bid:outbid`
- `bid:highest`

### Auction Events

- `auction:start`
- `auction:end`
- `auction:extend`
- `auction:pause`

### Chat Events

- `chat:message`
- `chat:delete`
- `chat:mute`

---

## 🧩 Frontend Architecture (React)

### Structure

```
/src
  /components
  /pages
  /layouts
  /features
    /auth
    /auction
    /chat
    /admin
  /hooks
  /services
  /store
  /utils
```

### State Management

- Redux Toolkit or Zustand
- Socket state middleware
- Optimistic UI for bidding

---

## 🔐 RBAC Model

| Role       | Permissions                 |
| ---------- | --------------------------- |
| Admin      | Full system access          |
| Seller     | Manage auctions + lots      |
| Buyer      | Bid + chat + view auctions  |
| Moderator  | Manage chat + users         |
| Compliance | View logs + audit + reports |

---

## 🧪 Key System Rules

- All bids validated server-side only
- Auction state cannot be modified from client
- Last-second bids trigger extension logic
- All actions logged in audit system
- Chat messages are moderated in real-time

---

## ⚙️ Environment Variables

### Backend

```env
PORT=5000
DATABASE_URL=postgresql://user:pass@localhost:5432/auction_db
JWT_SECRET=your_secret
JWT_EXPIRY=1d
SOCKET_ORIGIN=http://localhost:3000
```

### Frontend

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SOCKET_URL=http://localhost:5000
```

---

## 🚀 Getting Started

### 1. Clone Repo

```bash
git clone https://github.com/your-org/auction-system.git
cd auction-system
```

### 2. Install Dependencies

**Backend:**

```bash
cd server
npm install
```

**Frontend:**

```bash
cd client
npm install
```

### 3. Setup Database

```bash
npx prisma migrate dev
# or run SQL schema manually
```

### 4. Run Development Server

**Backend:**

```bash
npm run dev
```

**Frontend:**

```bash
npm start
```

---

## 📦 Production Deployment

Recommended stack:

- **Frontend:** Vercel / Nginx
- **Backend:** Docker + AWS EC2 / Kubernetes
- **Database:** AWS RDS PostgreSQL
- **Cache/Realtime scaling:** Redis
- **Storage:** AWS S3 (auction media)

---

## 📈 Performance Considerations

- WebSocket scaling via Redis pub/sub
- DB indexing on bids (`lot_id`, `timestamp`)
- Read replicas for auction browsing
- Event-driven architecture for bid updates
- Debounced UI updates for high-frequency bidding

---

## 🔒 Security

- JWT + refresh token rotation
- Rate limiting on bidding endpoints
- Input validation (Zod / Joi)
- Audit logging for all sensitive actions
- Role-based API guards
- Anti-fraud bid validation layer

---
