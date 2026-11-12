# OurBooks: Project Architecture
 
## Overview
 
OurBooks is a single-page React application for browsing, adding and discussing books. Guests can browse and read. Registered users can add books, edit or delete their own books, comment, and like.
 
The back end is **Firebase**: Authentication for users, Cloud Firestore for data, and Hosting for deployment.
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Client framework | React 19 |
| Build tool | Vite |
| Routing | React Router v7 |
| Shared state | React Context API and custom hooks |
| Authentication | Firebase Authentication (email and password) |
| Database | Cloud Firestore |
| Hosting | Firebase Hosting |
| Styling | CSS Modules and a global template stylesheet |
 
## Folder Structure
 
```
client/
├── public/                  # Template CSS, JS, fonts and images (served from the site root)
├── src/
│   ├── api/                 # Data hooks: authApi, bookApi, commentApi, likeApi
│   ├── components/          # One folder per component
│   │   ├── about/, banner/, header/, footer/, navigation/
│   │   ├── home/, catalog/, book-element/, book-details/
│   │   ├── add-book/, book-edit/
│   │   ├── comments-create/, comments-show/
│   │   ├── login/, register/, logout/
│   │   └── search/
│   ├── contexts/            # UserContext
│   ├── hoc/                 # Route guards: PrivateGuard, GuestGuard
│   ├── hooks/               # useAuth
│   ├── firebase.js          # Firebase initialization (auth and db)
│   ├── App.jsx              # Routes and the auth listener
│   └── main.jsx             # Entry point, wraps the app in BrowserRouter
├── firebase.json            # Hosting configuration (single-page app rewrite)
└── .env.local               # Firebase config values (not committed)
```
 
## Data Model
 
Three Firestore collections:
 
| Collection | Fields |
|---|---|
| `books` | `title`, `author`, `genre`, `year`, `imageUrl`, `summary`, `_ownerId`, `_createdOn` |
| `comments` | `bookId`, `name`, `comment`, `_ownerId`, `_createdOn` |
| `likes` | `bookId`, `_ownerId`, `_createdOn` |
 
The data hooks add an `_id` field from the Firestore document id. `_ownerId` holds the id of the user who created the record. A like document uses the id `bookId_userId`, which makes it impossible for one user to like the same book twice.
 
## Security Rules
 
The rules are published in the Firebase console (Firestore Database, Rules):
 
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
 
    match /books/{bookId} {
      allow read: if true;
 
      allow create: if request.auth != null
        && request.resource.data._ownerId == request.auth.uid;
 
      allow update: if request.auth != null
        && resource.data._ownerId == request.auth.uid
        && request.resource.data._ownerId == resource.data._ownerId;
 
      allow delete: if request.auth != null
        && resource.data._ownerId == request.auth.uid;
    }
 
    match /comments/{commentId} {
      allow read: if true;
 
      allow create: if request.auth != null
        && request.resource.data._ownerId == request.auth.uid
        && request.resource.data.name is string
        && request.resource.data.name.size() > 0
        && request.resource.data.name.size() <= 100
        && request.resource.data.comment is string
        && request.resource.data.comment.size() > 0
        && request.resource.data.comment.size() <= 1000;
 
      allow delete: if request.auth != null
        && resource.data._ownerId == request.auth.uid;
    }
 
    match /likes/{likeId} {
      allow read: if true;
 
      allow create: if request.auth != null
        && request.resource.data._ownerId == request.auth.uid
        && likeId == request.resource.data.bookId + '_' + request.auth.uid;
 
      allow delete: if request.auth != null
        && resource.data._ownerId == request.auth.uid;
    }
  }
}
```
 
Anyone can read. Only signed-in users can create records, and only as themselves. Only the owner can edit or delete a record. The client-side checks (hidden buttons, redirects) exist for usability. The real protection is these rules.
 
## Authentication
 
- `App.jsx` subscribes to `onAuthStateChanged` and stores the current user (`_id`, `email`, `username`) in `UserContext`. The app shows a loading message until Firebase has reported the initial state, so a refresh never flashes the wrong guard redirect.
- Firebase Authentication persists the session in the browser, so users stay logged in after a refresh.
- `authApi.js` wraps sign in, registration and sign out, and translates Firebase error codes into readable messages.
## Routing & Guards
 
- **Public:** `/`, `/catalog`, `/catalog/:bookId/details`, `/search`
- **Guest only** (`GuestGuard`, redirects logged-in users to `/`): `/login`, `/register`
- **Private** (`PrivateGuard`, redirects guests to `/login`): `/add`, `/catalog/:bookId/edit`, `/logout`
Both guards are layout routes that render child routes through `<Outlet />`. The edit page additionally redirects users who do not own the book.
 
## Key React Concepts Demonstrated
 
- **Hooks:** `useState`, `useEffect`, `useCallback`, `useContext`, and custom hooks per resource (`useBooks`, `useBook`, `useComments`, `useLikes`, `useAuth` and others).
- **Context API:** `UserContext` shares the signed-in user across the app.
- **Controlled (bound) forms:** all forms use `value` and `onChange`.
- **Synthetic events:** `onChange`, `onSubmit` and `onClick` handlers throughout.
- **Lifecycle:** effects fetch data on mount and when a dependency changes, and clean up on unmount (the auth listener, and ignoring stale comment responses).
- **Stateless and stateful components:** presentational components such as `BookElement` and `CommentsShow` receive props, while containers such as `BookDetails` and `Search` manage state.
## Known Limitations
 
- Search loads the books and filters them in the browser, which is fine for a small catalog.
- There is a single Like toggle, with no dislikes.
- Deleting a book leaves its comments and likes in Firestore, although they are no longer displayed. Cleaning them up would need a server-side function.