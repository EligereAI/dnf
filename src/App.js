import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DtcList from "./components/DtcList";
import PWADialog from "./components/PWADialog";
import HandleReturn from "./components/HandleReturn";

const App = () => {
  const [isPWAInstallable, setIsPWAInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setIsPWAInstallable(true);
      setTimeout(() => setIsOpen(true), 2000);
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleAddToHomeScreen = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setIsPWAInstallable(false);
      setDeferredPrompt(null);
      setIsOpen(false);
    }
  };

  return (
    <>
      {isPWAInstallable && (
        <PWADialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onInstall={handleAddToHomeScreen}
        />
      )}
      <Routes>
        <Route path="/" element={<DtcList />} />
        {/* <Route path="/troubleshoot/:id" element={<Troubleshoot />} /> */}
        <Route path="/return" element={<HandleReturn />} />
      </Routes>
</>)}

export default App