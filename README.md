# Chudex Create Deco

A responsive starter website for Chudex Create Deco, a decoration and creative styling business.

## Current project stage

This first version contains the public-facing website:
- Home / hero section
- About section
- Decoration services
- Inspiration gallery
- How it works
- Enquiry form interface
- Responsive mobile navigation

**Important:** The enquiry form is currently a front-end demonstration. It does not save or send enquiries yet. A Flask backend, database, and secure admin dashboard will be added in the next development stages.

## Project structure

```text
chudex-create-deco/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
├── .gitignore
└── README.md
```

## Run locally

You can open `index.html` directly in a browser. For a local web server with Python installed, run this command from the project folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customise before launch

1. Replace the inspiration gallery photos with real Chudex project photos.
2. Confirm the business email, phone number, address and social media links.
3. Confirm the final services and service descriptions.
4. Connect the enquiry form to the backend before accepting real customer enquiries.

## Planned next stages

1. Admin login and dashboard interface.
2. Python Flask API.
3. Database for enquiries, customers, services and bookings.
4. Authentication and access control for administrators.
5. Docker, Docker Compose and deployment on AWS EC2.

## GitHub upload

Create a new GitHub repository named `chudex-create-deco`. From this folder, run:

```bash
git init
git add .
git commit -m "Create Chudex Create Deco website starter"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/chudex-create-deco.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub username.
