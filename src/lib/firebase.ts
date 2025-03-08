import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Verificar que las variables de entorno estén disponibles
console.log("FIREBASE_PROJECT_ID", process.env.FIREBASE_PROJECT_ID);
console.log("FIREBASE_CLIENT_EMAIL", process.env.FIREBASE_CLIENT_EMAIL);

// Configura Firebase con las credenciales desde variables de entorno estas se configuran en elv.olcal
const firebaseConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
};

// Inicializa Firebase solo si no está ya inicializado
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
