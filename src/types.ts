import React from 'react';

export interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconBg: string;
  iconColor: string;
}

export interface WordCardProps {
  word: string;
  type: string;
  definition: string;
  typeColor: string;
  typeBg: string;
  key?: number | string;
}

export type TabType = 'Dashboard' | 'My Vocabulary' | 'Learning Plan' | 'Practice' | 'Analytics' | 'Notifications' | 'Settings' | 'Profile';
