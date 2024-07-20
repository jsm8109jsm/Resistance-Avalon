import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "@/../public/firebase-sdk/resistance-avalon-570a7-firebase-adminsdk-b26wd-5b9c97bae8.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
}

export default admin;
