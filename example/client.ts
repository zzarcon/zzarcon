import * as firebase from "firebase/app";
import 'firebase/database';
import "firebase/firestore";
import { Movie } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyCAONP5X9tfefuPhGNSCNFLh8o092_EzsM",
  authDomain: "zzarcon-movies.firebaseapp.com",
  databaseURL: "https://zzarcon-movies.firebaseio.com",
  projectId: "zzarcon-movies",
  storageBucket: "zzarcon-movies.appspot.com",
  messagingSenderId: "767462572366",
  appId: "1:767462572366:web:ed7db775119c8a0a09de1f",
  measurementId: "G-JZFH86XMY7"
};
const collectionName = 'Movies'

export class Client {
  app: firebase.app.App;
  db: firebase.firestore.Firestore;

  constructor() {
    this.app = firebase.initializeApp(firebaseConfig)
    this.db = firebase.firestore(this.app);
  }

  getMovies = async (): Promise<Movie[]> => {
    const querySnapshot = await this.db.collection(collectionName).get();

    return querySnapshot.docs.map(doc => doc.data() as Movie);
  }

  getMovie = (movieId: string) => {
    return this.db.collection(collectionName).doc(movieId);
  }

  addMovie = (movie: Movie) => {
    console.log({movie})
  }
}

export const client = new Client();