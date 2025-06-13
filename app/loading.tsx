// app/loading.tsx

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF7ED]">
      <h1 className="text-5xl font-extrabold uppercase bg-gradient-to-r from-orange-400 via-white to-orange-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
        SkillSwap
      </h1>
    </div>
  );
}
