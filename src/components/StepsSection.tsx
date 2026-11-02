import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Lock,
  Layers,
  LayoutGrid,
  CheckCircle2,
  Calendar,
  Clock,
  Plus,
} from 'lucide-react';

export const StepsSection: React.FC = () => {
  const [workspaceName, setWorkspaceName] = useState('Acme Product Design');
  const [teamSize, setTeamSize] = useState('11-50');

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC]/70 border-t border-[#E5E7EF]">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-[30px] sm:text-[36px] font-[750] text-[#17152C] tracking-tight leading-[1.15]">
            Get Started In Just 3 Easy Steps
          </h2>
          <p className="mt-3 text-[14px] text-[#737487] leading-relaxed">
            Get started in just 3 easy steps with a guided onboarding experience designed for speed and simplicity.
          </p>
        </div>

        {/* Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: Large Vivid Lavender-Purple Product Preview (5 or 6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#6650EA] via-[#7461ED] to-[#5941DB] p-4 sm:p-7 rounded-[22px] shadow-xl border border-[#7561ED]/50 relative overflow-hidden">
            {/* Ambient inner soft light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            {/* Embedded White Dashboard Interface */}
            <div className="bg-white rounded-[16px] shadow-2xl border border-white/40 overflow-hidden text-left">
              {/* Mini Top Nav */}
              <div className="bg-[#FAFBFD] px-3.5 py-2.5 border-b border-[#E5E7EF] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#6046E9] flex items-center justify-center text-white text-[10px] font-bold">
                    T
                  </div>
                  <span className="font-bold text-[12px] text-[#17152C]">TaskGo HQ</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#737487] bg-white border border-[#E5E7EF] px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </div>
              </div>

              {/* Mini Content with Sidebar + Board */}
              <div className="flex">
                {/* Left Mini Rail */}
                <div className="w-10 bg-[#FAFBFD] border-r border-[#E5E7EF] py-3 flex flex-col items-center gap-2.5">
                  <div className="w-6 h-6 rounded bg-[#E9E7FF] text-[#6046E9] flex items-center justify-center">
                    <LayoutGrid size={12} />
                  </div>
                  <div className="w-6 h-6 rounded text-[#737487] flex items-center justify-center">
                    <Calendar size={12} />
                  </div>
                  <div className="w-6 h-6 rounded text-[#737487] flex items-center justify-center">
                    <Users size={12} />
                  </div>
                </div>

                {/* Main Task Preview Cards */}
                <div className="flex-1 p-3.5 space-y-2.5 bg-[#FBFBFE]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#17152C]">Active Workstream</span>
                    <span className="text-[9.5px] bg-[#E9E7FF] text-[#6046E9] px-2 py-0.5 rounded-full font-semibold">
                      Sprint 12
                    </span>
                  </div>

                  {/* Task Card 1 */}
                  <div className="bg-white p-2.5 rounded-lg border border-[#E5E7EF] shadow-card-subtle">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-semibold text-[#6046E9] bg-purple-50 px-1.5 py-0.2 rounded">
                        Design
                      </span>
                      <span className="text-[9.5px] text-[#737487] flex items-center gap-0.5">
                        <Clock size={9} /> Oct 24
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-[#17152C]">
                      Revamp Design Tokens
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="w-24 bg-[#EFF1F5] h-1 rounded-full overflow-hidden">
                        <div className="bg-[#6046E9] h-full w-[80%]" />
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                        alt="Elena"
                        className="w-4 h-4 rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Task Card 2 */}
                  <div className="bg-white p-2.5 rounded-lg border border-[#E5E7EF] shadow-card-subtle">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                        Engineering
                      </span>
                      <span className="text-[9.5px] text-emerald-600 font-bold flex items-center gap-0.5">
                        <CheckCircle2 size={10} /> Completed
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-[#17152C]">
                      Team Auth & Permissions
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="w-24 bg-[#EFF1F5] h-1 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-full" />
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                        alt="Marcus"
                        className="w-4 h-4 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Three Vertically Stacked Onboarding Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {/* STEP 01: Expanded Card with Mini Onboarding Interface */}
            <div className="bg-white rounded-[18px] p-5 sm:p-6 border-2 border-[#6046E9]/40 shadow-card-hover transition-all">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#6046E9] text-white flex items-center justify-center font-extrabold text-[13px] shrink-0 shadow-pill-glow">
                  01
                </div>
                <div>
                  <h3 className="font-bold text-[17px] text-[#17152C] leading-snug">
                    Simple And Fast Setup
                  </h3>
                  <p className="mt-1 text-[13px] text-[#737487] leading-relaxed">
                    Start your team journey with an easy-to-follow setup experience.
                  </p>
                </div>
              </div>

              {/* Two-Panel Embedded Setup Interface: Welcome Back + Workspace Setup */}
              <div className="bg-[#FAFBFD] rounded-[14px] p-3.5 sm:p-4 border border-[#E5E7EF] space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Panel 1: Welcome Back */}
                  <div className="bg-white p-3 rounded-[10px] border border-[#E5E7EF] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#17152C] mb-2 pb-1.5 border-b border-[#F5F6F9]">
                        <span>Welcome Back</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                          alt="Alex"
                          className="w-8 h-8 rounded-full object-cover ring-1 ring-[#6046E9]"
                        />
                        <div>
                          <div className="text-[11.5px] font-bold text-[#17152C]">Alex Rivera</div>
                          <div className="text-[10px] text-[#737487]">alex@innovate.co</div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-[#F5F6F9] flex items-center justify-between">
                      <span className="text-[9.5px] bg-[#E9E7FF] text-[#6046E9] font-semibold px-2 py-0.5 rounded-full">
                        Admin Role
                      </span>
                      <button className="text-[10px] text-[#737487] hover:text-[#6046E9] font-medium">
                        Switch
                      </button>
                    </div>
                  </div>

                  {/* Panel 2: Workspace Setup */}
                  <div className="bg-white p-3 rounded-[10px] border border-[#E5E7EF] flex flex-col justify-between space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#17152C] pb-1.5 border-b border-[#F5F6F9]">
                      <span className="flex items-center gap-1.5">
                        <Building2 size={12} className="text-[#6046E9]" />
                        Workspace Setup
                      </span>
                      <span className="text-[9.5px] text-[#6046E9] font-semibold">Step 1/2</span>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-[#17152C] mb-1">
                        Workspace Name
                      </label>
                      <input
                        type="text"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        className="w-full bg-[#FAFBFD] border border-[#E5E7EF] rounded px-2 py-1 text-[11px] text-[#17152C] focus:outline-none focus:border-[#6046E9]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-[#17152C] mb-1">
                        Team Size
                      </label>
                      <select
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full bg-[#FAFBFD] border border-[#E5E7EF] rounded px-2 py-1 text-[11px] text-[#17152C] focus:outline-none focus:border-[#6046E9]"
                      >
                        <option>1-10 members</option>
                        <option>11-50 members</option>
                        <option>51-200 members</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bottom Action inside Setup */}
                <div className="flex items-center justify-between pt-1 text-[10.5px]">
                  <span className="text-[#737487] text-[10px]">
                    Includes unlimited team members for 14 days.
                  </span>
                  <button className="bg-[#6046E9] hover:bg-[#7561ED] text-white text-[10.5px] font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 transition-colors">
                    <span>Continue</span>
                    <ArrowRight size={10} />
                  </button>
                </div>
              </div>
            </div>

            {/* STEP 02: Compact Card */}
            <div className="bg-white rounded-[16px] p-5 border border-[#E5E7EF] shadow-card-subtle hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#E9E7FF] text-[#6046E9] flex items-center justify-center font-extrabold text-[13px] shrink-0">
                  02
                </div>
                <div>
                  <h3 className="font-bold text-[16px] text-[#17152C] leading-snug">
                    Work Together Effortlessly
                  </h3>
                  <p className="mt-1 text-[12.5px] text-[#737487] leading-relaxed">
                    Bring your team together and collaborate seamlessly on shared tasks.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 03: Compact Card */}
            <div className="bg-white rounded-[16px] p-5 border border-[#E5E7EF] shadow-card-subtle hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#E9E7FF] text-[#6046E9] flex items-center justify-center font-extrabold text-[13px] shrink-0">
                  03
                </div>
                <div>
                  <h3 className="font-bold text-[16px] text-[#17152C] leading-snug">
                    Monitor Your Progress
                  </h3>
                  <p className="mt-1 text-[12.5px] text-[#737487] leading-relaxed">
                    Track progress, stay organized, and achieve your goals with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
