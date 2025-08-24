# 📝 Quote Saver – Full Stack Demo (Django + React)

A minimal full-stack app to submit and view quotes. Built with Django REST Framework and React JS, structured for modular development and future-proof automation.

---

## 🚀 Branch Structure

| Branch     | Purpose                          |
|------------|----------------------------------|
| `main`     | Final integrated codebase        |
| `backend`  | Django REST API (quotes service) |
| `frontend` | React UI (quote submission/view) |

---

## 🧱 Backend: Django REST API

**Branch:** `backend`  
**Stack:** Django + Django REST Framework + CORS

### Features:
- Quote model: `author`, `text`
- RESTful endpoints: `GET`, `POST`, `PUT`, `DELETE`
- CORS enabled for frontend access

### Setup:

```bash
git checkout backend
pip install -r requirements.txt  # includes djangorestframework, django-cors-headers
python manage.py migrate
python manage.py runserver