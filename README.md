# homepage2

This is my new homepage, providing an overview of my skills, contact information, and more.
The website is deployed [here](https://homepage2-cd7d3.firebaseapp.com/).

## Tech Stack

- **[React](https://react.com) & [Vite](https://vite.dev)** for fast development and efficient bundling
- **[Material UI](https://mui.com)** for modern UI components
- **Firebase** for deployment and hosting

## Useful Links

- [A list of developer portfolios for your inspiration](https://github.com/emmabostian/developer-portfolios)
- [One Page Love - One Page Website Inspiration and Templates](https://onepagelove.com/)
- [25 Web Developer Portfolio Examples](https://www.hostinger.com/tutorials/web-developer-portfolio#1_Charles_Bruyerre)
- [Codepen IO](https://codepen.io/)
- [Icons Library](https://icons8.com/)
- [Midjourney AI - AI Image Generator](https://www.midjourney.com/)
- [Favicon Generator](https://favicon.io/favicon-generator/)
- [SVG Waves Generator](https://www.softr.io/tools/svg-wave-generator)

# Deploy React Vite App on Firebase 🔥
1. Create Firebase Project
2. Select **Hosting** (not App Hosting)
3. Set the directory to **dist** (not public)

---
# Deploy React Vite App to GitHub Pages 🚀

This guide explains how to deploy a **React Vite** project to **GitHub Pages** in a few simple steps.

### 📌 Prerequisites
- Node.js installed
- A React Vite project initialized
- A GitHub repository with the project pushed

---

### 1️⃣ Install `gh-pages`
First, install the `gh-pages` package as a development dependency:

```sh
npm install gh-pages --save-dev
```

---

### 2️⃣ Update `package.json`
Modify `package.json` by adding the following lines:

#### Add the homepage URL
```json
"homepage": "https://your-username.github.io/your-repo"
```

#### Add deployment scripts
```json
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Replace `your-username` and `your-repo` with your actual GitHub username and repository name.

---

## 3️⃣ Push Your Code to GitHub
Ensure your latest code is committed and pushed:

```sh
git add .
git commit -m "Prepare for deployment"
git push origin main
```

---

## 4️⃣ Deploy 🚀
Run the following command to deploy your project:

```sh
npm run deploy
```

This will build the project and push the `dist` folder to a new `gh-pages` branch.

---

## 5️⃣ Enable GitHub Pages
1. Go to your GitHub repository.
2. Navigate to **Settings** → **Pages**.
3. Under **Source**, select the `gh-pages` branch.
4. Save the changes.


---

## 🎉 Done!
Your React Vite app is now live on GitHub Pages! 🎊
Your site will be live shortly at:
🔗 `https://your-username.github.io/your-repo`


## Feedback & Contributions

If you like my homepage, feel free to use it as inspiration or suggest improvements to the design and code.
