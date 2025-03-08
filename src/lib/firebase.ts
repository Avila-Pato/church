// src/lib/firebase.ts
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "@/lib/firebase-service-account.json";

// Configura Firebase con las credenciales
const firebaseConfig = {
  credential: cert({
    projectId: serviceAccount.project_id,
    privateKey: serviceAccount.private_key.replace(/\\n/g, "\n"), // Ajusta el formato de la clave privada
    clientEmail: serviceAccount.client_email,
  }),
};

// Inicializa Firebase solo si no está ya inicializado
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };