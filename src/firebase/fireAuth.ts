import { getAuth } from "@firebase/auth";
import firebasedb from "@/firebase/firebasedb";

const fireAuth = getAuth(firebasedb);

export default fireAuth;
