interface Performer {
  name: string;
  sales: number;
  earnings: string;
}

interface TopPerformersProps {
  performers: Performer[];
}

export function TopPerformers({ performers }: TopPerformersProps) {
  return (
    <div className="space-y-4">
      {performers.map((performer, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">{index + 1}</span>
            </div>
            <div>
              <p className="text-sm font-medium">{performer.name}</p>
              <p className="text-xs text-muted-foreground">
                {performer.sales} sales
              </p>
            </div>
          </div>
          <div className="text-sm font-medium text-green-600">
            {performer.earnings}
          </div>
        </div>
      ))}
    </div>
  );
}
