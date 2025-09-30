import React, { useMemo } from 'react';

interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  host?: string;
  isBreak?: boolean;
}

const scheduleData: ScheduleItem[] = [
  { time: '8:30 am – 9:00 am', title: 'Doors Open / Registration' },
  { time: '9:00 am – 9:15 am', title: 'Opening Remarks', speaker: 'Changhong Shi, Merck' },
  { time: '9:15 am – 10:00 am', title: 'SAS®, SQL, R, and Python: We\'re All Friends', speaker: 'Melodie Rush, SAS' },
  { time: '10:00 am – 10:30 am', title: 'R Shiny Dev Process and Use Cases', speaker: 'Sri Pavan Vemuri, Regeneron' },
  { time: '10:30 am – 10:45 am', title: 'Break', isBreak: true },
  { time: '10:45 am – 11:15 am', title: 'Gen AI in Biometrics: Transforming Clinical trials with Supercharged Efficiency and Innovation', speaker: 'Kevin Lee' },
  { time: '11:15 am – 11:55 am', title: 'Panel Discussion: Navigating the Future of Statistical Programming: Skills, Tools, and Opportunities', speaker: 'Sufang Huang, Sanofi; Shaveta Bansal, Merck; Benjamin Koch, Merck; Lynn Zhang, Merck; Sachin Tiwari, Jazz Pharmaceuticals' },
  { time: '11:55 am – 12:00 pm', title: 'Closing', speaker: 'Jeff Xia, Merck' },
  { time: '12:00 pm – 1:00 pm', title: 'Lunch and Networking' },
];

const ScheduleItem = React.memo(({ item }: { item: ScheduleItem }) => (
  <div
    className={`p-5 rounded-lg border border-white/20 backdrop-blur-sm ${
      item.isBreak 
        ? 'bg-white/10 text-white' 
        : 'bg-white/5 text-white hover:bg-white/10 transition-colors duration-200'
    }`}
  >
    <div className="flex flex-col md:flex-row md:items-start gap-3">
      <div className="w-full md:w-48 flex-shrink-0">
        <span className="font-semibold text-white/90">{item.time}</span>
      </div>
      <div className="flex-grow">
        <h3 className="font-medium text-lg">{item.title}</h3>
        {item.speaker && (
          <p className="text-sm text-white/80 mt-1">
            Speaker: {item.speaker}
          </p>
        )}
        {item.host && (
          <p className="text-sm text-white/70 mt-1">
            Host: {item.host}
          </p>
        )}
      </div>
    </div>
  </div>
));

ScheduleItem.displayName = 'ScheduleItem';

export function Schedule() {
  const memoizedScheduleData = useMemo(() => scheduleData, []);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#007A73] to-[#005F5A]">
      <div className="w-full max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Event Schedule</h2>
        <p className="text-center text-white/80 mb-8">Hosted by Chen Wang</p>
        <div className="space-y-4">
          {memoizedScheduleData.map((item, index) => (
            <ScheduleItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
} 