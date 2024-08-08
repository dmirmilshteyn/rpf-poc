import React from "react";

import '@site/css/panda.css';

import TopMenu from '@site/components/TopMenu';

export default function Layout({children}) {
  return (
    <main>
      <TopMenu />
      {children}
    </main>
  );
}
