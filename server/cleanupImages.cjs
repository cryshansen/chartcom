const fs = require('fs');
const path = require('path');

// Paths
const imageDir = path.join(__dirname,'..','client', 'public','images', 'apothecary');
const notUsedDir = path.join(imageDir, 'not-used');
const productPath = path.join(__dirname, 'data', 'products.json');
const blendPath = path.join(__dirname, 'data', 'productblends.json');

// Ensure 'not-used' folder exists
if (!fs.existsSync(notUsedDir)) {
  fs.mkdirSync(notUsedDir);
}

// Read and parse JSON files
const products = JSON.parse(fs.readFileSync(productPath, 'utf8'));
const blends = JSON.parse(fs.readFileSync(blendPath, 'utf8'));

// Extract used image file names
const usedImages = new Set();

// products.json might not have imgSrc
products.forEach(p => {
  if (p.imgSrc) usedImages.add(path.basename(p.imgSrc));
});

// blends have imgSrc
blends.forEach(b => {
  if (b.imgSrc) usedImages.add(path.basename(b.imgSrc));
});

// Scan actual image files in folder
const allImages = fs.readdirSync(imageDir).filter(file =>
  /\.(jpe?g|png|gif|webp)$/i.test(file)
);

// Move unused images to /not-used
allImages.forEach(file => {
  if (!usedImages.has(file)) {
    const srcPath = path.join(imageDir, file);
    const destPath = path.join(notUsedDir, file);
    fs.renameSync(srcPath, destPath);
    console.log(`Moved unused image: ${file}`);
  }
});

console.log(`✅ Cleanup complete. ${allImages.length - usedImages.size} images moved.`);
