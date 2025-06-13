"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

type SidebarItem = {
  key: string;
  label: string;
};

const sidebarItems: SidebarItem[] = [
  { key: "overview", label: "Dashboard" },
  { key: "skills", label: "My Skills" },
  { key: "messages", label: "My Messages" },
  { key: "settings", label: "Edit Profile" },
  { key: "activity", label: "Activity Log" },
  { key: "notifications", label: "Notifications" },
  { key: "security", label: "Security Settings" },
];

type ProfileContentProps = {
  user: { name?: string; email?: string };
};

export default function ProfileContent({ user }: ProfileContentProps) {
  const [selectedSection, setSelectedSection] = useState("overview");

  const SectionWrapper = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold border-b pb-2">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <Sidebar
        items={sidebarItems}
        active={selectedSection}
        onChange={setSelectedSection}
      />

      <section
        role="tabpanel"
        aria-labelledby={`tab-${selectedSection}`}
        className="flex-1 bg-white text-black border-4 border-black shadow-[4px_4px_0_0_#000] rounded-lg p-6 min-w-0"
      >
        {selectedSection === "overview" && (
          <SectionWrapper title="Overview">
            <p>
              Welcome, <strong>{user.name || "User"}</strong>!
            </p>
            <p>Email: {user.email || "Not provided"}</p>
            <p className="text-sm text-gray-600">Explore your dashboard and manage your skill swaps.</p>
          </SectionWrapper>
        )}

        {selectedSection === "skills" && (
          <SectionWrapper title="Your Skills">
            <ul className="list-disc pl-6 space-y-1">
              <li>Web Development – React, Next.js, Tailwind</li>
              <li>UI/UX Design – Figma, Framer, Prototyping</li>
              <li>Language Exchange – English ↔ French</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
              Add New Skill
            </button>
          </SectionWrapper>
        )}

        {selectedSection === "messages" && (
          <SectionWrapper title="Messages">
            <div className="p-4 bg-gray-100 rounded">
              <p className="font-medium">📬 No new messages.</p>
              <p className="text-sm text-gray-600">Check back later for updates from skill partners.</p>
            </div>
          </SectionWrapper>
        )}

        {selectedSection === "settings" && (
          <SectionWrapper title="Edit Profile">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input type="text" defaultValue={user.name} className="mt-1 w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" defaultValue={user.email} className="mt-1 w-full border px-3 py-2 rounded" />
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Save Changes
              </button>
            </form>
          </SectionWrapper>
        )}

        {selectedSection === "activity" && (
          <SectionWrapper title="Activity Log">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ Added "JavaScript Coaching" skill – 2 days ago</li>
              <li>✅ Messaged "Anna" for French tutoring – 3 days ago</li>
              <li>✅ Updated profile picture – 1 week ago</li>
            </ul>
          </SectionWrapper>
        )}

        {selectedSection === "notifications" && (
          <SectionWrapper title="Notifications">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between bg-yellow-100 p-3 rounded">
                <span>📢 New feature: Schedule skill sessions!</span>
                <button className="text-xs text-blue-600 hover:underline">Learn more</button>
              </div>
              <div className="text-gray-500">🔕 You have notifications disabled.</div>
            </div>
          </SectionWrapper>
        )}

        {selectedSection === "security" && (
          <SectionWrapper title="Security Settings">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Change Password</label>
                <input type="password" placeholder="New password" className="mt-1 w-full border px-3 py-2 rounded" />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="2fa" className="accent-black" />
                <label htmlFor="2fa" className="text-sm">Enable Two-Factor Authentication</label>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Update Security
              </button>
            </div>
          </SectionWrapper>
        )}
      </section>
    </div>
  );
}
