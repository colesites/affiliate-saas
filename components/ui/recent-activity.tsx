interface Activity {
  user: string
  action: string
  time: string
}

interface RecentActivityProps {
  activities: Activity[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{activity.user}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="text-xs text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}
