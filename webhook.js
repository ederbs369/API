export default async function handler(req, res) {
  const data = req.body;

  // Tratamento de dados
  const nome = data.answers["3"]?.answer || "";
  const email = data.answers["4"]?.answer || "";

  const payload = {
    name: nome,
    email: email,
  };

  // Enviar para outra API
  await fetch('https://api-externa.com/endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  res.status(200).json({ message: "Dados processados com sucesso!" });
}

