import app from "./app";

const PORT = 4000;

const handleLitening = () =>
  console.log(`✅ Listening On: http:localhost:${PORT}`);

app.listen(PORT, handleLitening);
