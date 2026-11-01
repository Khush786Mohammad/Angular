# Notes API

An Angular frontend for a notes application. Users can register and sign in, then create, edit, search, sort, paginate, and delete notes. The application connects to a separate Notes API backend.

## Requirements

- Node.js and npm
- A running Notes API backend (the default URL is `http://localhost:8080/notes-api/v1`)

## Getting started

Install the project dependencies and start the Angular development server:

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The development server reloads when application files change.

## Backend configuration

The API base URL and context path are configured in the environment files:

- `src/environments/environment.development.ts` is used by `npm start`.
- `src/environments/environment.ts` is used by the production build.

Both currently point to `http://localhost:8080` with the context path `/notes-api/v1`. Update these values to match your backend deployment.

The frontend expects the backend to provide authentication, profile, and notes endpoints under this context path:

| Purpose | Endpoint |
| --- | --- |
| Register | `POST /auth/register` |
| Sign in | `POST /auth/login` |
| Current user profile | `POST /profile/me` |
| List notes | `GET /user/notes` |
| Search notes | `GET /user/notes/search` |
| Create a note | `POST /user/notes` |
| Update a note | `PUT /user/notes` |
| Delete a note | `DELETE /user/notes/{id}` |

The notes list and search requests support page number, page size, sort field, and sort order parameters. The application stores the authentication token in browser local storage and uses it for authenticated requests. The session duration is configured in the same environment files (60 minutes by default).

## Project structure

```text
notes-api/
├── public/
│   └── assets/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── loading-overlay/
│   │   │   ├── navbar/
│   │   │   ├── not-found/
│   │   │   ├── notes-component/
│   │   │   │   ├── notes-card/
│   │   │   │   └── notes-editor/
│   │   │   └── pagination/
│   │   ├── dialogs/
│   │   │   └── confirm-dialog/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── model/
│   │   └── services/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

`src/app/components` contains the UI features, while `services` handles API and session logic. Routes, models, guards, interceptors, dialogs, and environment-specific API settings are organized in their respective folders.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Create a production build |
| `npm run watch` | Build in development mode and rebuild on changes |
| `npm test` | Run unit tests |

Production build artifacts are written to `dist/`.
