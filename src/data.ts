export const activityData = [
  { name: 'Mon', new: 12, review: 45 },
  { name: 'Tue', new: 18, review: 52 },
  { name: 'Wed', new: 15, review: 48 },
  { name: 'Thu', new: 22, review: 60 },
  { name: 'Fri', new: 25, review: 55 },
  { name: 'Sat', new: 10, review: 35 },
  { name: 'Sun', new: 8, review: 30 },
];

export const recentlyLearned = [
  { word: 'Implement', type: 'Verb', definition: 'To put a decision, plan, agreement, etc. into effect.', typeColor: 'text-indigo-600', typeBg: 'bg-indigo-50' },
  { word: 'Synergy', type: 'Noun', definition: 'The interaction or cooperation of two or more organizations.', typeColor: 'text-emerald-600', typeBg: 'bg-emerald-50' },
  { word: 'Pragmatic', type: 'Adj', definition: 'Dealing with things sensibly and realistically.', typeColor: 'text-amber-600', typeBg: 'bg-amber-50' },
  { word: 'Leverage', type: 'Verb', definition: 'Use something to maximum advantage.', typeColor: 'text-rose-600', typeBg: 'bg-rose-50' },
];

export const vocabularyData = [
  { id: 1, word: 'Implement', type: 'Verb', definition: 'To put a decision, plan, agreement, etc. into effect.', status: 'Mastered', deck: 'Business', lastStudied: '2 hours ago' },
  { id: 2, word: 'Synergy', type: 'Noun', definition: 'The interaction or cooperation of two or more organizations.', status: 'Learning', deck: 'Business', lastStudied: '5 hours ago' },
  { id: 3, word: 'Pragmatic', type: 'Adj', definition: 'Dealing with things sensibly and realistically.', status: 'New', deck: 'Academic', lastStudied: 'Not started' },
  { id: 4, word: 'Leverage', type: 'Verb', definition: 'Use something to maximum advantage.', status: 'Mastered', deck: 'Business', lastStudied: '1 day ago' },
  { id: 5, word: 'Paradigm', type: 'Noun', definition: 'A typical example or pattern of something.', status: 'Learning', deck: 'Academic', lastStudied: '3 hours ago' },
  { id: 6, word: 'Resilient', type: 'Adj', definition: 'Able to withstand or recover quickly from difficult conditions.', status: 'Mastered', deck: 'Daily Life', lastStudied: '2 days ago' },
  { id: 7, word: 'Ambiguous', type: 'Adj', definition: 'Open to more than one interpretation.', status: 'New', deck: 'Academic', lastStudied: 'Not started' },
  { id: 8, word: 'Cognitive', type: 'Adj', definition: 'Relating to the mental action or process of acquiring knowledge.', status: 'Learning', deck: 'Academic', lastStudied: '4 hours ago' },
];

export const roadmapData = [
  { day: 'Mon', date: '24', new: 20, review: 100, completedNew: true, completedReview: true },
  { day: 'Tue', date: '25', new: 20, review: 100, completedNew: true, completedReview: true },
  { day: 'Wed', date: '26', new: 20, review: 100, completedNew: true, completedReview: true },
  { day: 'Thu', date: '27', new: 20, review: 100, completedNew: true, completedReview: false },
  { day: 'Fri', date: '28', new: 20, review: 100, completedNew: false, completedReview: false },
  { day: 'Sat', date: '29', new: 0, review: 50, completedNew: false, completedReview: false, isReviewOnly: true },
  { day: 'Sun', date: '30', isBreak: true },
];

export const getWeekDates = () => {
  const today = new Date();
  const day = today.getDay();
  const diff = today.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(today.setDate(diff));
  
  return [...Array(7)].map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.getDate().toString();
  });
};
