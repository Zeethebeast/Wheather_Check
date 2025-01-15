// import type { PropsWithChildren } from "react";
// import Header from "./header";

// const layout = ({ children }: PropsWithChildren) => {
//   return (
//     <div className="bg-gradient-to-br from-background to-muted">
//       <Header />
//       <main className="min-h-screen container mx-auto px-4 py-8">
//         {children}
//       </main>
//       <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
//         <div className="container mx-auto px-4 text-center text-gray-400">
//           <p>Made with love bY zEE</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default layout;

import type { PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted dark:bg-black dark:text-white">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60 dark:bg-black-900 dark:text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <p>Made with love by zEE</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
