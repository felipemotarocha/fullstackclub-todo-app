const DashboardCard = ({ icon, mainText, secondaryText }) => {
  return (
    <div className="flex h-[150px] flex-col items-center justify-center gap-1 rounded-[10px] bg-white">
      <div className="flex items-center gap-2">
        <span className="text-brand-primary">{icon}</span>
        <p className="text-2xl font-semibold text-brand-dark-blue">
          {mainText}
        </p>
      </div>
      {secondaryText}
    </div>
  )
}

export default DashboardCard
