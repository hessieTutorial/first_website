import React from 'react';
import {
  Search,
  SlidersHorizontal,
  Plus,
  MoreHorizontal,
  Clock,
  MessageSquare,
  Paperclip,
  CheckCircle2,
  Calendar,
  LayoutGrid,
  ListFilter,
  BarChart2,
  Users,
  Settings,
  Bell,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface TaskCardData {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  priority?: 'High' | 'Medium' | 'Low';
  priorityColor?: string;
  progress?: number;
  comments: number;
  attachments?: number;
  dueDate: string;
  assigneeAvatar: string;
  assigneeName: string;
  completed?: boolean;
}

export const HeroDashboard: React.FC = () => {
  const todoTasks: TaskCardData[] = [
    {
      id: 't-1',
      title: 'Design System Tokens & Typography Spec',
      category: 'Design System',
      categoryColor: 'bg-purple-50 text-[#6046E9] border-purple-200',
      priority: 'High',
      priorityColor: 'text-amber-600 bg-amber-50',
      comments: 5,
      attachments: 3,
      dueDate: 'Oct 28',
      assigneeAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'Elena Rostova',
    },
    {
      id: 't-2',
      title: 'User Interview Analysis & Synthesis',
      category: 'Research',
      categoryColor: 'bg-blue-50 text-blue-600 border-blue-200',
      comments: 2,
      dueDate: 'Nov 02',
      assigneeAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'Marcus Cole',
    },
    {
      id: 't-3',
      title: 'Onboarding Flow V2 Prototype',
      category: 'Product UX',
      categoryColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      comments: 7,
      attachments: 4,
      dueDate: 'Nov 04',
      assigneeAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'Sarah Jenkins',
    },
  ];

  const inProgressTasks: TaskCardData[] = [
    {
      id: 't-4',
      title: 'Stripe Billing & Subscription Webhooks',
      category: 'Backend API',
      categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      priority: 'High',
      priorityColor: 'text-rose-600 bg-rose-50',
      progress: 68,
      comments: 11,
      attachments: 2,
      dueDate: 'Tomorrow',
      assigneeAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'David Kalu',
    },
    {
      id: 't-5',
      title: 'Mobile Navigation Polish & Gestures',
      category: 'Frontend',
      categoryColor: 'bg-purple-50 text-[#6046E9] border-purple-200',
      progress: 85,
      comments: 4,
      dueDate: 'Oct 29',
      assigneeAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'Elena Rostova',
    },
    {
      id: 't-6',
      title: 'Analytics Event Tracking Pipeline',
      category: 'Data Platform',
      categoryColor: 'bg-sky-50 text-sky-700 border-sky-200',
      progress: 42,
      comments: 3,
      dueDate: 'Nov 01',
      assigneeAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'Amara Vance',
    },
  ];

  const inReviewTasks: TaskCardData[] = [
    {
      id: 't-7',
      title: 'Auth0 & SSO Enterprise Configuration',
      category: 'Security',
      categoryColor: 'bg-amber-50 text-amber-700 border-amber-200',
      priority: 'High',
      priorityColor: 'text-amber-600 bg-amber-50',
      comments: 6,
      attachments: 5,
      dueDate: 'Today',
      assigneeAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'Liam Chen',
    },
    {
      id: 't-8',
      title: 'Marketing Landing Page Conversion Copy',
      category: 'Growth',
      categoryColor: 'bg-rose-50 text-rose-700 border-rose-200',
      comments: 8,
      dueDate: 'Oct 26',
      assigneeAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'Sarah Jenkins',
    },
  ];

  const completedTasks: TaskCardData[] = [
    {
      id: 't-9',
      title: 'Wireframe Exploration & Stakeholder Signoff',
      category: 'Product UX',
      categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      comments: 12,
      attachments: 6,
      dueDate: 'Oct 19',
      assigneeAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'Elena Rostova',
      completed: true,
    },
    {
      id: 't-10',
      title: 'Database Migration to Postgres Multi-AZ',
      category: 'DevOps',
      categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      comments: 4,
      dueDate: 'Oct 18',
      assigneeAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'David Kalu',
      completed: true,
    },
    {
      id: 't-11',
      title: 'Automated CI/CD GitHub Actions Pipeline',
      category: 'Infrastructure',
      categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      comments: 9,
      attachments: 2,
      dueDate: 'Oct 15',
      assigneeAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      assigneeName: 'Liam Chen',
      completed: true,
    },
  ];

  const renderCard = (task: TaskCardData) => (
    <div
      key={task.id}
      className="bg-white rounded-[12px] p-3.5 border border-[#E5E7EF] shadow-card-subtle hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200 group text-left"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${task.categoryColor}`}>
          {task.category}
        </span>
        {task.priority && (
          <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${task.priorityColor}`}>
            {task.priority}
          </span>
        )}
        {task.completed && (
          <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle2 size={11} /> Done
          </span>
        )}
      </div>

      <h4 className="text-[12.5px] font-semibold text-[#17152C] leading-snug group-hover:text-[#6046E9] transition-colors mb-2.5">
        {task.title}
      </h4>

      {task.progress !== undefined && (
        <div className="mb-2.5">
          <div className="flex items-center justify-between text-[10px] text-[#737487] font-medium mb-1">
            <span>Progress</span>
            <span className="text-[#17152C] font-semibold">{task.progress}%</span>
          </div>
          <div className="w-full bg-[#EFF1F5] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#6046E9] h-full rounded-full transition-all duration-500"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="pt-2 border-t border-[#F5F6F9] flex items-center justify-between text-[11px] text-[#737487]">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1">
            <Clock size={11} className="text-[#737487]" />
            {task.dueDate}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare size={11} className="text-[#737487]" />
            {task.comments}
          </span>
          {task.attachments && (
            <span className="flex items-center gap-1">
              <Paperclip size={11} className="text-[#737487]" />
              {task.attachments}
            </span>
          )}
        </div>
        <img
          src={task.assigneeAvatar}
          alt={task.assigneeName}
          title={task.assigneeName}
          className="w-5 h-5 rounded-full object-cover ring-1 ring-white"
        />
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white rounded-[20px] border border-[#E5E7EF] shadow-dashboard overflow-hidden text-left">
      {/* Top Application Bar */}
      <div className="bg-[#FAFBFD] border-b border-[#E5E7EF] px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Window Dots & Breadcrumbs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11.5px] font-medium text-[#737487] pl-2 border-l border-[#E5E7EF]">
            <div className="w-4 h-4 rounded bg-[#6046E9] flex items-center justify-center text-white text-[9px] font-bold">
              T
            </div>
            <span>TaskGo</span>
            <span className="text-[#A0A2B1]">/</span>
            <span className="text-[#17152C] font-semibold">Q4 Sprint Board</span>
          </div>
        </div>

        {/* Center: Search Field */}
        <div className="relative max-w-xs w-full hidden md:block">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#737487]" />
          <input
            type="text"
            readOnly
            value="Search tasks, sprints, tags..."
            className="w-full bg-white border border-[#E5E7EF] rounded-full pl-8 pr-10 py-1 text-[11px] text-[#737487] cursor-pointer focus:outline-none"
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] bg-[#EFF1F5] text-[#737487] px-1.5 py-0.5 rounded font-mono">
            ⌘K
          </span>
        </div>

        {/* Right: Team Avatars & Action */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center -space-x-1.5">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Elena"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
              alt="Marcus"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="Sarah"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <div className="w-6 h-6 rounded-full bg-[#E9E7FF] text-[#6046E9] border-2 border-white flex items-center justify-center text-[10px] font-bold">
              +4
            </div>
          </div>
          <button className="hidden sm:flex items-center gap-1 bg-[#6046E9] hover:bg-[#7561ED] text-white text-[11px] font-semibold px-3 py-1 rounded-full transition-colors shadow-sm">
            <Plus size={12} />
            <span>New Task</span>
          </button>
        </div>
      </div>

      {/* Main Inner Layout: Sidebar Rail + Board Canvas */}
      <div className="flex">
        {/* Left Mini Sidebar */}
        <div className="w-12 bg-[#FAFBFD] border-r border-[#E5E7EF] py-4 hidden sm:flex flex-col items-center justify-between gap-6 shrink-0">
          <div className="flex flex-col items-center gap-3">
            <button className="w-8 h-8 rounded-lg bg-[#E9E7FF] text-[#6046E9] flex items-center justify-center hover:scale-105 transition-transform" title="Task Board">
              <LayoutGrid size={16} />
            </button>
            <button className="w-8 h-8 rounded-lg text-[#737487] hover:bg-[#EFF1F5] hover:text-[#17152C] flex items-center justify-center transition-colors" title="List View">
              <ListFilter size={16} />
            </button>
            <button className="w-8 h-8 rounded-lg text-[#737487] hover:bg-[#EFF1F5] hover:text-[#17152C] flex items-center justify-center transition-colors" title="Calendar">
              <Calendar size={16} />
            </button>
            <button className="w-8 h-8 rounded-lg text-[#737487] hover:bg-[#EFF1F5] hover:text-[#17152C] flex items-center justify-center transition-colors" title="Analytics">
              <BarChart2 size={16} />
            </button>
            <button className="w-8 h-8 rounded-lg text-[#737487] hover:bg-[#EFF1F5] hover:text-[#17152C] flex items-center justify-center transition-colors" title="Team">
              <Users size={16} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className="w-8 h-8 rounded-lg text-[#737487] hover:bg-[#EFF1F5] hover:text-[#17152C] flex items-center justify-center transition-colors" title="Notifications">
              <Bell size={15} />
            </button>
            <button className="w-8 h-8 rounded-lg text-[#737487] hover:bg-[#EFF1F5] hover:text-[#17152C] flex items-center justify-center transition-colors" title="Settings">
              <Settings size={15} />
            </button>
          </div>
        </div>

        {/* Board Main Area */}
        <div className="flex-1 p-3.5 sm:p-5 overflow-x-auto bg-[#FBFBFE]">
          {/* Board Header & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-[16px] sm:text-[17px] text-[#17152C] flex items-center gap-2">
                Sprint 24 — Product Core
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  On Track
                </span>
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="bg-[#6046E9] text-white font-semibold px-2.5 py-1 rounded-full cursor-pointer">
                All (11)
              </span>
              <span className="bg-white border border-[#E5E7EF] text-[#737487] hover:text-[#17152C] font-medium px-2.5 py-1 rounded-full cursor-pointer hidden md:inline">
                My Tasks (4)
              </span>
              <span className="bg-white border border-[#E5E7EF] text-[#737487] hover:text-[#17152C] font-medium px-2.5 py-1 rounded-full cursor-pointer hidden md:inline">
                High Priority (3)
              </span>
              <button className="flex items-center gap-1 bg-white border border-[#E5E7EF] text-[#737487] px-2 py-1 rounded-full hover:bg-[#F5F6F9]">
                <SlidersHorizontal size={11} />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* 4 Task Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 min-w-[760px] lg:min-w-0">
            {/* Column 1: To Do */}
            <div className="bg-[#F5F6F9]/80 rounded-[14px] p-2.5 border border-[#E5E7EF]/80 flex flex-col">
              <div className="flex items-center justify-between px-1.5 py-1 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#737487]" />
                  <span className="font-bold text-[12px] text-[#17152C]">To Do</span>
                  <span className="bg-white border border-[#E5E7EF] text-[#737487] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    3
                  </span>
                </div>
                <button className="text-[#737487] hover:text-[#17152C]">
                  <Plus size={13} />
                </button>
              </div>
              <div className="space-y-2.5">
                {todoTasks.map(renderCard)}
              </div>
            </div>

            {/* Column 2: In Progress */}
            <div className="bg-[#F5F6F9]/80 rounded-[14px] p-2.5 border border-[#E5E7EF]/80 flex flex-col">
              <div className="flex items-center justify-between px-1.5 py-1 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6046E9]" />
                  <span className="font-bold text-[12px] text-[#17152C]">In Progress</span>
                  <span className="bg-[#E9E7FF] text-[#6046E9] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    3
                  </span>
                </div>
                <button className="text-[#737487] hover:text-[#17152C]">
                  <Plus size={13} />
                </button>
              </div>
              <div className="space-y-2.5">
                {inProgressTasks.map(renderCard)}
              </div>
            </div>

            {/* Column 3: In Review */}
            <div className="bg-[#F5F6F9]/80 rounded-[14px] p-2.5 border border-[#E5E7EF]/80 flex flex-col">
              <div className="flex items-center justify-between px-1.5 py-1 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="font-bold text-[12px] text-[#17152C]">In Review</span>
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    2
                  </span>
                </div>
                <button className="text-[#737487] hover:text-[#17152C]">
                  <Plus size={13} />
                </button>
              </div>
              <div className="space-y-2.5">
                {inReviewTasks.map(renderCard)}
              </div>
            </div>

            {/* Column 4: Completed */}
            <div className="bg-[#F5F6F9]/80 rounded-[14px] p-2.5 border border-[#E5E7EF]/80 flex flex-col">
              <div className="flex items-center justify-between px-1.5 py-1 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-bold text-[12px] text-[#17152C]">Completed</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    3
                  </span>
                </div>
                <button className="text-[#737487] hover:text-[#17152C]">
                  <Plus size={13} />
                </button>
              </div>
              <div className="space-y-2.5">
                {completedTasks.map(renderCard)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
