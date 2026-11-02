import React from 'react';
import {
  CheckSquare,
  Sparkles,
  MessageSquare,
  Clock,
  ArrowUpRight,
  TrendingUp,
  FolderGit2,
  Paperclip,
  Check,
  ChevronRight,
  Zap,
  Layers,
  BarChart3,
  Sliders,
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-[30px] sm:text-[36px] font-[750] text-[#17152C] tracking-tight leading-[1.15]">
            Unlock Premium Benefits With Our Advanced Features.
          </h2>
          <p className="mt-3 text-[14px] text-[#737487] leading-relaxed">
            Unlock premium benefits with advanced features designed to scale.
          </p>
        </div>

        {/* Asymmetric 5-Card Grid: Top 3 Cards, Bottom 2 Wider Cards */}
        <div className="space-y-6">
          {/* Top Row: 3 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Smart Task Organization */}
            <div className="bg-[#F5F6F9] rounded-[18px] p-6 border border-[#E5E7EF] flex flex-col justify-between hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200">
              <div className="mb-6">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E7EF] flex items-center justify-center text-[#6046E9] shadow-sm mb-4">
                  <CheckSquare size={18} />
                </div>
                <h3 className="font-bold text-[17px] text-[#17152C] leading-snug">
                  Smart Task Organization
                </h3>
                <p className="mt-2 text-[13px] text-[#737487] leading-relaxed">
                  Create, categorize, and prioritize tasks with ease using flexible task boards and timelines.
                </p>
              </div>

              {/* Embedded Miniature Task Interface */}
              <div className="bg-white rounded-[14px] p-4 border border-[#E5E7EF] shadow-card-subtle space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#17152C] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#6046E9]" />
                    Sprint Backlog
                  </span>
                  <span className="text-[10px] bg-[#E9E7FF] text-[#6046E9] font-bold px-2 py-0.5 rounded-full">
                    24 Active
                  </span>
                </div>

                {/* Task Item 1 */}
                <div className="bg-[#FAFBFD] p-2.5 rounded-lg border border-[#E5E7EF]/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border-2 border-[#6046E9] flex items-center justify-center bg-[#6046E9]">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-[11.5px] font-medium text-[#17152C]">
                      API Rate Limiting
                    </span>
                  </div>
                  <span className="text-[9.5px] bg-emerald-50 text-emerald-700 font-semibold px-1.5 py-0.5 rounded">
                    High
                  </span>
                </div>

                {/* Task Item 2 with Progress */}
                <div className="bg-[#FAFBFD] p-2.5 rounded-lg border border-[#E5E7EF]/80 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-medium text-[#17152C]">Design Tokens</span>
                    <span className="text-[10px] font-semibold text-[#6046E9]">78%</span>
                  </div>
                  <div className="w-full bg-[#EFF1F5] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#6046E9] h-full w-[78%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Automated Workflows */}
            <div className="bg-[#F5F6F9] rounded-[18px] p-6 border border-[#E5E7EF] flex flex-col justify-between hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200">
              <div className="mb-6">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E7EF] flex items-center justify-center text-[#6046E9] shadow-sm mb-4">
                  <Zap size={18} />
                </div>
                <h3 className="font-bold text-[17px] text-[#17152C] leading-snug">
                  Automated Workflows
                </h3>
                <p className="mt-2 text-[13px] text-[#737487] leading-relaxed">
                  Streamline your workflow with automation for tasks, updates, and reminders.
                </p>
              </div>

              {/* Embedded Embedded Assignment Interface */}
              <div className="bg-white rounded-[14px] p-4 border border-[#E5E7EF] shadow-card-subtle space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#17152C] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Auto-Assignment
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Active Rule
                  </span>
                </div>

                <div className="bg-[#FAFBFD] p-3 rounded-lg border border-[#E5E7EF]/80 space-y-2">
                  <div className="text-[10px] text-[#737487] uppercase tracking-wider font-semibold">
                    Trigger Condition
                  </div>
                  <div className="text-[11.5px] font-semibold text-[#17152C]">
                    When status = "In Review"
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-[#EFF1F5]">
                    <div className="flex items-center gap-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt="Elena"
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-[11px] text-[#737487]">Assign to Tech Lead</span>
                    </div>
                    <button className="bg-[#6046E9] hover:bg-[#7561ED] text-white text-[10px] font-semibold px-2.5 py-1 rounded-md transition-colors">
                      Run Rule
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: File & Comment Management */}
            <div className="bg-[#F5F6F9] rounded-[18px] p-6 border border-[#E5E7EF] flex flex-col justify-between hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200">
              <div className="mb-6">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E7EF] flex items-center justify-center text-[#6046E9] shadow-sm mb-4">
                  <MessageSquare size={18} />
                </div>
                <h3 className="font-bold text-[17px] text-[#17152C] leading-snug">
                  File & Comment Management
                </h3>
                <p className="mt-2 text-[13px] text-[#737487] leading-relaxed">
                  Consolidate everything with task comments, file attachments, and feedback threads.
                </p>
              </div>

              {/* Embedded Miniature Messaging Interface */}
              <div className="bg-white rounded-[14px] p-4 border border-[#E5E7EF] shadow-card-subtle space-y-2.5">
                <div className="flex items-center justify-between pb-1 border-b border-[#F5F6F9]">
                  <span className="text-[11px] font-bold text-[#17152C]">
                    New Messages
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#6046E9]" />
                </div>

                {/* Message 1 */}
                <div className="flex items-start gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Marcus"
                    className="w-6 h-6 rounded-full object-cover shrink-0 mt-0.5"
                  />
                  <div className="flex-1 bg-[#FAFBFD] p-2 rounded-lg border border-[#E5E7EF]/70">
                    <div className="flex items-center justify-between text-[10px] mb-0.5">
                      <span className="font-bold text-[#17152C]">Marcus Cole</span>
                      <span className="text-[#A0A2B1]">2m ago</span>
                    </div>
                    <p className="text-[11px] text-[#737487] leading-snug">
                      Uploaded the revised prototype v2.4 📎
                    </p>
                  </div>
                </div>

                {/* Message 2 */}
                <div className="flex items-start gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="Sarah"
                    className="w-6 h-6 rounded-full object-cover shrink-0 mt-0.5"
                  />
                  <div className="flex-1 bg-[#FAFBFD] p-2 rounded-lg border border-[#E5E7EF]/70">
                    <div className="flex items-center justify-between text-[10px] mb-0.5">
                      <span className="font-bold text-[#17152C]">Sarah Jenkins</span>
                      <span className="text-[#A0A2B1]">14m ago</span>
                    </div>
                    <p className="text-[11px] text-[#737487] leading-snug">
                      Approved by design team. Ready to deploy!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Wider Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 4: Real-Time Progress Tracking */}
            <div className="bg-[#F5F6F9] rounded-[18px] p-6 lg:p-7 border border-[#E5E7EF] flex flex-col justify-between hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200">
              <div className="mb-5">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E7EF] flex items-center justify-center text-[#6046E9] shadow-sm mb-4">
                  <TrendingUp size={18} />
                </div>
                <h3 className="font-bold text-[17px] text-[#17152C] leading-snug">
                  Real-Time Progress Tracking
                </h3>
                <p className="mt-2 text-[13px] text-[#737487] leading-relaxed">
                  Track deadlines, milestones, and performance with live status updates and visual indicators.
                </p>
              </div>

              {/* Embedded Project Overview Interface: Project names, Team avatars, Project status, Progress indicators */}
              <div className="bg-white rounded-[14px] p-4 border border-[#E5E7EF] shadow-card-subtle space-y-3">
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#F5F6F9]">
                  <span className="font-bold text-[#17152C]">Project Status</span>
                  <span className="text-[#6046E9] font-semibold text-[10.5px]">Live Sync</span>
                </div>

                {/* Project 1 */}
                <div className="bg-[#FAFBFD] p-2.5 rounded-lg border border-[#E5E7EF]/80 space-y-2">
                  <div className="flex items-center justify-between text-[11.5px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#6046E9]" />
                      <span className="font-bold text-[#17152C]">Core Design System</span>
                    </div>
                    <span className="text-[9.5px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      On Track
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10.5px] text-[#737487]">
                    <div className="flex items-center -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80"
                        alt="Elena"
                        className="w-4 h-4 rounded-full border border-white"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80"
                        alt="Marcus"
                        className="w-4 h-4 rounded-full border border-white"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-[#EFF1F5] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#6046E9] h-full w-[88%]" />
                      </div>
                      <span className="font-bold text-[#17152C]">88%</span>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="bg-[#FAFBFD] p-2.5 rounded-lg border border-[#E5E7EF]/80 space-y-2">
                  <div className="flex items-center justify-between text-[11.5px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="font-bold text-[#17152C]">API Integration Hub</span>
                    </div>
                    <span className="text-[9.5px] font-semibold text-[#6046E9] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                      In Review
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10.5px] text-[#737487]">
                    <div className="flex items-center -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80"
                        alt="Sarah"
                        className="w-4 h-4 rounded-full border border-white"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80"
                        alt="David"
                        className="w-4 h-4 rounded-full border border-white"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-[#EFF1F5] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full w-[65%]" />
                      </div>
                      <span className="font-bold text-[#17152C]">65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Project Overview */}
            <div className="bg-[#F5F6F9] rounded-[18px] p-6 lg:p-7 border border-[#E5E7EF] flex flex-col justify-between hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200">
              <div className="mb-5">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E7EF] flex items-center justify-center text-[#6046E9] shadow-sm mb-4">
                  <BarChart3 size={18} />
                </div>
                <h3 className="font-bold text-[17px] text-[#17152C] leading-snug">
                  Project Overview
                </h3>
                <p className="mt-2 text-[13px] text-[#737487] leading-relaxed">
                  Complete visibility over project timelines, team member workloads, and delivery velocity.
                </p>
              </div>

              {/* Embedded Project List & Members */}
              <div className="bg-white rounded-[14px] p-4 border border-[#E5E7EF] shadow-card-subtle space-y-2.5">
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#F5F6F9]">
                  <span className="font-bold text-[#17152C]">Project List</span>
                  <span className="text-[10px] text-[#737487] bg-[#FAFBFD] border border-[#E5E7EF] px-2 py-0.5 rounded">
                    4 Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-[#FAFBFD] border border-[#E5E7EF]/80">
                    <div className="text-[14px] font-bold text-[#17152C]">38</div>
                    <div className="text-[9.5px] text-[#737487]">Tasks Done</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAFBFD] border border-[#E5E7EF]/80">
                    <div className="text-[14px] font-bold text-[#6046E9]">99.4%</div>
                    <div className="text-[9.5px] text-[#737487]">On Time</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAFBFD] border border-[#E5E7EF]/80">
                    <div className="text-[14px] font-bold text-emerald-600">12 hrs</div>
                    <div className="text-[9.5px] text-[#737487]">Saved</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-[#737487]">
                  <div className="flex items-center -space-x-1.5">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                      alt="Team"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                      alt="Team"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                      alt="Team"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <div className="w-5 h-5 rounded-full bg-[#E9E7FF] text-[#6046E9] border border-white flex items-center justify-center text-[9px] font-bold">
                      +8
                    </div>
                  </div>
                  <span className="text-[10.5px] font-medium text-[#17152C] flex items-center gap-1">
                    View Team Pulse <ChevronRight size={12} className="text-[#6046E9]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
