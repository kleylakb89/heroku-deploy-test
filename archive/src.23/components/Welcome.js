import React, { useState } from 'react';
import Nav from './Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);
  const [page, setPage] = useState('home');

  let CurrentPage;

  if (page === 'home') CurrentPage = Home;
  if (page === 'about') CurrentPage = About;
  if (page === 'contact') CurrentPage = Contact;
  if (page === 'resume') CurrentPage = Resume;

  // If we are loggedIn render one set of elements, and if not we render another

return (
  <>
    <Nav setPage={setPage} />
    <CurrentPage />
  </>
)

  // if (page === 'home') {
  //   return (
  //     <>
  //       <Nav setPage={setPage} onClick={() => setPage('home')}/>
  //       <h1>Home</h1>
  //     </>
  //   )
  // }
  // if (page === 'about') {
  //   return (
  //     <>
  //       <Nav setPage={setPage} onClick={() => setPage('about')}/>
  //       <h1>About</h1>
  //     </>
  //   )
  // }
  // if (page === 'contact') {
  //   return (
  //     <>
  //       <Nav setPage={setPage} onClick={() => setPage('contact')}/>
  //       <h1>Contact</h1>
  //     </>
  //   )
  // }
  // if (page === 'resume') {
  //   return (
  //     <>
  //       <Nav setPage={setPage} onClick={() => setPage('resume')}/>
  //       <h1>Resume</h1>
  //     </>
  //   )
  // }


  // return (
  //   <div>
  //     {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
  //     {loggedIn ? (
  //       <div>
  //         <span role="img" aria-label="tada">
  //           🎉
  //         </span>
  //         <h3>You are signed in!</h3>
  //         <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
  //           Log out
  //         </button>
  //       </div>
  //     ) : (
  //       // If we are logged out, render this:
  //       <div>
  //         <span role="img" aria-label="stopsign">
  //           🛑
  //         </span>
  //         <h3>You are currently logged out</h3>
  //         <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
  //           Log in
  //         </button>
  //       </div>
  //     )}
  //   </div>
  // );
}
