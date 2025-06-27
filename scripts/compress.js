const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/assets/images';
const outputDir = './public/assets/compressed';
const supportedExtensions = ['.jpg', '.jpeg', '.png'];

function compressImagesRecursively(inputPath, outputPath) {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  const items = fs.readdirSync(inputPath);

  items.forEach((item) => {
    const inputFile = path.join(inputPath, item);
    const outputFile = path.join(outputPath, item);
    const stat = fs.statSync(inputFile);
    const ext = path.extname(item).toLowerCase();

    if (stat.isDirectory()) {
      compressImagesRecursively(inputFile, outputFile);
    } else if (supportedExtensions.includes(ext)) {
      let transformer = sharp(inputFile); // ❌ No resizing here

      if (ext === '.png') {
        transformer = transformer.png({ compressionLevel: 9 });
      } else {
        transformer = transformer.jpeg({ quality: 70 });
      }

      transformer
        .toFile(outputFile)
        .then(() => console.log(`✅ Compressed: ${outputFile}`))
        .catch((err) => console.error(`❌ Error: ${outputFile}`, err.message));
    }
  });
}

compressImagesRecursively(inputDir, outputDir);
