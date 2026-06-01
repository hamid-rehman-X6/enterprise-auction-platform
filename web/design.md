You are a senior product designer, frontend architect, and UI/UX expert.

Design and build the **frontend UI only** for a production-grade, enterprise-level, multi-tenant **Real-Time Auction Management Platform**.

This is a multi-tenant auction SaaS platform where:

* Super Admin manages the whole platform.
* Organization Admin manages auctions for their own organization.
* Buyers participate in live bidding.
* Sellers submit lots/products.
* Moderators manage auction chat.
* Compliance Officers review fraud alerts and audit logs.

Focus only on frontend design, UI/UX, page structure, reusable components, responsiveness, and realistic production-level user experience.

Do not build backend logic.

Use mock data where needed.

---

# Tech Stack

Use:

* Next.js or React.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide React icons
* React Hook Form
* Zod for frontend validation
* TanStack Query with mock API functions
* Zustand for UI/session state if needed
* Recharts for charts
* Socket.IO client mock structure for real-time UI states
* Dark mode support

---

# Main Goal

Create a professional, clean, realistic, enterprise-grade auction platform frontend.

The design quality should feel similar to:

* Stripe Dashboard
* Linear
* Vercel Dashboard
* Shopify Admin
* Notion
* Modern fintech SaaS dashboards
* Enterprise control-room systems

The UI must not look basic, empty, or like a simple template.

Every page must feel complete, realistic, and production-ready.

---

# Frontend Design Rules

Follow these UI/UX rules:

* Use a clean modern dashboard layout.
* Use professional spacing and typography.
* Use reusable components.
* Use responsive design for desktop, tablet, and mobile.
* Use dark mode and light mode.
* Use beautiful cards, tables, filters, modals, drawers, charts, and forms.
* Use status badges for auction status, payment status, user status, and risk levels.
* Use loading skeletons.
* Use empty states.
* Use error states.
* Use confirmation dialogs for dangerous actions.
* Use toast notifications.
* Use breadcrumbs.
* Use a command menu if suitable.
* Use notification dropdown.
* Use user profile dropdown.
* Use live pulse indicators for real-time states.
* Use professional icons.
* Use realistic mock data.
* Use role-based navigation.
* Use permission-based UI hiding/showing.
* Never create placeholder-looking pages.
* Every page should have a clear header, actions, filters, and useful content.

---

# Design System

Create a consistent design system.

Include:

* Primary color
* Secondary color
* Neutral background
* Card background
* Border color
* Muted text
* Success color
* Warning color
* Error color
* Info color
* Risk severity colors
* Status badge variants
* Button variants
* Table styles
* Form styles
* Modal styles
* Drawer styles
* Chart card styles

Use a polished SaaS look:

* Rounded corners
* Subtle shadows
* Soft borders
* Good spacing
* Clear hierarchy
* Responsive layouts
* Accessible contrast
* Keyboard-friendly components

---

# Global Layout

Create these main layouts:

## 1. Public Layout

For:

* Landing page
* Pricing page
* Contact page
* Public auctions
* Public auction details
* Login
* Register
* Forgot password
* Reset password

Public layout should include:

* Modern navbar
* Logo
* Navigation links
* CTA buttons
* Footer
* Responsive mobile menu

---

## 2. Super Admin Layout

For platform-level management.

Include:

* Sidebar
* Top navbar
* Breadcrumbs
* Search/command menu
* Notification dropdown
* User profile menu
* Theme toggle
* Main content area

Sidebar sections:

* Dashboard
* Organizations
* Platform Users
* All Auctions
* Live Monitor
* Billing
* Subscription Plans
* Fraud Monitoring
* Audit Logs
* Reports
* Platform Settings

---

## 3. Organization Admin Layout

For organization-level auction management.

Include:

* Sidebar
* Top navbar
* Organization switcher
* Breadcrumbs
* Notifications
* User profile menu
* Theme toggle

Sidebar sections:

* Dashboard
* Auctions
* Lots/Products
* Live Control Room
* Buyers
* Sellers
* Team Members
* Reports
* Audit Logs
* Billing
* Organization Settings

---

## 4. Buyer Layout

For auction participants.

Include:

* Top navigation
* Auction search
* Watchlist shortcut
* Notifications
* Profile menu

Navigation:

* Browse Auctions
* Live Auctions
* My Bids
* Watchlist
* Won Lots
* Invoices
* Profile

---

## 5. Moderator Layout

For chat and auction moderation.

Sidebar:

* Moderator Dashboard
* Live Chat Monitoring
* Reported Messages
* Muted Users
* Banned Users
* Moderation History

---

## 6. Compliance Layout

For fraud and audit review.

Sidebar:

* Compliance Dashboard
* Fraud Alerts
* Audit Logs
* Risk Profiles
* Auction Reviews
* Compliance Reports

---

# Required Public Pages

## 1. Landing Page

Design a premium landing page for the auction platform.

Sections:

* Hero section with strong headline
* Subheadline explaining real-time auction management
* CTA buttons
* Live auction preview card
* Feature section
* Real-time bidding section
* Multi-tenant organization section
* Admin control room preview
* Fraud and audit compliance section
* Analytics section
* Testimonials or trust section
* Pricing preview
* FAQ section
* Footer

Tone:

Professional, modern, enterprise-grade.

---

## 2. Pricing Page

Include:

* Pricing cards
* Free/Starter/Professional/Enterprise plans
* Feature comparison table
* FAQ section
* CTA section

Plan limits can include:

* Number of auctions
* Number of team members
* Number of lots
* Live bidder limit
* Storage
* Support level
* Fraud monitoring
* Compliance reports

---

## 3. Contact Page

Include:

* Contact form
* Company information
* Support cards
* Sales CTA
* FAQ shortcut

---

## 4. Public Auctions Page

Show public auctions with:

* Search
* Filters
* Category filter
* Status filter
* Auction type filter
* Date filter
* Auction cards
* Auction status badges
* Live indicator
* Countdown timer
* Number of lots
* Registered bidders
* CTA button

---

## 5. Public Auction Detail Page

Show:

* Auction banner
* Auction title
* Organization name
* Status badge
* Countdown timer
* Description
* Terms preview
* Lots list
* Registration button
* Watch auction button
* Auction schedule
* Auction rules
* Buyer eligibility info

---

# Authentication Pages

Create polished auth pages:

* Login
* Register
* Forgot Password
* Reset Password

Requirements:

* Clean split-screen design
* Form validation UI
* Password visibility toggle
* Loading state
* Error state
* Success state
* Social login buttons as UI-only placeholders if needed
* Organization-aware login context if useful

---

# Super Admin Pages

## 1. Super Admin Dashboard

Show:

* Total organizations
* Active organizations
* Suspended organizations
* Total users
* Total auctions
* Live auctions
* Total bids
* Platform revenue
* Fraud alerts
* System health

Include:

* Revenue chart
* User growth chart
* Bid activity chart
* Latest organizations table
* Live auctions table
* Recent platform activity timeline
* Fraud alerts summary

---

## 2. Organizations Page

Include:

* Organizations table
* Search
* Filters by status, country, verification status, subscription
* Status badges
* Actions dropdown
* Approve, suspend, activate actions
* Organization detail drawer
* Create organization button

Organization cards/table fields:

* Name
* Status
* Verification
* Subscription
* Total users
* Total auctions
* Country
* Created date

---

## 3. Organization Details Page

Include tabs:

* Overview
* Users
* Auctions
* Billing
* Audit Logs
* Settings

Overview should show:

* Organization profile card
* Metrics
* Recent auctions
* Recent activity
* Billing status
* Risk/compliance status

---

## 4. Platform Users Page

Include:

* User table
* Search
* Role filter
* Status filter
* Organization filter
* User detail drawer
* Suspend/activate actions

---

## 5. All Auctions Page

Include:

* Global auction table
* Search
* Organization filter
* Status filter
* Date filter
* Auction type filter
* View details action
* Live monitor action

---

## 6. Live Auction Monitor Page

Create a platform-wide monitor for Super Admin.

Show:

* Live auctions grid
* Real-time status indicators
* Current highest bids
* Active bidders
* Bid velocity
* Risk alerts
* Server connection status
* Event stream

This page should feel like a real-time operations control center.

---

## 7. Billing Overview Page

Show:

* Platform revenue
* Monthly recurring revenue
* Active subscriptions
* Failed payments
* Invoices table
* Revenue chart
* Plan distribution chart

---

## 8. Fraud Monitoring Page

Show:

* Fraud summary cards
* Active alerts table
* High-risk users
* High-risk auctions
* Risk score badges
* Severity filters
* Alert detail drawer
* Resolve/escalate buttons

---

## 9. Audit Logs Page

Show:

* Audit logs table
* Search
* Date range filter
* Action filter
* Organization filter
* User filter
* Export button
* Detail drawer showing old/new values

---

## 10. Platform Settings Page

Create settings sections:

* General platform settings
* Security settings
* Auction defaults
* Email templates
* Billing settings
* Maintenance mode

---

# Organization Admin Pages

## 1. Organization Dashboard

Show:

* Total auctions
* Draft auctions
* Scheduled auctions
* Live auctions
* Closed auctions
* Total lots
* Total buyers
* Total bids
* Total revenue
* Pending seller submissions
* Fraud alerts

Include:

* Auction performance chart
* Bid activity chart
* Upcoming auctions
* Live auction card
* Top lots table
* Recent activity timeline

---

## 2. Auctions List Page

Include:

* Search
* Status tabs
* Filters
* Table view
* Card view toggle
* Create auction button
* Actions dropdown
* Status badges
* Countdown timers
* Revenue and bids columns

Auction statuses:

* Draft
* Scheduled
* Registration Open
* Live
* Paused
* Closing
* Closed
* Settlement
* Archived
* Cancelled

---

## 3. Create Auction Wizard

Create a multi-step wizard.

Steps:

1. Basic Information
2. Schedule & Timezone
3. Auction Rules
4. Registration Rules
5. Lots/Products
6. Review & Publish

Each step must include:

* Form fields
* Validation UI
* Helper text
* Previous/Next buttons
* Save as draft
* Progress indicator

Fields:

* Auction title
* Description
* Auction type
* Visibility
* Currency
* Timezone
* Start date/time
* End date/time
* Registration required
* Approval required
* Terms and conditions
* Anti-sniping enabled
* Anti-sniping extension time
* Minimum bid increment
* Reserve price enabled
* Auto close enabled
* Banner upload UI

---

## 4. Auction Details Page

Use tabs:

* Overview
* Lots
* Bidders
* Bid History
* Chat
* Audit Logs
* Settings

Include:

* Auction status card
* Countdown timer
* Lifecycle actions
* Publish button
* Pause/resume button
* Close auction button
* Cancel auction button
* Revenue metrics
* Bid metrics
* Registration metrics

---

## 5. Live Auction Control Room

This is one of the most important pages.

Design a professional real-time auction operations screen.

Include:

* Auction status
* Live countdown timer
* Active lot panel
* Current highest bid
* Bid increment
* Reserve price status
* Total bids
* Active bidders
* Connected users
* Live bid stream
* Bid activity chart
* Auction chat panel
* Event logs
* Fraud alerts panel
* Server connection status
* Pause auction button
* Resume auction button
* Extend timer button
* Close lot button
* Move to next lot button
* Emergency stop button

UI behavior:

* Use live pulse indicators.
* Use sticky control bar.
* Use real-time event feed.
* Use color-coded risk alerts.
* Use confirmation dialogs for dangerous actions.
* Show optimistic loading state for control actions.
* Make it look like a real enterprise control room.

---

## 6. Lots/Products Page

Include:

* Lots table
* Product image thumbnails
* Search
* Category filter
* Status filter
* Auction filter
* Add lot button
* Bulk actions
* Approval status
* Current highest bid
* Winner status

---

## 7. Create/Edit Lot Page

Include:

* Product title
* Description
* Category
* Condition
* Quantity
* Starting price
* Reserve price
* Bid increment
* Auction assignment
* Lot number
* Sort order
* Featured flag
* Image upload gallery
* Primary image selector
* Preview card

---

## 8. Buyers Page

Include:

* Buyer table
* Search
* Status filter
* Auction registration status
* Total bids
* Won lots
* User detail drawer
* Approve/reject registration action

---

## 9. Sellers Page

Include:

* Seller table
* Submitted lots
* Approval status
* Payout status
* Seller detail drawer

---

## 10. Team Members Page

Include:

* Team member table
* Invite member button
* Role assignment
* Status filter
* Permission summary
* Remove/suspend member actions

---

## 11. Organization Reports Page

Include:

* Auction performance
* Revenue
* Bid activity
* Buyer participation
* Seller performance
* Lot performance
* Export buttons
* Date filters
* Charts and tables

---

## 12. Organization Settings Page

Sections:

* Organization profile
* Logo upload
* Auction rules
* Currency settings
* Registration rules
* Chat settings
* Notification settings
* Payment settings
* Team settings

---

# Buyer Pages

## 1. Buyer Dashboard

Show:

* Registered auctions
* Live auctions
* Watched lots
* Active bids
* Won lots
* Pending invoices
* Notifications

---

## 2. Browse Auctions

Include:

* Auction cards
* Search
* Filters
* Status badges
* Countdown timers
* Register button
* Watch button

---

## 3. Auction Detail

Show:

* Auction info
* Lots list
* Registration CTA
* Auction rules
* Terms
* Schedule
* Organization details

---

## 4. Live Bidding Room

Create a polished buyer bidding interface.

Include:

* Active lot image gallery
* Lot title and description
* Current highest bid
* Bid input
* Quick bid buttons
* Place bid button
* Bid status message
* Countdown timer
* Bid history
* Auction chat
* Watchlist button
* Connection status
* Outbid warning
* Winning state
* Lot closed state

Use strong visual feedback for:

* Bid accepted
* Bid rejected
* You are highest bidder
* You have been outbid
* Auction paused
* Auction closed

---

## 5. Watchlist

Show watched auctions and lots.

---

## 6. My Bids

Show bid history with:

* Auction
* Lot
* Bid amount
* Status
* Time
* Winning/outbid badge

---

## 7. Won Lots

Show:

* Won products
* Final price
* Payment status
* Invoice button

---

## 8. Invoices

Show invoice table and payment status UI.

---

# Moderator Pages

## Moderator Dashboard

Show:

* Active auctions
* Live chat rooms
* Reported messages
* Muted users
* Banned users
* Recent moderation actions

## Live Chat Monitoring

Include:

* Auction selector
* Chat stream
* User list
* Message actions
* Delete message
* Mute user
* Ban user
* Report user
* Moderation notes

---

# Compliance Pages

## Compliance Dashboard

Show:

* Open fraud alerts
* High-risk auctions
* High-risk users
* Recent audit events
* Compliance review queue

## Fraud Alerts

Include:

* Alerts table
* Severity badges
* Risk score
* Filters
* Alert detail drawer
* Evidence section
* Resolve/escalate/dismiss actions

## Risk Profiles

Show:

* User risk score
* Bid patterns
* IP activity
* Related alerts
* Audit trail

## Compliance Reports

Show:

* Report cards
* Export buttons
* Date filters
* Charts

---

# Reusable Components

Create reusable components:

* AppSidebar
* TopNavbar
* Breadcrumbs
* PageHeader
* MetricCard
* StatusBadge
* RiskBadge
* DataTable
* FilterBar
* SearchInput
* DateRangePicker
* ActionDropdown
* ConfirmDialog
* FormInput
* FormSelect
* FormTextarea
* FileUpload
* ImageGalleryUpload
* EmptyState
* ErrorState
* LoadingSkeleton
* ChartCard
* ActivityTimeline
* NotificationDropdown
* UserMenu
* ThemeToggle
* LiveIndicator
* CountdownTimer
* BidStream
* ChatPanel
* AuctionStatusCard
* AuctionLifecycleActions
* LotPreviewCard
* PermissionGuard
* RoleBasedLayout

---

# Mock Data Rules

Use realistic mock data for:

* Organizations
* Users
* Auctions
* Lots/products
* Bids
* Chat messages
* Audit logs
* Fraud alerts
* Reports
* Notifications
* Invoices

Mock data should include different statuses and edge cases.

Examples:

* Live auction with active bids
* Paused auction
* Draft auction
* Closed auction with winner
* High-risk fraud alert
* Suspended organization
* Pending seller lot approval
* Buyer with outbid status
* Buyer winning current lot

---

# Frontend Behavior Rules

Implement realistic frontend behavior using mock state:

* Search should filter mock data.
* Status filters should work.
* Tabs should work.
* Tables should support pagination UI.
* Modals and drawers should open/close.
* Forms should validate.
* Toasts should appear after actions.
* Confirmation dialogs should appear before dangerous actions.
* Live bidding page should simulate real-time bid updates.
* Chat panel should simulate new messages.
* Countdown timer should run.
* Dark mode should work.
* Responsive navigation should work.

---

# Responsive Design

Support:

* Desktop
* Laptop
* Tablet
* Mobile

Rules:

* Sidebar collapses on smaller screens.
* Tables should become responsive.
* Cards should stack on mobile.
* Control room should remain usable on tablet.
* Buyer bidding room should be mobile-friendly.
* Forms should be easy to use on mobile.

---

# Accessibility Rules

Follow accessibility best practices:

* Proper labels for inputs.
* Keyboard navigable modals.
* Good color contrast.
* Focus states.
* Semantic HTML.
* Accessible buttons.
* ARIA where needed.
* Do not rely only on color to show status.

---

# Frontend Folder Structure

Use this structure:

src/
app/
public/
auth/
super-admin/
organization/
buyer/
moderator/
compliance/
components/
layout/
ui/
common/
charts/
forms/
tables/
auction/
chat/
bidding/
features/
auth/
organizations/
auctions/
lots/
bids/
chat/
users/
audit/
fraud/
billing/
reports/
settings/
hooks/
lib/
mock/
services/
stores/
types/
validations/

---

# Development Order

Build the frontend in this order.

## Phase 1: Frontend Foundation

Build:

* Next.js/React setup
* Tailwind setup
* shadcn/ui setup
* Theme provider
* App shell
* Layout system
* Mock data structure
* Routing structure
* Reusable UI components

## Phase 2: Public Website

Build:

* Landing page
* Pricing page
* Contact page
* Public auctions page
* Public auction detail page

## Phase 3: Authentication UI

Build:

* Login
* Register
* Forgot password
* Reset password
* Form validation
* Auth layout

## Phase 4: Dashboard Layouts

Build:

* Super Admin layout
* Organization Admin layout
* Buyer layout
* Moderator layout
* Compliance layout
* Role-based navigation

## Phase 5: Super Admin UI

Build:

* Dashboard
* Organizations
* Organization details
* Users
* All auctions
* Live monitor
* Billing
* Fraud monitoring
* Audit logs
* Settings

## Phase 6: Organization Admin UI

Build:

* Dashboard
* Auctions list
* Create auction wizard
* Auction details
* Live control room
* Lots/products
* Buyers
* Sellers
* Team
* Reports
* Settings

## Phase 7: Buyer UI

Build:

* Buyer dashboard
* Browse auctions
* Auction detail
* Live bidding room
* Watchlist
* My bids
* Won lots
* Invoices
* Notifications

## Phase 8: Moderator UI

Build:

* Moderator dashboard
* Live chat monitoring
* Reported messages
* Muted users
* Banned users
* Moderation history

## Phase 9: Compliance UI

Build:

* Compliance dashboard
* Fraud alerts
* Risk profiles
* Audit logs
* Compliance reports

## Phase 10: Polish & Responsive Pass

Improve:

* Mobile responsiveness
* Loading states
* Empty states
* Error states
* Animations
* Accessibility
* Dark mode
* UI consistency
* Component reuse

---

# Important Final Rules

* Build frontend only.
* Do not implement backend.
* Use mock APIs and mock data.
* Keep components reusable.
* Make every page look realistic and complete.
* Do not create plain placeholder screens.
* Do not skip loading, empty, and error states.
* Do not ignore responsiveness.
* Do not ignore dark mode.
* Do not hardcode everything directly inside pages.
* Keep mock data organized.
* Keep design consistent.
* Follow the development order.
* Before coding each phase, explain what will be built.
* After each phase, explain what was completed and what should be built next.
