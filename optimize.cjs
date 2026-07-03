const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const filePath = path.join(publicDir, file);
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      
      const newPath = path.join(publicDir, `${name}.webp`);
      
      console.log(`Optimizing ${file}...`);
      
      try {
        await sharp(filePath)
          .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(newPath);
          
        console.log(`Created ${name}.webp`);
        // fs.unlinkSync(filePath); // delete original
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

optimizeImages();
