import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO} from '../Utils/constants';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () =>{
        signOut(auth).then(() => {})
        .catch((error) => {
            // An error happened.
            navigate("/error")
          });
    };

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL} = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate("/browse");
    
    
    
          } else {
            dispatch(removeUser());
            navigate("/");
    
    
          }
        });
        //Unsubscribe when components unmounts
        return () => unsubscribe();
      }, []);
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
        className="w-44"
        src={LOGO} alt="logo"/>
    {user &&(
    
    <div className="flex p-2">
        <img
        className="w-12 h-12"
        alt="user icon"
        src="https://occ-0-2365-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'"
        />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>

    </div>
)}
    </div>
    )
}

export default Header