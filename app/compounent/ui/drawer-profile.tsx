"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import MenuIcon from "./Menu-icon";
import ProfileAvator from "./Avator";
import SignupComponent from "./signup";
import { useProfile } from "./profile-context";

import HthLinkHead from "./hth-link";
import HthLinkBody from "./hth-link-body";
import HthLinkBody2 from "./hth-link-body2";

export default function ProfileDrawerRight() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const { username, setUsername, setProfilePicture } = useProfile();

  // Check if user is already signed up on component mount
  useEffect(() => {
    if (username) {
      setIsSignedUp(true);
    }
  }, [username]);

  const handleOpen = () => {
    onOpen();
  };

  const handleSignup = (newUsername: string) => {
    setUsername(newUsername);
    setIsSignedUp(true);
  };

  const handleLogout = () => {
    setIsSignedUp(false);
    setUsername("");
    setProfilePicture(null);
  };

  return (
    <>
      <Button
        onPress={handleOpen}
        className="bg-transparent w-full border-none p-0"
      >
        <MenuIcon />
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onOpenChange}
        size="full"
        classNames={{
          wrapper: "justify-end",
          base: "m-0 h-screen w-full max-w-full sm:max-w-sm md:max-w-md rounded-none theme-bg-secondary",
          header: "px-4 py-3 sm:px-6 sm:py-4 theme-bg-secondary",
          body: "px-4 sm:px-6 theme-bg-secondary flex-1 overflow-y-auto",
          footer: "px-4 py-3 sm:px-6 sm:py-4 theme-bg-secondary flex-shrink-0",
        }}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.25, ease: "easeOut" },
            },
            exit: {
              x: 20,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            },
          },
        }}
      >
        <ModalContent className="">
          {(onClose: () => void) => (
            <>
              {!isSignedUp ? (
                // Show signup form for new users
                <ModalBody className="p-0">
                  <SignupComponent onSignup={handleSignup} />
                </ModalBody>
              ) : (
                // Show profile for signed up users
                <>
                  <ModalHeader className="flex flex-col text-red-600 mt-16">
                    <ProfileAvator username={username} />
                    <HthLinkHead username={username} />
                  </ModalHeader>
                  <ModalBody className="flex-1 overflow-y-auto">
                    <div className="w-full h-px theme-border bg-current"></div>
                    <HthLinkBody />
                    <div className="w-full h-px theme-border bg-current"></div>
                    <HthLinkBody2 />
                  </ModalBody>
                  <ModalFooter className="flex items-center pb-6 px-4 min-h-[80px] sticky bottom-0 theme-bg-secondary border-t theme-border">
                    <Button
                      onClick={handleLogout}
                      className="theme-bg-tertiary hover:opacity-80 theme-text-primary font-semibold max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base"
                      size="md"
                    >
                      Sign in with account
                    </Button>
                    <Button
                      onClick={handleLogout}
                      className="theme-bg-tertiary hover:opacity-80 theme-text-primary font-semibold max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base"
                      size="md"
                    >
                      Log Out
                    </Button>
                  </ModalFooter>
                </>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
