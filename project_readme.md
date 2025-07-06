# Crystal Hansen Artographic Platform

This project is a hybrid full-stack web application combining a **React frontend**, a **Node.js backend for development**, and a **PHP-based API** for live production. It serves as a creative portfolio and studio booking platform with dynamic image rendering, product showcasing, and scheduling.

---

## 🚀 React Frontend

### Summary

- Built with **React + TypeScript** using **Vite**.
- Modular components (`ImageCard`, `MasonryBlock`, `StudioGallery`).
- Responsive design via **Bootstrap**.
- Dynamic data via `fetch()` from PHP and Node APIs.
- Routing handled by `react-router-dom`.
- Optional SEO support using `react-helmet`.

### Key Features

- Studio image galleries, fetched by ID.
- Filterable, categorized image grids.
- Dynamic product listing (oils & blends).
- Modal lightboxes and scroll animations.

### Getting Started

```bash
npm create vite@latest my-portfolio --template react-ts
cd my-portfolio
npm install
npm install react-router-dom bootstrap react-helmet
```

### Example Usage

```tsx
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/index-images.php/images/list?category=studio${studioId}&folder=576`)
    .then(res => res.json())
    .then(data => setImages(data));
}, [studioId]);
```

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/studios/:id?" element={<Studios />} />
</Routes>
```

---

## 🟢 Node Backend (Dev API Server)

### Summary

- Local development server using `Express`
- Serves mock JSON data and studio bookings
- Combines `products.json` and `productblends.json`
- Uses `node-cron` to generate daily fake bookings

### Setup

```bash
mkdir server
cd server
npm init -y
npm install express node-cron cors
```

### File Structure

```
server/
  server.cjs
  data/
    products.json
    productblends.json
    bookings.json
  utils/
    fakeStudioBookings.js
```
navigate to server and run `node utils/fakeStudioBookings.js`
This will provide a month of mock bookings based on real world examples.


### Sample API Endpoint

```js
app.get('/api/products', (req, res) => {
  const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));
  const blends = JSON.parse(fs.readFileSync('./data/productblends.json', 'utf8'));
  res.json([...products, ...blends]);
});
```

---

## 🟨 PHP Backend (Live Production API)

### Summary

- Simple MVC structure: `controller/`, `model/`, `data/`
- Reads directories of images and serves URL lists
- Interacts with JSON files
- API example: `index-images.php/images/list?category=flora&folder=576`

### Structure

```
public_html/
  images/
    flora/576/
  api/
    index-images.php
    controller/
    model/
    data/
```

### Example Code

```php
$targetDir = realpath("$baseDir$safeCategory/$safeFolder");
foreach (scandir($targetDir) as $file) {
  if (preg_match('/\.(jpg|jpeg|png)$/i', $file)) {
    $images[] = "/images/$safeCategory/$safeFolder/$file";
  }
}
echo json_encode($images);
```

---

## 📎 Deployment & SEO

- React built using Vite generates `/dist` folder.
- `.htaccess` used for redirecting clean URLs.
- Image assets organized by category in `/public/images/*`.
- Pages configured with `react-helmet` for SEO meta tags.

---

## 💡 Useful Commands

```bash
# Run React dev server
npm run dev

# Run Node server with cron
nodemon server.cjs

# Install typings for Helmet
npm install --save-dev @types/react-helmet
```

---

## 🔗 External Resources

- [React Helmet Docs](https://github.com/nfl/react-helmet)
- [PHP Directory Traversal](https://www.php.net/manual/en/function.scandir.php)
- [Node Cron](https://www.npmjs.com/package/node-cron)

---

## ✨ Author

**Crystal Hansen**

- Portfolio: [https://crystalhansenartographic.com](https://crystalhansenartographic.com)
- Repo Notes: PHP repo includes notes and links to GitHub projects where applicable.

---

Let me know if you'd like this tutorial split per directory with README.md files inside each subfolder.

