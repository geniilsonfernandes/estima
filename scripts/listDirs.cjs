const fs = require('fs');
const path = require('path');

// Função recursiva para listar todas as pastas dentro do diretório src
const listDirectories = (dirPath) => {
  const directories = [];

  // Lê os arquivos e pastas dentro do diretório
  const items = fs.readdirSync(dirPath);

  // Percorre os itens encontrados
  items.forEach((item) => {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);

    // Se for uma pasta, adiciona na lista
    if (stats.isDirectory()) {
      directories.push(fullPath);
      // Chama a função recursivamente para explorar subpastas
      directories.push(...listDirectories(fullPath));
    }
  });

  return directories;
};

// Caminho do diretório src
const srcDir = path.join(__dirname, '../src'); // Se o 'src' estiver um nível acima.

// Executa a função e exibe as pastas
const directories = listDirectories(srcDir);
console.log('Pastas encontradas:', directories);
