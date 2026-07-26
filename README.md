# Student Attendance System

A responsive student attendance management feature built with Next.js.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React
- JSON Server (Mock API)
- React Hot Toast


## Features

- Student list
- Fetch students from API
- Search by name
- Filter by class
- Mark attendance
- Update attendance status using PATCH API
- Dynamic summary cards
- Responsive desktop table
- Mobile card view
- Skeleton loading
- Empty state
- Error handling
- Toast notification


## API Integration

This project uses JSON Server as a mock backend.


### API Endpoints

#### Get all students


GET http://localhost:4000/students



#### Update attendance status


PATCH http://localhost:4000/students/:id



Example:

```json
{
  "status": "present"
}
Run Project
Install dependencies
npm install
Run Next.js Development Server
npm run dev

Open:

http://localhost:3000
Run JSON Server API

Open another terminal:

npm run server

API will run:

http://localhost:4000

Jannati