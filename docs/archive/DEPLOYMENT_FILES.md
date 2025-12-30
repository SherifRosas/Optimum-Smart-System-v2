# Important Files for Deployment

## ✅ Files/Folders TO Deploy (Essential)

### Backend (`optimum-backend/`)
- ✅ `manage.py`
- ✅ `requirements.txt`
- ✅ `optimum_system/` (settings, urls, wsgi)
- ✅ `orders/` (models, views, serializers, urls)
- ✅ `customers/` (models, views, serializers, urls)
- ✅ `suppliers/` (models, views, serializers, urls)
- ✅ `authentication/` (auth views, models)
- ✅ `ai/` (AI services)
- ✅ `product_requests/` (product request models)
- ✅ `Dockerfile`
- ✅ `Procfile`
- ✅ `runtime.txt`
- ✅ `wsgi.py`

### Frontend (`optimum-frontend/`)
- ✅ `package.json`
- ✅ `package-lock.json`
- ✅ `vite.config.ts`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.js`
- ✅ `postcss.config.js`
- ✅ `vercel.json`
- ✅ `src/` (all source code)
- ✅ `public/` (public assets)
- ✅ `Dockerfile`

### Root Configuration
- ✅ `vercel.json`
- ✅ `docker-compose.yml`
- ✅ `.github/workflows/ci.yml` (CI/CD)
- ✅ `README.md`
- ✅ `docs/` (documentation)

## ❌ Files/Folders NOT to Deploy (Excluded)

### Dependencies (installed on server)
- ❌ `node_modules/`
- ❌ `venv/`
- ❌ `__pycache__/`

### Build Outputs (generated on server)
- ❌ `dist/`
- ❌ `build/`
- ❌ `staticfiles/`

### Database & Environment
- ❌ `db.sqlite3`
- ❌ `.env`
- ❌ `.env.local`

### Temporary/Development
- ❌ `*.log`
- ❌ `coverage/`
- ❌ `htmlcov/`
- ❌ `_archive/`
- ❌ `*.backup`

### IDE/OS Files
- ❌ `.vscode/`
- ❌ `.idea/`
- ❌ `.DS_Store`

---

## 📦 What Gets Deployed

When you push to GitHub, only these will be included:

```
Optimum-Smart-System-v/
├── optimum-backend/          ✅ (source code only)
│   ├── manage.py            ✅
│   ├── requirements.txt     ✅
│   ├── optimum_system/      ✅
│   ├── orders/              ✅
│   ├── customers/           ✅
│   ├── suppliers/           ✅
│   ├── authentication/      ✅
│   ├── ai/                  ✅
│   ├── product_requests/    ✅
│   ├── Dockerfile           ✅
│   └── Procfile             ✅
├── optimum-frontend/         ✅ (source code only)
│   ├── package.json         ✅
│   ├── src/                 ✅
│   ├── public/              ✅
│   ├── vite.config.ts       ✅
│   └── vercel.json          ✅
├── .github/                  ✅
│   └── workflows/           ✅
├── docs/                     ✅
├── vercel.json              ✅
├── docker-compose.yml       ✅
└── README.md                ✅
```

---

## 🚫 What Gets Excluded (via .gitignore)

```
❌ node_modules/
❌ venv/
❌ dist/
❌ build/
❌ db.sqlite3
❌ .env
❌ __pycache__/
❌ *.log
❌ coverage/
❌ _archive/
```

---

## ✅ Verification

Before pushing, verify what will be committed:

```powershell
git status
```

This shows only important files, excluding everything in .gitignore.

