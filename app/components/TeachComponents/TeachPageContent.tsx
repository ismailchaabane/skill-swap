"use client";
import React from "react";
import AddNewSkillButton from "./AddNewSkillButton";
import DeleteSkillButton from "./DeleteSkillButton";

export const TeachPageContent = ({
  user_skills,
  user_sessions,
}: {
  user_skills: any[];
  user_sessions: any[];
}) => {
  // Mock data for demonstration
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
  };

  const skills = user_skills.map((skill, index) => ({
    id: skill.id || index + 1,
    name: skill.name,
    description: skill.description,
    level: skill.level,
    category: skill.category,
    sessionsCount: user_sessions.filter(
      (session) => session.skills.name === skill.name
    ).length,
  }));

  const learners = user_sessions
    .filter((session) => session.users_sessions_learner_idTousers)
    .map((session) => ({
      name: session.users_sessions_learner_idTousers.name,
      avatar: session.users_sessions_learner_idTousers.profile_picture,
    }));

  const sessions = user_sessions.map((session, index) => ({
    id: index + 1,
    learner: learners[index] || { name: "Unknown Learner", avatar: "👤" },
    skill: { name: user_sessions[index].skills.name },
    session_datetime: session.session_datetime,
    location: session.location,
    status: session.status,
    duration: session.duration,
    price: session.price,
  }));
console.log("skills:", skills);
  return (
    <div className="min-h-screen ">
      {/* Hero Section with Gradient */}
      <section className="py-35 px-4 md:px-8 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Share Your Knowledge,{" "}
              <span className="text-primary">Earn Rewards</span>
            </h1>
            <p className="text-xl text-text/80 mb-10">
              Teach what you love, connect with eager learners, and build your
              teaching portfolio
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AddNewSkillButton />

              <button className="border-2 border-primary bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 transition flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
                View Earnings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F59E0B] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text">
                  Total Skills
                </h3>
              </div>
              <p className="text-4xl font-bold text-primary">{skills.length}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F59E0B] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-accent/10 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text">
                  Upcoming Sessions
                </h3>
              </div>
              <p className="text-4xl font-bold text-accent">
                {sessions.filter((s) => s.status === "accepted").length}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F59E0B] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-secondary/10 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text">
                  Students Taught
                </h3>
              </div>
              <p className="text-4xl font-bold text-secondary">
                {[...new Set(sessions.map((s) => s.learner.name))].length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Skills Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-text">
                Your Teaching Skills
              </h2>
              <p className="text-text/70 mt-2">
                Skills you're currently offering to learners
              </p>
            </div>
            <AddNewSkillButton />
          </div>

          {/* Skills List */}
          {skills.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-accent/30 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text">
                No teaching skills yet
              </h3>
              <p className="text-text/60 mt-3 max-w-md mx-auto">
                Start sharing your knowledge by adding your first skill.
                Learners are waiting to learn from you!
              </p>
              <button className="mt-8 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-medium">
                Add Your First Skill
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#F59E0B] hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary mb-2">
                          {skill.category}
                        </span>
                        <h3 className="text-xl font-bold text-text">
                          {skill.name}
                        </h3>
                      </div>
                      <div className="bg-accent/10 p-2 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-text/80 mb-6">{skill.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                        Level:{" "}
                        {skill.level.charAt(0).toUpperCase() +
                          skill.level.slice(1)}
                      </span>
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
                        {skill.sessionsCount} sessions
                      </span>
                    </div>
                  </div>

                  <div className="bg-background px-6 py-4 border-t border-[#F59E0B] flex justify-between items-center">
                    <div className="flex gap-2">
                      <button className="text-text/60 hover:text-primary p-2 rounded-xl hover:bg-primary/10 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                      <DeleteSkillButton
                        skillId={skill.id}
                        onDelete={() => {                        
                        }}
                      />
                    </div>
                    <button className="text-primary font-medium hover:text-primary/80 flex items-center">
                      View details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Teaching Sessions Section */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-br from-white to-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text">
                Teaching Sessions
              </h2>
              <p className="text-text/70 mt-2">
                Your upcoming and requested sessions
              </p>
            </div>
            <div className="flex border border-accent/20 rounded-xl overflow-hidden">
              <button className="px-5 py-3 font-medium bg-primary text-white">
                Upcoming
              </button>
              <button className="px-5 py-3 font-medium text-text/60 hover:bg-background">
                Completed
              </button>
              <button className="px-5 py-3 font-medium text-text/60 hover:bg-background">
                Requests
              </button>
            </div>
          </div>

          {sessions.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-accent/30 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text">
                No upcoming sessions
              </h3>
              <p className="text-text/60 mt-3 max-w-md mx-auto">
                Learners will appear here once they book your skills. Promote
                your skills to get more sessions!
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#F59E0B]">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-background">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-text/60 uppercase tracking-wider"
                      >
                        Learner
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-text/60 uppercase tracking-wider"
                      >
                        Skill
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-text/60 uppercase tracking-wider"
                      >
                        Date & Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-text/60 uppercase tracking-wider"
                      >
                        Details
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-text/60 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-right text-sm font-medium text-text/60 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent/10">
                    {sessions.map((session) => (
                      <tr
                        key={session.id}
                        className="hover:bg-background/50 transition"
                      >
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center font-medium text-accent">
                              <img
                                src={session.learner.avatar || "👤"}
                                alt="👤"
                                className="w-12 h-12 rounded-full object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-base font-medium text-text">
                                {session.learner.name}
                              </div>
                              <div className="text-sm text-text/60">
                                {session.location}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-base text-text">
                            {session.skill.name}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-base text-text font-medium">
                            {new Date(
                              session.session_datetime
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="text-sm text-text/60">
                            {new Date(
                              session.session_datetime
                            ).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm font-medium text-primary">
                            {session.price} TND{" "}
                          </div>
                          <div className="text-sm text-text">
                            {session.duration} min
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span
                            className={`px-3 py-1.5 inline-flex text-sm leading-5 font-semibold rounded-full ${
                              session.status === "accepted"
                                ? "bg-green-100 text-green-800"
                                : session.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {session.status.charAt(0).toUpperCase() +
                              session.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button className="text-text/60 hover:text-primary p-2 rounded-xl hover:bg-primary/10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                            {session.status === "pending" && (
                              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium text-sm flex items-center">
                                Accept
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
            Ready to share your expertise?
          </h2>
          <p className="text-xl text-text/80 mb-10 max-w-2xl mx-auto">
            Join thousands of teachers earning money while making an impact. Add
            your first skill today!
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-primary/30">
            Get Started Teaching
          </button>
        </div>
      </section>
    </div>
  );
};
