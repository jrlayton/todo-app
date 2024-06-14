import React from "react";

function ThemedBanner({ className }) {
  return (
    <>
      <div
        className={`dark:hidden bg-sm-banner-light sm:bg-lg-banner-light bg-cover bg-no-repeat absolute h-[300px] w-[100vw] ${className}`}
      />
      <div
        className={`hidden dark:block bg-sm-banner-dark sm:bg-lg-banner-dark bg-cover bg-no-repeat absolute h-[300px] w-[100vw] ${className}`}
      />
    </>
  );
}

export default ThemedBanner;
