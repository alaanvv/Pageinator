require('svelte/register')
const fs = require('fs')
const App = require('./App.svelte').default

const result = App.render()

fs.writeFileSync('./public/index.html',
  `<!DOCTYPE html>
  <html lang='pt-BR'>
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width,initial-scale=1'>
      <link rel='icon' href='/assets/img/favicon.png' />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
      <title> Seguros </title>
      ${result.head}
      <style> ${result.css.code} </style>
    </head>
    <body> ${result.html} </body>
  </html>`
)
