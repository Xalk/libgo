"use client";

import { Avatar, Dropdown } from "flowbite-react";
import { useRouter } from "next/router";
import { useSignOut } from "@/features/auth";

export function Profile() {
  const router = useRouter();

  const { signOut } = useSignOut();

  const menuItems = [
    { label: "Profile", path: "/profile" },
    { label: "Workroom", path: "/workroom" }
    // Add more menu items as needed
  ];

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  const handleSignOut = () => {
    signOut()
    localStorage.removeItem("token")
  };


  return (
    <Dropdown
      label={<Avatar alt="User settings" img="/images/avatar.jpg" rounded />}
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
      </Dropdown.Header>
      {menuItems.map((item, index) => (
        <Dropdown.Item key={index} onClick={() => handleItemClick(item.path)}>
          {item.label}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
