import { Loader } from "lucide-react";

export default function ActivityList() {
  const activities = [
    { time: "4 years ago", status: "Requested" },
    { time: "3 years ago", status: "Under Investigation" },
    { time: "2 years ago", status: "Requested" },
    { time: "1 year ago", status: "Under Investigation" },
    { time: "11 months ago", status: "Requested" },
    { time: "10 months ago", status: "Under Investigation" },
    { time: "9 months ago", status: "Requested" },
    { time: "8 months ago", status: "Requested" },
    { time: "7 months ago", status: "Requested" },
    { time: "6 months ago", status: "Requested" },
    { time: "5 months ago", status: "Requested" },
    { time: "4 months ago", status: "Requested" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
      
      <div className="overflow-y-auto max-h-[320px]">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 gap-4 px-6 py-4 border-b last:border-b-0 hover:bg-gray-50 transition"
          >
            {/* Time */}
            <div className="text-[12px] text-gray-600">{activity.time}</div>

            {/* Status */}
            <div>
              {activity.status === "Under Investigation" ? (
                <span className="inline-flex items-center gap-1.5 px-1 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px]">
                  <Loader className="w-4 h-4" />
                  Under Investigation
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-1 py-1 bg-yellow-50 text-yellow-700 rounded-full text-[10px]">
                  <Loader className="w-4 h-4" />
                  {activity.status}
                </span>
              )}
            </div>

            {/* View Detail */}
            <div className="text-[10px] text-gray-600">View Detail</div>
          </div>
        ))}
      </div>
    </div>
  );
}
