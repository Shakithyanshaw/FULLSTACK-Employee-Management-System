# 👨‍💼 Employee Management System (EMS)

A modern **Full-Stack Employee Management System** built with the **MERN stack** to manage employees, attendance, leave requests, payslips, authentication, and administrative operations through a centralized web application.

This project is designed as a practical real-world application for **learning full-stack development, portfolio projects, and final-year/college projects**.

---

## ✨ Features

### 🔐 Authentication & Authorization

- Secure user authentication
- Role-based access control
- Separate **Admin** and **Employee** permissions
- Protected routes and authentication middleware
- Employee profile management

### 👨‍💼 Employee Management

- Add new employees
- View employee details
- Update employee information
- Manage employee profiles
- Admin-controlled employee records

### 📅 Attendance Management

- Track employee attendance
- View attendance records
- Manage attendance data
- Attendance-related dashboard information

### 📝 Leave Management

- Submit leave requests
- View leave history
- Manage leave requests
- Admin approval/rejection workflow

### 💰 Payslip Management

- Create and manage payslips
- View employee salary information
- Generate printable payslips
- Dedicated payslip print page

### 📊 Admin Dashboard

- Overview of employee-related information
- Attendance statistics
- Leave information
- Salary/payslip information
- Centralized management interface

### ⚙️ Additional Features

- Responsive dashboard UI
- RESTful API architecture
- MongoDB database integration
- Background jobs with Inngest
- Email functionality with Nodemailer
- Admin seed script
- Frontend and backend deployment support
- AI-assisted code review with CodeRabbit

---

## 🛠️ Tech Stack

### Frontend

- **React.js**
- **Tailwind CSS**
- **React Router DOM**
- JavaScript / JSX
- Axios
- Responsive UI

### Backend

- **Node.js**
- **Express.js**
- REST API
- Authentication & authorization
- Middleware architecture
- Nodemailer

### Database

- **MongoDB**
- **Mongoose**

### Other Tools & Services

- **Inngest** – Background jobs and event-driven workflows
- **CodeRabbit** – AI-powered code review
- **Vercel** – Deployment
- Git & GitHub – Version control

---

## 🏗️ System Architecture

```text
┌──────────────────────────┐
│      React Frontend      │
│   Tailwind CSS + Router  │
└────────────┬─────────────┘
             │
             │ REST API
             ▼
┌──────────────────────────┐
│      Express Server      │
│   Node.js + Middleware   │
└────────────┬─────────────┘
             │
       ┌─────┴─────┐
       ▼           ▼
┌────────────┐ ┌────────────┐
│  MongoDB   │ │  Inngest   │
│ + Mongoose │ │ Background │
└────────────┘ │    Jobs    │
               └────────────┘
```

---

## 👥 User Roles

### 👑 Admin

Administrators can:

- Manage employees
- View employee information
- Monitor attendance
- Manage leave requests
- Create/manage payslips
- View dashboard statistics
- Manage system operations

### 👤 Employee

Employees can:

- Log in securely
- View their profile
- View attendance information
- Submit and track leave requests
- View payslips
- Print payslips
- Access employee-specific information

---

## 📂 Project Structure

A typical project structure is organized as follows:

```text
Employee-Management-System/
│
├── client/                     # React frontend
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── routes/
│       ├── services/
│       └── App.jsx
│
├── server/                     # Node.js / Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── inngest/
│   ├── scripts/
│   └── server.js
│
├── .gitignore
└── README.md
```

> The exact folder structure may differ depending on the implementation.

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd Employee-Management-System
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend/server directory.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

EMAIL_USER=your_email
EMAIL_PASS=your_email_password

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

### ⚠️ Important

Never commit your `.env` file to GitHub.

Add it to `.gitignore`:

```gitignore
.env
.env.*
node_modules/
```

Use your actual environment variable names if they differ from the example above.

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm run dev
```

The backend will normally run on:

```text
http://localhost:5000
```

### Start Frontend

In another terminal:

```bash
cd client
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

Open the frontend URL in your browser.

---

## 🔄 Application Flow

```text
User
  │
  ▼
Login
  │
  ├───────────────┐
  ▼               ▼
Admin           Employee
  │               │
  ▼               ▼
Dashboard       Dashboard
  │               │
  ├─ Employees    ├─ Profile
  ├─ Attendance   ├─ Attendance
  ├─ Leave        ├─ Leave
  ├─ Payslips     └─ Payslips
  └─ Settings
```

---

## 🔌 Main API Modules

The backend is organized around RESTful API modules such as:

```text
Authentication
    ├── Login
    └── Authorization

Employees
    ├── Create
    ├── Read
    ├── Update
    └── Manage

Attendance
    ├── Create
    ├── Read
    └── Manage

Leave
    ├── Request
    ├── Read
    └── Approve / Reject

Payslip
    ├── Create
    ├── Read
    └── Print

Dashboard
    └── Statistics
```

> Update the endpoint names in this section if your implementation uses different routes.

---

## 🗄️ Database Models

The application can be organized around the following MongoDB/Mongoose models:

- **Employee**
- **Attendance**
- **Leave**
- **Payslip**
- **User / Authentication**

These models are connected through appropriate references and relationships to maintain employee-related data.

---

## ⏱️ Background Jobs with Inngest

**Inngest** is integrated for background and event-driven tasks.

Potential use cases include:

- Automated background processing
- Scheduled tasks
- Employee-related notifications
- Workflow automation
- Event-driven operations

This helps keep long-running or scheduled tasks separate from normal API requests.

---

## 📧 Email Integration

**Nodemailer** can be used to send application emails such as:

- Employee notifications
- Leave-related notifications
- System emails
- Authentication-related emails

Make sure the required email environment variables are configured before enabling email functionality.

---

## 🧪 Development Workflow

A recommended development workflow:

```text
1. Build UI
      ↓
2. Create React Routes
      ↓
3. Build Express Server
      ↓
4. Connect MongoDB
      ↓
5. Create Mongoose Models
      ↓
6. Build Controllers
      ↓
7. Create REST APIs
      ↓
8. Add Authentication Middleware
      ↓
9. Integrate Frontend + Backend
      ↓
10. Add Background Jobs
      ↓
11. Test Application
      ↓
12. Deploy
```

---

## 🚢 Deployment

The project can be deployed using **Vercel** or another hosting platform.

Typical deployment structure:

```text
Frontend
   ↓
Vercel

Backend
   ↓
Vercel / Node.js Hosting

Database
   ↓
MongoDB Atlas

Background Jobs
   ↓
Inngest
```

Before deployment, make sure:

- Production environment variables are configured
- MongoDB Atlas allows the required connections
- Frontend API URL points to the deployed backend
- CORS is configured correctly
- Secrets are not committed to Git
- Inngest configuration is correctly connected
- Email credentials are configured securely

---

## 📸 Screenshots

Add screenshots of your application here as the project UI is completed.

Recommended screenshots:

| Page               | Screenshot     |
| ------------------ | -------------- |
| Login              | Add screenshot |
| Admin Dashboard    | Add screenshot |
| Employees          | Add screenshot |
| Attendance         | Add screenshot |
| Leave Management   | Add screenshot |
| Payslips           | Add screenshot |
| Settings           | Add screenshot |
| Employee Dashboard | Add screenshot |

Example:

```md
![Dashboard](./screenshots/dashboard.png)
```

---

## 🎓 Learning Objectives

By completing this project, you can gain practical experience with:

- Full-stack MERN development
- React component architecture
- Client-side routing
- Tailwind CSS
- REST API development
- Express.js middleware
- MongoDB database design
- Mongoose schemas and models
- Authentication and authorization
- Role-based access control
- CRUD operations
- API integration
- Background jobs
- Email integration
- Deployment
- Git/GitHub workflow
- AI-assisted development and code review

---

## 💡 Future Improvements

Possible enhancements include:

- [ ] Employee search and filtering
- [ ] Advanced attendance reports
- [ ] PDF payslip generation
- [ ] Automated salary calculations
- [ ] Email notifications
- [ ] Push notifications
- [ ] Advanced analytics dashboard
- [ ] Export reports to Excel/CSV
- [ ] Employee self-service portal
- [ ] Dark mode
- [ ] Multi-language support
- [ ] Audit logs
- [ ] Two-factor authentication

---

## 🔒 Security Considerations

For production usage:

- Store secrets only in environment variables
- Use strong JWT secrets
- Validate and sanitize user input
- Configure CORS carefully
- Apply authentication middleware to protected routes
- Hash passwords securely
- Avoid exposing sensitive employee information
- Use HTTPS in production
- Keep dependencies updated
- Apply appropriate database access controls

---

## 🤖 CodeRabbit

**CodeRabbit** can be used as an AI-powered code review assistant during development.

It can help identify:

- Potential bugs
- Code quality issues
- Security concerns
- Maintainability problems
- Possible improvements

AI-generated suggestions should always be reviewed and tested before being merged.

---

## 📚 Project Purpose

This project was created as a practical **Full-Stack Employee Management System** to demonstrate how modern web technologies can be combined to build a real-world business application.

It is suitable for:

- 🎓 College / University Projects
- 💼 Portfolio Projects
- 📄 Resume Projects
- 🧑‍💻 Full-Stack Development Practice
- 🚀 Learning MERN Stack Development

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is available for educational and portfolio purposes.

Add your preferred license here if you plan to distribute the project publicly.

---

### 🚀 Built with the MERN Stack

**MongoDB • Express.js • React.js • Node.js**

> Building real-world applications, one feature at a time. 💻
