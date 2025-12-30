# Optimum Smart System

An AI-powered order management platform built with React and Django.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.9+
- **Git**

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Optimum-Smart-System-v
   ```

2. **Start both servers** (choose one method):

   **Windows:**
   ```powershell
   # Option 1: Batch file (easiest)
   .\start_servers.bat
   
   # Option 2: PowerShell script
   .\start_local.ps1
   ```

   **macOS/Linux:**
   ```bash
   chmod +x start_local.sh
   ./start_local.sh
   ```

   **Manual:**
   - See [Local Setup Guide](docs/development/LOCAL_SETUP.md)

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api
   - Admin Panel: http://localhost:8000/admin/

## 📚 Documentation

- **[AI Development Roadmap](AI_ROADMAP.md)** - 🗺️ **Complete roadmap for AI assistants to continue development**
- **[Local Setup Guide](docs/development/LOCAL_SETUP.md)** - Detailed local development setup
- **[Deployment Guide](docs/deployment/DEPLOYMENT_GUIDE.md)** - Production deployment instructions
- **[Project Review](PROJECT_REVIEW.md)** - Comprehensive project review and recommendations
- **[Troubleshooting](docs/development/TROUBLESHOOTING.md)** - Common issues and solutions

## 🛠️ Technology Stack

### Frontend
- React 19.2.0
- TypeScript
- Vite
- TailwindCSS
- React Query
- Zustand

### Backend
- Django 5.2.7
- Django REST Framework
- JWT Authentication
- PostgreSQL/SQLite
- WebSocket support

## 📋 Features

- **Order Management**: Create, track, and manage customer orders
- **Customer Management**: Store and manage customer information
- **Supplier Communication**: Real-time messaging with suppliers
- **Financial Dashboard**: Track revenue, costs, and profitability
- **AI Integration**: AI-powered order analysis
- **Role-Based Access Control**: Secure user permissions
- **Responsive Design**: Works on desktop and mobile devices

## 🔧 Configuration

### Environment Variables

**Backend** (create `optimum-backend/.env`):
```env
DJANGO_ENV=development
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000
ADMIN_EMAIL=sherifrosas.ai@gmail.com
```

**Frontend** (create `optimum-frontend/.env`):
```env
VITE_API_URL=http://localhost:8000/api
VITE_WS_URL=ws://localhost:8000/ws
```

## 🧪 Testing

### Backend Tests
```bash
cd optimum-backend
pytest
```

### Frontend Tests
```bash
cd optimum-frontend
npm test
```

## 📦 Deployment

### Current Deployment

- **Frontend:** [Vercel](https://optimum-smart-system-navy.vercel.app)
- **Backend:** [PythonAnywhere](https://sherifrosas.pythonanywhere.com/api)

See [Deployment Guide](docs/deployment/DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🔐 Admin Access

Default credentials (change in production!):
- Username: `admin`
- Password: `admin123`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check [Troubleshooting Guide](docs/development/TROUBLESHOOTING.md)
- Open an issue in the repository

## 🗺️ Roadmap

- [x] AI/NLP integration for order analysis ✅
- [x] Role-based access control (RBAC) ✅
- [x] Real-time order updates ✅
- [x] Dashboard analytics ✅
- [x] Production deployment ✅
- [ ] Real-time notifications (WebSocket)
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Payment integration

---

**Last Updated:** December 2024  
**Status:** ✅ Production Ready
