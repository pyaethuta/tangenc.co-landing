import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const MEMBER_IMAGES = {
  1: 'HeinHtet',
  2: 'Thuta',
  3: 'SawThet',
  4: 'TunTun',
  5: 'ET',
  6: 'SuMyat',
  7: 'HeinHtetJr',
  8: 'ThetNyan',
  9: 'Sai'
};

async function optimizeImages() {
  const sourceDir = path.join(__dirname, '../src/assets/members');
  const outputDir = path.join(__dirname, '../public/optimized-members');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const [id, name] of Object.entries(MEMBER_IMAGES)) {
    const sourcePath = path.join(sourceDir, `${name}.png`);
    const outputPath = path.join(outputDir, `${id}.jpg`);

    try {
      await sharp(sourcePath)
        .resize(400, null, {
          fit: 'cover',
          withoutEnlargement: true
        })
        .jpeg({ quality: 80 })
        .toFile(outputPath);
      console.log(`Optimized ${name}.png`);
    } catch (error) {
      console.error(`Error optimizing ${name}.png:`, error);
    }
  }
}

optimizeImages(); 