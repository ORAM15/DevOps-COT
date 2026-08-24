import express from "express";
import { createServer as createViteServer } from "vite";
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Mock API routes for DevOps actions simulation
  app.get("/api/pipeline/status", (req, res) => {
    res.json({ 
      status: "running",
      progress: Math.floor(Math.random() * 100),
      logs: [
        "Pulling latest from origin/main...",
        "Executing 'npm install'...",
        "Building production bundle...",
        "Deploying to cluster-alpha..."
      ]
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
