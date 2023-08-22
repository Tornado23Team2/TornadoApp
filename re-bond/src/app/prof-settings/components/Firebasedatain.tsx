import { Flex } from '@/components/elements/box/Flex'
import React from 'react'
import {collection, addDoc} from "firebase/firestore";
import {collection, getDoc} from "firebase/firestore";
import {db} from "../../firebase.mjs";
//EditProfile.tsxにfirebaseを導入してみました。


try{
    const docRef = await addDoc(collection(db , "users"),{
        id: 12345,
        avatar: "avatar",
        name: "Yamada",
        email: "aaa@gmail.com",
        password_hash: "jkd3@e",
        profiles_id: 3,
        profiles_profile: "aiueo",
        registered_at:"2023/08/14",
        update_at:"2023/08/16",
    });
    console.log("Document written with ID: ",docRef.id);
} catch (e){
    console.error("Error adding document: ", e);
}

try{
    const docRef = await addDoc(collection(db , "mission_table"),{
        id: 12345,
        name: "Yamada",
        level: 3,
        require: 1,
        photo: "photo"
    });
    console.log("Document written with ID: ",docRef.id);
} catch (e){
    console.error("Error adding document: ", e);
}

try{
    const docRef = await addDoc(collection(db , "friendlist"),{
        id: 12345,
        my_id: 333,
        friends_id: 12345,
        success_count: 3,
        fritnds_lvl: 4,
        current_mission_id: 45
    });
    console.log("Document written with ID: ",docRef.id);
} catch (e){
    console.error("Error adding document: ", e);
}


function Firebase () {
  const [userList, setUserList] = useState([]);

  const userCollectionRef = collection(db,"users");
  useEffect(() => {
    const getUserList = async () => {
    try{
        const data = await getDoc(userCollectionRef);
        console.log(data);
    } catch (err){
        console.error(err);
    }
  };
  getUserList();
}, []);
  
  return (
    <div className="Firebasedatain">
        <Auth />
    </div>
  );
}

export default Firebase