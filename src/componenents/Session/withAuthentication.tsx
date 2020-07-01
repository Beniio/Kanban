import React, { useState, useEffect } from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../../Firebase';
import firebase from 'firebase';

const WithAuthentication = (Component: any) => {
//   const [authUser, setAuthUser] = useState(() => { 
//       const user = firebase.auth().currentUser
//       return { 
//         initializing: !user, user, 
//       } 
//   })
//   const onChange = (user: any) => {
//     setAuthUser({ initializing: false, user })
//   }
//   useEffect(()=>{
//     const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
//     // unsubscribe to the listener when unmounting
//     return () => unsubscribe()
//   },[])
//     // constructor(props: any) {
//     //   super(props);

//     //   this.state = {
//     //     authUser: null,
//     //   };
//     // }

//     // componentDidMount() {
//     //   this.listener = this.props.firebase.auth.onAuthStateChanged(
//     //     authUser => {
//     //       authUser
//     //         ? this.setState({ authUser })
//     //         : this.setState({ authUser: null });
//     //     },
//     //   );
//     // }

//     // componentWillUnmount() {
//     //   this.listener();
//     // }
//       // return (
//       //   <AuthUserContext.Provider value={authUser}>
//       //     <Component {...props} />
//       //   </AuthUserContext.Provider>
//       // );

//   // return withFirebase(WithAuthentication);
};

export default WithAuthentication;
