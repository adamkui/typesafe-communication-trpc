## 🛠 Typesafe communication project

This is TypeScript based monorepo, which aims to implement a tRPC based solution for typesafe communication between a React frontend, and an Express backend application.

## 📁 Project structure

```txt
typesafe-communication/
├── apps/
│   └── backend/
│       ├── services/
│       └── server (express)
│   └── frontend/
│       └── src/
├── packages/
│   └── trpc/
│       └── src/
│           └── schemas/
│           └── serviceRouters/
│           └── trpc
│           └── index (router)
```

## 📦 Requirements and install

- Npm
- Node.js 22+

#### To install packages for monorepo apps and packages:

```bash
npm i
```

## 🚀 Get started

You will need two parallel terminals.

#### Terminal 1:

```bash
npm i
cd apps/backend && npm run dev
```

#### Terminal 2:

```bash
cd apps/frontend && npm run dev
```
