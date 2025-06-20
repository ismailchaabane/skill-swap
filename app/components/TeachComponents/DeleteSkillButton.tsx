// components/DeleteSkillButton.tsx
"use client";

import { useRouter } from "next/navigation";
import React, { use, useState } from "react";

interface DeleteSkillButtonProps {
  skillId: number;
  onDelete: () => void; // Callback for after successful deletion
}
const DeleteSkillButton: React.FC<DeleteSkillButtonProps> = ({ 
  skillId, 
  onDelete 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);
    const router =useRouter();

    try {
      const response = await fetch(`/api/user_skills/${skillId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Close modal and trigger callback
        setIsModalOpen(false);
        onDelete();
        router.refresh()
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to delete skill");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Error deleting skill:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-text/60 hover:text-red-500 p-2 rounded-xl hover:bg-red-500/10 transition"
        aria-label="Delete skill"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#1F2937]">
                Confirm Skill Deletion
              </h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setError(null);
                }}
                className="text-[#1F2937] hover:text-gray-500 text-2xl"
                disabled={isDeleting}
              >
                &times;
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-600">
                Are you sure you want to delete this skill? This action cannot be
                undone.
              </p>
              {error && (
                <p className="mt-3 text-red-500 bg-red-50 p-2 rounded-lg text-sm">
                  {error}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setError(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-[#1F2937] hover:bg-gray-100 transition-colors"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Deleting...
                  </>
                ) : (
                  "Delete Skill"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteSkillButton;