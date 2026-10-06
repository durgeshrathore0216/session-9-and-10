# Durgesh Kanwar — Profile Website

A premium, responsive personal profile website for **Durgesh Kanwar**, a second-year Computer Science Engineering student, Class Representative and NCC Cadet.

## ✦ Highlights

- Premium dark-first visual design
- Three-color design system:
  - **Background:** deep charcoal
  - **Major elements:** elevated graphite surfaces
  - **Accent/minor elements:** electric lime
- Dark ↔ Light theme toggle
- Theme preference saved in `localStorage`
- Fully responsive layout
- Smooth scrolling
- Scroll-reveal animations using native `IntersectionObserver`
- No frameworks or build tools required
- Google Fonts loaded through CSS
- GitHub-ready folder structure

## 📁 Project Structure

```text
durgesh-kanwar-profile/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Run Locally

No installation is required.

1. Download or clone the repository.
2. Open the folder in VS Code.
3. Open `index.html` directly in a browser.

For a better development workflow, use the **Live Server** extension in VS Code and open `index.html` with Live Server.

## 🌐 Push to GitHub

```bash
git init
git add .
git commit -m "Create Durgesh Kanwar profile website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the URL of the GitHub repository.

## 🎨 Customization

### Change the three-color system

All primary colors are CSS variables at the top of `style.css`:

```css
--bg: #0a0b0d;
--surface: #13161a;
--accent: #d8ff4f;
```

The light theme has its own values inside:

```css
[data-theme="light"] { ... }
```

### Change profile information

The text content is inside `index.html`. Useful sections to edit:

- Hero introduction
- Academic achievement
- NCC / AINSC experience
- Class Representative role
- Personal strengths
- Future goals

### Add a real profile photo

The current hero intentionally uses a **DK monogram** so the project does not invent or use an unapproved photograph.

To add a photo later, replace the `.profile-monogram` element in `index.html` with an `<img>` element and style it as a circular portrait.

## 🧩 Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Intersection Observer API
- Local Storage API

## Note

The profile wording includes the achievements and traits provided for the project. Any additional personality descriptions are written as professional positioning rather than claims of independently verified achievements.
