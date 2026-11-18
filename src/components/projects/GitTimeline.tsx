"use client";

import React from "react";
import { GitCommit, GitBranch } from "lucide-react";

interface CommitItem {
  hash: string;
  title: string;
  description: string;
  date: string;
}

interface GitTimelineProps {
  commits: CommitItem[];
  accentColor?: string;
}

export const GitTimeline: React.FC<GitTimelineProps> = ({
  commits,
  accentColor = "#2563EB",
}) => {
  return (
    <div className="font-mono text-xs">
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-200 text-slate-600 text-[11px] font-medium">
        <GitBranch className="w-3.5 h-3.5" style={{ color: accentColor }} />
        <span>GIT COMMIT STORYLINE (main production branch)</span>
      </div>

      <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-slate-200">
        {commits.map((commit) => (
          <div key={commit.hash} className="relative group">
            {/* Commit Dot */}
            <div
              className="absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-white ring-1 ring-slate-300 transition-transform group-hover:scale-125"
              style={{ backgroundColor: accentColor }}
            />

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                <span className="font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                  commit {commit.hash}
                </span>
                <span>{commit.date}</span>
              </div>
              <div className="font-bold text-slate-900 text-xs">{commit.title}</div>
              <div className="text-slate-600 text-[11px] mt-1 font-sans leading-relaxed">{commit.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
