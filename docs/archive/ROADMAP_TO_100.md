### ROADMAP TO 100/100 (Optimum Smart System)

### Priority order (fastest path)
- **P0**: Make project run + tests runnable (no corrupted configs, clean urls/tests).
- **P1**: Finish TypeScript migration + accessibility baseline.
- **P2**: Backend test coverage ≥ 90% + consistent API errors.
- **P3**: CI/CD + security scanning + observability.
- **P4**: Docs & onboarding (10-minute setup).

---

### P0 — Unblockers (do first)
- [ ] Fix corrupted config files (no duplicated content): `optimum-backend/pytest.ini`, `optimum-backend/optimum_system/urls.py`
- [ ] Ensure only one “real” frontend + backend directory used for deployment
- [ ] Make `python -m pytest` pass locally (start with auth tests)

---

### P1 — Frontend (quality + UX + accessibility)
- [ ] Convert remaining `.js/.jsx` → `.ts/.tsx`
- [ ] Enable **TypeScript strict mode** and fix all TS errors
- [ ] Add consistent loading/error/empty states for all dashboard data
- [ ] Accessibility:
  - [ ] Full keyboard navigation
  - [ ] Focus management / trap focus for dialogs
  - [ ] ARIA labels for icon-only controls
  - [ ] WCAG AA contrast pass

---

### P2 — Backend (security + correctness + tests)
- [ ] Permissions: verify every endpoint is secure-by-default (`IsAuthenticated`) and admin endpoints are role-guarded
- [ ] Centralize error responses (one DRF exception handler)
- [ ] Expand validators + sanitization tests (edge cases, unicode, injection-like payloads)
- [ ] Test coverage ≥ **90%** (raise gradually per app)

---

### P3 — DevOps & Production hardening
- [ ] GitHub Actions: frontend build/test, backend pytest, caching
- [ ] Dependency scanning baseline (pip-audit / npm audit)
- [ ] Health endpoints (`/health/`) and release/version info
- [ ] Sentry enabled by env var and validated in prod

---

### P4 — Documentation
- [ ] Root README: setup, env vars, run, tests, deploy
- [ ] Architecture doc: apps, auth roles, data model, realtime/tasks flow

---

### PowerShell quick commands
- **Backend tests**: `cd optimum-backend; python -m pytest -v --no-cov`
- **Frontend dev**: `cd optimum-frontend; npm install; npm run dev`




