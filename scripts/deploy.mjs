import { execSync } from 'node:child_process';
import { copyFileSync, existsSync, rmSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(siteDir, 'dist');

function run(cmd, cwd = siteDir) {
  execSync(cmd, { cwd, stdio: 'inherit' });
}

run('npx vite build');
writeFileSync(resolve(distDir, '.nojekyll'), '');
copyFileSync(resolve(distDir, 'index.html'), resolve(distDir, '404.html'));

const distGit = resolve(distDir, '.git');
if (existsSync(distGit)) rmSync(distGit, { recursive: true, force: true });

run('git -c safe.directory=* init -b gh-pages', distDir);
run('git -c safe.directory=* add -A', distDir);
run('git -c safe.directory=* -c user.name="Pedro Siqueira" -c user.email="pedrosiqueira14122005@gmail.com" commit -m "deploy: atualizar GitHub Pages"', distDir);
run('git -c safe.directory=* remote add origin https://github.com/TheAkachi/TheAkachi.github.io.git', distDir);
run('git -c safe.directory=* push -f origin gh-pages', distDir);

rmSync(distGit, { recursive: true, force: true });
console.log('\nPublicado com sucesso em https://theakachi.github.io/');
