import fireStore from "@/firebase/firestore";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

/**
 * fireStore에 문서를 생성한다.
 * @param name 컬렉션 이름
 * @param data 필드 데이터
 */
const addDocHandler = async (name: string, data: { [x: string]: any }) => {
  try {
    await addDoc(collection(fireStore, name), data);
  } catch (error) {
    console.log(error);
  }
};

/**
 * fireStore에 문서 아이디를 지정하며 문서를 생성한다.
 * @param name 컬렉션 이름
 * @param data 필드 데이터
 * @param docId 문서 아이디
 */
const setDocHandler = async (
  name: string,
  data: { [x: string]: any },
  docId: string,
) => {
  const docRef = doc(fireStore, name, docId);

  try {
    await setDoc(docRef, data);
  } catch (error) {
    console.log(error);
  }
};

/**
 * fireStore에 저장된 문서를 읽는다.
 * 비동기 함수와 함께 사용한다.
 * @param name 컬렉션 이름
 * @param docId 문서 아이디
 * @returns fireStore의 문서를 읽는 함수이다.
 */
const getDocHandler = (name: string, docId: string) => {
  return getDoc(doc(fireStore, name, docId));
};

/**
 * fireStore의 문서를 수정한다.
 * @param name 컬렉션 이름
 * @param data 필드 데이터
 * @param docId 문서 아이디
 */
const updateDocHandler = async (
  name: string,
  data: { [x: string]: any },
  docId: string,
) => {
  const docRef = doc(fireStore, name, docId);

  try {
    await updateDoc(docRef, data);
  } catch (error) {
    console.log(error);
  }
};

export { addDocHandler, setDocHandler, getDocHandler, updateDocHandler };
