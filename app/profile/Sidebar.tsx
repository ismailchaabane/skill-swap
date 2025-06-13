"use client";

type SidebarItem = {
  key: string;
  label: string;
};

type Props = {
  items: SidebarItem[];
  active: string;
  onChange: (key: string) => void;
};

export default function Sidebar({ items, active, onChange }: Props) {
  return (
    <aside
      role="tablist"
      aria-label="Profile Sections"
      className="w-64 bg-yellow-100 border-4 border-black shadow-[4px_4px_0_0_#000] rounded-lg p-4 h-fit"
    >
      {items.map((item) => (
        <button
          key={item.key}
          role="tab"
          aria-selected={active === item.key}
          tabIndex={active === item.key ? 0 : -1}
          onClick={() => onChange(item.key)}
          className={`block w-full text-left px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
            active === item.key
              ? "bg-yellow-300 text-black"
              : "hover:bg-yellow-200 text-gray-700"
          }`}
        >
          {item.label}
        </button>
      ))}
    </aside>
  );
}
