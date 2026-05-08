"use client";

import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import React from "react";
import { Avatar } from "@heroui/react";
import UpdetaProfile from "@/components/UpdetaProfile";

const ProfilePage = () => {
   const { data: session, isPending } = authClient.useSession();
 
   const user = session?.user;
  console.log(user);
  return (
    <div className="my-15">
      <Card className="max-w-96 mx-auto flex flex-col items-center">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="logo"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
         <Avatar.Fallback>
  {user?.name?.charAt(0)}
</Avatar.Fallback>
        </Avatar>
        <p className="text-xl font-bole">{user?.name}</p>
        <p  className="text-xl font-bole">{user?.email}</p>
       < UpdetaProfile/>
      </Card>
    </div>
  );
};

export default ProfilePage;
