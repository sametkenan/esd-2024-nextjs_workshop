export default function About() {
    return <h1>About Page</h1>;
  }
  
//   Example for Assignment 1: File-Based Routing

// Step 1: Instruct students to create a file about.tsx in the pages directory.
// Content of about.tsx:
// tsx
// Code kopieren
// export default function About() {
//   return <h1>About Page</h1>;
// }
// Step 2: Create another file contact.tsx in the pages directory.
// Content of contact.tsx:
// tsx
// Code kopieren
// export default function Contact() {
//   return <h1>Contact Page</h1>;
// }
// Step 3: Modify the index.tsx to include links to these pages:
// tsx
// Code kopieren
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
// Task: Students should create these pages and verify the navigation works.