const path = require('path');
const fs = require('fs');
const express = require('express');
const sizeOf = require('image-size').default;

const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images'))); // serve image URLs

app.get('/api/studio-images', (req, res) => {
  const id = req.query.id || '3'; // default to studio3
  const folderPath = path.join(__dirname, 'images', `studio${id}`, '576_clean');
  console.log(`✅ Server folderPath  ${folderPath}`);
  if (!fs.existsSync(folderPath)) {
    return res.status(404).json({ error: 'Folder not found' });
  }

  const files = fs.readdirSync(folderPath);

/*
  const imageList = files.map((file, index) => {
    const filePath = path.join(folderPath, file);
    const dimensions = sizeOf(filePath);
    return {
      id: index,
      image: `/images/studio${id}/576/${file}`, // public URL
      width: dimensions.width,
      height: dimensions.height
    };
  });

*/

const imageList = files
  .map((file, index) => {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) return null; // skip directories

    try {
      const buffer = fs.readFileSync(filePath);
      const dimensions = sizeOf(buffer);
      //const dimensions = sizeOf(filePath); errors wanting the buffer instead
      return {
        id: index,
        image: `/images/studio${id}/576/${file}`,
        width: dimensions.width,
        height: dimensions.height
      };
    } catch (err) {
      console.error(`❌ Could not get size for ${file}:`, err.message);
      return null;
    }
  })
  .filter(Boolean); // Remove any nulls

  res.json(imageList);
});


app.get('/api/products', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'products.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Failed to read products.json', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.json(JSON.parse(data));
  });
});


app.get('/api/workshops', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'workshops.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Failed to read studio1workshops.json', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.json(JSON.parse(data));
  });
});




app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
