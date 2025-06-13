import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import ProfileContent from "./ProfileContent";

export default async function ProfilePage() {
  // Authenticate user, redirect to login if not authenticated
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const user = session.user;

  // Fallback profile image if user image not available
  const profileImage = user?.image ?? "/default-avatar.png";

  return (
    <>
      {/* SEO */}
      <Head>
        <title>{user?.name ? `${user.name}'s Profile` : "Profile"}</title>
        <meta name="description" content="User profile page for SkillSwap" />
      </Head>

      {/* Main layout */}
      <div className="font-georama min-h-screen bg-gray-100">
        {/* Cover Photo Section */}
        <div className="relative h-60 bg-yellow-200 border-b-4 border-black">
          <Image
            src="/cover.jpg"
            alt="Cover"
            fill
            className="object-cover rounded-b-md"
            priority
          />

          {/* Profile Picture Container */}
          <div
            className="absolute left-60 -bottom-20 border-4 border-black rounded-full bg-white overflow-hidden"
            style={{ width: "200px", height: "200px" }}
          >
            <Image
              src={profileImage}
              alt="Profile"
              fill // use fill mode to cover the container completely
              style={{ objectFit: "cover" }} // ensure it scales to fill and crop if needed
              className="rounded-full" // this is optional here, container already rounded-full
            />
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto pt-28 px-6 sm:pt-24">
          <ProfileContent
            user={{
              name: user?.name ?? undefined,
              email: user?.email ?? undefined,
            }}
          />
        </main>
      </div>
    </>
  );
}
