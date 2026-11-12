# OurBooks
 
A single-page React application where book lovers can browse a shared catalog, add their own books, comment on them and like them.
 
**Live application:** https://our-book-data.web.app
 
Architecture, data model and security rules are described in [ARCHITECTURE.md](./ARCHITECTURE.md).
 
## Tech Stack
 
- React 19, Vite, React Router v7
- Firebase Authentication (email and password)
- Cloud Firestore (database) and Firebase Hosting (deployment)
- CSS Modules for component styles, plus a global stylesheet for the page template
## Getting Started
 
### Requirements
 
- Node.js 20 or newer
- A Firebase project with **Authentication (Email/Password)** and **Cloud Firestore** enabled
### Install and run
 
```bash
git clone https://github.com/sgeorgievaa/soft-uni-react-project.git
cd soft-uni-react-project/client
npm install
```
 
Create a file named `client/.env.local` with the values from your Firebase web app settings. Write the values **without quotes**:
 
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```
 
Publish the Firestore security rules from [ARCHITECTURE.md](./ARCHITECTURE.md) in the Firebase console (Firestore Database, Rules tab).
 
Start the development server:
 
```bash
npm run dev
```
 
The app opens at http://localhost:5173.
 
### Other commands
 
```bash
npm run build     # production build into client/dist
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```
 
### Deploy
 
From the folder that contains `firebase.json`:
 
```bash
cd client && npm run build && cd ..
firebase deploy --only hosting
```
 
---
 
# Functional Guide
 
## 1. Project Overview
 
**Application Name:** OurBooks
 
**Application Category / Topic:** Book catalog and community (catalog with comments and likes).
 
**Main Purpose:** OurBooks is a place where readers share and discover books. Anyone can browse the catalog and read comments. Registered users can add books to the collection, edit or delete the books they added, and take part in the community by commenting on books and liking them.
 
## 2. User Access & Permissions
 
### Guest (Not Authenticated)
 
- **Available pages / routes:**
  - `/` Home (latest books)
  - `/catalog` full catalog
  - `/catalog/:bookId/details` book details
  - `/search` search page
  - `/login` and `/register`
- **Public data shown:** all books, all comments, and the number of likes for each book. On the details page, the Like button and the comment form are replaced with a prompt to log in.
### Authenticated User
 
- **Main sections / pages:** everything a guest can see, plus `/add` (Add Book) and `/logout`. The navigation and footer change to show Add Book and Log Out.
- **Details pages:** the same details page, now with a Like / Unlike button, a comment form, and Edit and Delete buttons on books the user owns.
- **Create / Edit / Delete actions:**
  - Create a book, a comment, and a like.
  - Edit and delete only their own books, which is enforced both in the interface and by Firestore security rules.
  - Remove their like at any time. A user can like a given book only once, and can write any number of comments.
## 3. Authentication & Session Handling
 
### Authentication Flow
 
1. **App load:** `App.jsx` subscribes to Firebase's `onAuthStateChanged` listener and shows a loading message until Firebase reports whether a user is signed in. This prevents the route guards from redirecting a logged-in user by mistake.
2. **Checking status:** the listener stores `{ _id, email, username }` in `UserContext`, or an empty object for guests. `useAuth()` exposes `isAuthenticated` as `true` when a user id exists.
3. **Login / registration:** the form calls `signInWithEmailAndPassword` or `createUserWithEmailAndPassword` (registration also saves the username with `updateProfile`). The listener then updates the context, and the user is redirected (to the catalog after login, to the home page after registration).
4. **Logout:** the `/logout` route calls `signOut`. The listener clears the context and the user is sent to the home page.
### Session Persistence
 
- **Where the session is stored:** Firebase Authentication keeps the session in the browser itself. The app mirrors the current user in React Context for its components.
- **Automatic login after refresh:** on every page load, `onAuthStateChanged` restores the signed-in user from Firebase, so the user stays logged in after a refresh.
## 4. Routing Structure
 
### Route Guards Logic
 
Routes are split into three groups in `App.jsx`:
 
- **Public routes** need no guard: Home, Catalog, Details, Search.
- **Guest-only routes** (`/login`, `/register`) are wrapped in `GuestGuard`, which redirects logged-in users to `/`.
- **Private routes** (`/add`, `/catalog/:bookId/edit`, `/logout`) are wrapped in `PrivateGuard`, which redirects guests to `/login`.
In addition, the edit page checks that the current user owns the book, and redirects other users to the book's details page.
 
### Main Routes
 
Nine top-level pages: Home, Catalog, Details, Search, Add Book, Edit Book, Login, Register, Logout.
 
### Nested & Parameterized Routes
 
- **Nested routing:** `GuestGuard` and `PrivateGuard` are layout routes that render their child routes through React Router's `<Outlet />`.
- **URL parameters:** `/catalog/:bookId/details` and `/catalog/:bookId/edit` both use `bookId`.
## 5. List → Details Flow
 
### Catalog / List Page
 
- **Data displayed:** a card for each book with its cover, title, author and year, newest first. The home page shows the three latest books and a link to the full catalog.
- **Interaction:** the Search page finds books by title, author or genre using a case-insensitive partial match.
### Details Page
 
- **Navigation:** each card is a `Link` to `/catalog/<bookId>/details`. `useNavigate` is used after actions such as creating, editing or deleting a book.
- **Route parameters:** the page reads `bookId` with `useParams`, then loads that book, its comments and its likes from Firestore.
## 6. Data Source & Backend
 
### Backend Type
 
Real backend: **Firebase**. Authentication uses Firebase Auth, data is stored in Cloud Firestore (collections `books`, `comments` and `likes`), and security rules enforce who can create, edit and delete. The frontend is deployed on Firebase Hosting.
 
## 7. Data Operations (CRUD)
 
The `books` collection supports all four operations.
 
### Create (POST)
 
A logged-in user fills in the Add Book form. The app stores the book in Firestore with the author's id and a creation timestamp, then redirects to the catalog.
 
### Read (GET)
 
The catalog, home page, details page and search page load books from Firestore through the hooks in `src/api/bookApi.js`. Comments and likes are loaded the same way for the details page.
 
### Update (PUT/PATCH)
 
On the details page, the owner clicks Edit. The edit form opens pre-filled with the book's data, and saving updates the Firestore document. The user is then returned to the details page, which loads the fresh data.
 
### Delete
 
The owner clicks Delete on the details page and confirms. The document is removed from Firestore, and the user is redirected to the catalog, which no longer lists the book.
 
## 8. Forms & Validation
 
### Forms Used
 
Login, Register, Add Book, Edit Book, Add Comment, and Search. All are controlled forms (`value` and `onChange`).
 
### Validation Rules
 
- **Email and password (Login):** both required. Firebase rejects wrong credentials and the app shows a readable message.
- **Password (Register):** required, at least 6 characters, and must match the repeated password. The username and email are also required.
- **Year (Add / Edit Book):** required, and must be between 1800 and the current year. Title, author and genre are also required.
- **Comment:** name and comment are required, with a maximum of 100 and 1000 characters. The same limits are enforced by the Firestore security rules.
- **Search:** the search term cannot be empty.
## 9. React-Specific Techniques
 
### Hooks & Component Lifecycle
 
- **Hooks used:** `useState`, `useEffect`, `useCallback`, `useContext`, and custom hooks: `useAuth`, `useLogin`, `useRegister`, `useLogout`, `useBooks`, `useBook`, `useLatestBook`, `useCreateBook`, `useEditBook`, `useDeleteBook`, `useComments`, `useCreateComment`, `useLikes`, `useToggleLike`.
- **Lifecycle example:** `useComments` fetches the comments when the details page mounts and again when `bookId` changes. Its cleanup function marks the request as stale, so a late response is ignored after the user leaves the page. Likewise, `App` subscribes to `onAuthStateChanged` on mount and unsubscribes on unmount.
### Context API
 
`UserContext` shares the current user (`_id`, `email`, `username`). It is consumed through the `useAuth` hook by the route guards, navigation, footer, About section, details page, edit page, and the book, comment and like hooks.
 
### Component Styling
 
Global CSS (`App.css`, the page template and Bootstrap) styles the layout. Several components also have their own **CSS Modules**: Add Book, Edit Book, Book Details, Comments and Search.
 
## 10. Typical User Flow
 
1. A visitor opens the home page, browses the latest books and opens the catalog.
2. They open a book's details page and read the comments, then register an account.
3. After logging in, they like the book and write a comment.
4. They add a new book from the Add Book page, and later edit it or delete it from its details page.
5. They log out.
## 11. Error & Edge Case Handling
 
- **Authentication errors:** Firebase error codes are translated into readable messages (wrong email or password, email already in use, weak password, invalid email, network error) and shown above the form.
- **Network or data errors:** the data hooks catch failures and fall back to an empty state instead of crashing. Forms show a message when saving fails, and Firestore security rules reject any request from a user who does not own the record. Route guards redirect guests away from private pages and logged-in users away from login and register.
- **Empty or missing data states:** the app shows "Loading..." while data is fetched, and clear messages for "No books yet", "No comments yet", "No books match your search" and "Book not found".
## Known Limitations
 
- Search loads the books and filters them in the browser, which is fine for a small catalog.
- There is a single Like toggle, with no dislikes.
- Deleting a book leaves its comments and likes in Firestore, although they are no longer displayed.