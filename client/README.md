# OurBooks — Project Architecture

## Overview

OurBooks is a single-page React application for browsing, adding, and discussing books. Users can register, log in, create book listings, edit/delete their own listings, comment on books, and like them. The app was built as a retake project for the SoftUni React.js course.

- **Public part:** Home, Catalog, Book Details, Search — visible without logging in.
- **Private part:** Add Book, Edit Book, Logout, and the ability to comment/like — available only to authenticated users.


## Folder Structure

```
client/
├── src/
│   ├── api/              # Data-fetching hooks per REST resource (books, auth, comments, likes)
│   ├── components/        # UI components, one folder per component
│   │   ├── add-book/
│   │   ├── book-details/
│   │   ├── book-edit/
│   │   ├── book-element/
│   │   ├── catalog/
│   │   ├── comments-create/
│   │   ├── comments-show/
│   │   ├── header/, footer/, navigation/, banner/, about/, testimonial/
│   │   ├── home/
│   │   ├── login/, register/, logout/
│   │   └── search/
│   ├── contexts/          # React Context definitions (UserContext)
│   ├── hoc/                # Route guard components (PrivateGuard, GuestGuard)
│   ├── hooks/              # Shared custom hooks (useAuth)
│   ├── utils/              # Generic helpers (request.js — fetch wrapper)
│   ├── App.jsx             # Route definitions and top-level context provider
│   └── main.jsx            # App entry point, wraps App in BrowserRouter
server/
├── server.js                # SoftUni practice REST server (auth, CRUD, storage)
└── data/                    # Seed data (books.json, etc.)
```

## Data Model

The app uses three main REST collections on the practice server, each supporting full CRUD via `GET / POST / PUT / DELETE` on `/data/:collection`:

- **`books`** — `{ title, author, genre, year, imageUrl, summary, _ownerId }`
- **`comments`** — `{ bookId, name, comment, _ownerId }`
- **`likes`** — `{ bookId, _ownerId }`

Ownership (`_ownerId`) is set automatically by the server from the authenticated user's token on `POST`, and is used both server-side (default `.update`/`.delete` rules restrict changes to the owner) and client-side (to conditionally show Edit/Delete/Unlike controls).

## Authentication

- Handled via the practice server's built-in `/users/register`, `/users/login`, `/users/logout` endpoints.
- On successful login/register, the returned user object (including `accessToken`) is stored in **React Context** (`UserContext`) and mirrored to **`localStorage`** so the session survives page refreshes.
- All authenticated requests attach the token via the `X-Authorization` header (see `useAuth.js`).
- If a request returns `401`/`403` (expired/invalid token), the client automatically clears the stored session and logs the user out, rather than leaving the UI in a stale "logged in" state.

## Routing & Guards

Routing is handled with React Router v7's nested/layout route pattern. Two guard components wrap route groups:

- **`PrivateGuard`** — renders `<Outlet />` if the user is authenticated, otherwise redirects to `/login`. Wraps: Add Book, Edit Book, Logout.
- **`GuestGuard`** — renders `<Outlet />` if the user is **not** authenticated, otherwise redirects to `/`. Wraps: Login, Register.

Public routes (Home, Catalog, Book Details, Search) are not wrapped by either guard and are reachable by anyone.

## Key React Concepts Demonstrated

- **Hooks:** `useState`, `useEffect`, `useContext`, `useCallback`, `useMemo`, `useActionState`, plus custom hooks (`useAuth`, `useBooks`, `useComments`, `useLikes`, etc.)
- **Context API:** `UserContext` provides auth state and handlers app-wide without prop drilling.
- **Stateless vs. stateful components:** presentational components like `BookElement` and `CommentsShow` are stateless/prop-driven; container components like `BookDetails` and `Search` manage their own state.
- **Bound (controlled) forms:** the Search page uses controlled `value`/`onChange` inputs. Other forms (Add/Edit Book, Login, Register) use React 19's `action`-based uncontrolled form pattern with `FormData`.
- **Synthetic events:** `onClick`, `onChange`, `onSubmit` handlers throughout.
- **Component lifecycle:** modeled via `useEffect` (mount/update fetching of books, comments, likes) and cleanup functions (e.g. aborting in-flight login requests on unmount).

## Known Limitations

- Search matches are done via a simple case-insensitive substring filter (`like` operator) provided by the practice server; it does not escape special characters in the search term.
- Likes are implemented as a single toggle (like/unlike) rather than separate like/dislike reactions.
- The backend is the SoftUni practice server, intended for development only — data resets when the server restarts unless persisted to `server/data/*.json`.
