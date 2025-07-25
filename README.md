# Career Foundation English Academy - Student Result System

## 🧑‍🏫 Features
- Firebase-based login for teachers
- Admin dashboard for adding student exam results
- Public result lookup page

## 🔧 Setup
1. Create a Firebase project
2. Enable **Authentication (Email/Password)** and **Firestore**
3. Replace keys in `firebase-config.js`
4. Deploy this repo to GitHub Pages

## 🔐 Firebase Security Rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /results/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

Made with ❤️ for Career Foundation English Academy.
