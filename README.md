# 📝 Task Management Application

A **Task Management App** built with **Next.js, MongoDB, and NextAuth.js**, allowing multiple users to authenticate and manage their tasks efficiently. Users can **create, view, update, delete, and mark tasks as complete/incomplete** while ensuring secure authentication.

## 🚀 Live Demo
🔗 **[View the Live App](https://task-management-alpha-flax.vercel.app/)**  

---

## ✨ Features
✅ **User Authentication** - Secure login with **NextAuth.js (Credentials Provider)**  
✅ **Task CRUD Operations** - Create, Read, Update, Delete tasks  
✅ **Task Status Update** - Mark tasks as **complete/incomplete**  
✅ **MongoDB Database** - Persistent data storage  
✅ **Server Actions** - Efficient backend logic using **Next.js Server Actions**  
✅ **Optimized UI** - Modern design with **Tailwind CSS**  
✅ **Error Handling & Loading States** - Smooth user experience  

---

## 🏗️ Tech Stack
- **Frontend:** Next.js (Server Actions, App Router)  
- **Backend:** Next.js (Server Actions, NextAuth for Authentication)  
- **Database:** MongoDB (Mongoose for ORM)  
- **Authentication:** NextAuth.js (Credentials Provider)  
- **Styling:** Tailwind CSS  
- **Notifications:** React Toastify  
- **Deployment:** Vercel  

---

## ⚡ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/jayandra-XQ/task-management
cd task-management



2️⃣ Install Dependencies
npm install

3️⃣ Set Up Environment Variables

Create a .env.local file in the root of your project and add the following:

# NextAuth Config
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# MongoDB Connection
MONGODB_URI=your-mongodb-connection-string

4️⃣ Run the Development Server

npm run dev

Now, open http://localhost:3000 in your browser.


🔗 API & Server Actions

This app uses Next.js Server Actions for backend logic instead of traditional API routes.
User Authentication (NextAuth)

    Login - Users authenticate using email & password (Credentials Provider).
    Session Management - NextAuth maintains user sessions securely.

Task Management (CRUD)

    Create Task - Add a new task with a title, description, and due date.
    Read Tasks - Fetch and display tasks for the authenticated user.
    Update Task - Edit task details or mark as complete/incomplete.
    Delete Task - Remove a task permanently.



🚀 Deployment on Vercel

This project is deployed on Vercel for production. To deploy your own version:

    Push the code to GitHub
    Go to Vercel and create a new project
    Connect the GitHub repository and deploy
    Set up environment variables in Vercel
    Click "Deploy" and get your live URL!


🛠️ Future Improvements

🔹 Add real-time updates using WebSockets or React Query
🔹 Implement categories or priority levels for tasks
🔹 Enhance UI with animations & dark mode
📜 License

This project is MIT Licensed. Feel free to use and improve it.
📞 Contact

For any queries, reach out to:
📧 Email: jayandrahamal203@gmail.com
🔗 GitHub: https://github.com/jayandra-XQ