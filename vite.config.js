import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows access from network devices
    port: 3000, // Ensure this matches your setup
    strictPort: true, // Fail if port is already in use
    hmr: {
      protocol: "ws", // WebSocket protocol
      host: "localhost",
      port: 3000,
    },
  },
});
