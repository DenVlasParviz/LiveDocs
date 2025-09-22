# LiveDocs

Web application for real-time editing and creating documents. Supports user authentication, collaborative editing.

Try demo: https://live-docs-omega-pearl.vercel.app/
---

## Contents

- [Requirements](#requirements)
- [Environment Variables (.env)](#environment-variables-env)  
- [Screenshots](#screenshots)

---

## Requirements
- Next.js >= 15  
- npm  
- Convex
- Clerk

## Local installation and running
1. Install dependencies:
```bash
git clone https://github.com/DenVlasParviz/LiveDocs.git
cd LiveDocs
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server: 
```bash
npm run dev
npm convex dev
```
The application will be available at  http://localhost:3000

## Environment Variables (.env)
Example `.env`:
```
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_JWT_ISSUER_DOMAIN=
LIVEBLOCKS_SECRET_KEY=
```
---



## Screenshots

<img width="1892" height="930" alt="изображение" src="https://github.com/user-attachments/assets/34a32365-4e5b-4cb0-8086-cccbd4a97744" />
<img width="950" height="675" alt="изображение" src="https://github.com/user-attachments/assets/9db50515-f846-4a2b-968a-2361a3f6378e" />



