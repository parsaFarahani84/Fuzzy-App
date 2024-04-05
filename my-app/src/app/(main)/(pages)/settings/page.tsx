import ProfileForm from "@/components/forms/profile-form";
import React from "react";

type Props = {};

function Settings({}: Props) {
  // WIP: profile picture
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-cnter justify-between border-b bg-background/50 p-6 text-4xl border-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <h1 className="text-2xl font-bold">User Profile</h1>
        <p className="text-abse text-white/50 mt-[-2.5rem]">
          {" "}
          Add or update your information
        </p>
      </div>
      <ProfileForm />
    </div>
  );
}

export default Settings;
