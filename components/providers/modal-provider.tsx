"use client";

import { useEffect, useState } from "react";
import SettingModal from "../modals/SettingModal";
import CoverImageModal from "../modals/CoverImageModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingModal />
      <CoverImageModal />
    </>
  );
};

export default ModalProvider;
