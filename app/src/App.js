import './App.css';
import Poll from './Poll.js'
import {db} from './firebase.js';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import {useState, useEffect} from 'react';

function App() {
  const collectionName = "usersResponse";
  const docID = process.env.REACT_APP_docId;
  const [pollData, setPollData] = useState([])
 
  useEffect(() => {

    // getDoc(doc(db, collectionName, docID))
    // .then((doc) => setPollData(doc.data()) )
    getDocs(collection(db, collectionName))
    .then((allDocs) => 
    {let data = []
      allDocs.forEach((doc) => {
        data.push({...doc.data(), id:doc.id})
      })
      console.log(data)
      setPollData(data)
    })
    
    // setPollData(pollData.push({...doc.data()})))})
    
  },[])
  return (
    <>
      <h1>Poll</h1>
      <h3> What's your favorite food? </h3>
      <Poll data = {pollData}/>
    </>
    
  );
}

export default App;
