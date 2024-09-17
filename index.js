const express = require('express');
const app = express();

// Définir une route GET pour renvoyer "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Démarrer le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
