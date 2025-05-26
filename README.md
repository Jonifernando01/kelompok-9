# TaskEasy - XP Study Case

A lightweight task management web application built following Extreme Programming (XP) practices.

## Features

- ✅ Create, read, update, and delete tasks
- 🎯 Task prioritization (Low, Medium, High)
- 📊 Status tracking (To-do, In Progress, Done)
- 📈 Task statistics and progress tracking
- 💾 Local storage persistence
- 📱 Responsive design
- 🧪 Test-driven development
- 🔄 Continuous integration

## XP Practices Implemented

### 1. Test-Driven Development (TDD)
- Unit tests for utility functions
- Jest testing framework
- Test coverage reporting
- Tests written before implementation

### 2. Continuous Integration
- GitHub Actions workflow
- Automated testing on push/PR
- Multi-node version testing
- Build verification

### 3. Small Releases
- Incremental feature development
- Daily deployable builds
- Version control with Git

### 4. Refactoring
- Clean code structure
- Separation of concerns
- Reusable components
- Type safety with TypeScript

### 5. Pair Programming Ready
- Clear component structure
- Well-documented code
- Modular architecture

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd taskeasy-xp
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing

Run tests:
\`\`\`bash
npm test
\`\`\`

Run tests in watch mode:
\`\`\`bash
npm run test:watch
\`\`\`

Generate coverage report:
\`\`\`bash
npm run test:coverage
\`\`\`

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main application page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── task-form.tsx     # Task creation/editing form
│   ├── task-list.tsx     # Task list display
│   ├── task-item.tsx     # Individual task component
│   └── task-stats.tsx    # Statistics component
├── lib/                   # Utility functions
│   ├── storage.ts        # LocalStorage operations
│   └── task-utils.ts     # Task utility functions
├── types/                 # TypeScript type definitions
│   └── task.ts           # Task-related types
├── __tests__/            # Test files
└── .github/workflows/    # CI/CD configuration
\`\`\`

## User Stories

### Epic: Task Management
- ✅ As a user, I can create a task with title, description, priority, and status
- ✅ As a user, I can view all my tasks sorted by priority
- ✅ As a user, I can update task details and status
- ✅ As a user, I can delete tasks I no longer need
- ✅ As a user, I can filter tasks by status (To-do, In Progress, Done)
- ✅ As a user, I can see statistics about my task progress

### Epic: Data Persistence
- ✅ As a user, my tasks are saved automatically
- ✅ As a user, my tasks persist between browser sessions

### Epic: User Experience
- ✅ As a user, I have a responsive interface that works on mobile and desktop
- ✅ As a user, I can see visual indicators for task priority and status
- ✅ As a user, I get confirmation before deleting tasks

## XP Planning Game

### Story Points Estimation
- Create Task Form: 3 points
- Task List Display: 5 points
- Task CRUD Operations: 8 points
- Local Storage: 3 points
- Task Statistics: 5 points
- Responsive Design: 3 points
- Testing Setup: 5 points

### Sprint Planning
- **Day 1**: Project setup, basic task creation (3 points)
- **Day 2**: Task list and display (5 points)
- **Day 3**: Update and delete operations (8 points)
- **Day 4**: Statistics and filtering (5 points)
- **Day 5**: Polish, testing, deployment (5 points)

## Daily Stand-up Template

### What did you accomplish yesterday?
- [List completed tasks/features]

### What will you work on today?
- [List planned tasks/features]

### Are there any blockers?
- [List any impediments or challenges]

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Local Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## Contributing

1. Follow TDD practices - write tests first
2. Use pair programming when possible
3. Commit frequently with descriptive messages
4. Ensure all tests pass before pushing
5. Follow the established code style

## License

This project is for educational purposes as part of an XP study case.
