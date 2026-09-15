export default function ServiceCard({ icon, title, subtitle, description, badge }) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-space-md mb-space-sm">
          <div className="flex items-center gap-space-sm">
            <div className="p-space-xs rounded-lg bg-surface-container text-primary">
              <span className="material-symbols-outlined text-[24px]">{icon}</span>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">{title}</h4>
              <span className="font-label-sm text-label-sm text-on-surface-variant">{subtitle}</span>
            </div>
          </div>
          {badge && (
            <span className="font-label-sm text-label-sm px-space-xs py-space-2xs rounded-full bg-secondary-container text-on-secondary-fixed shrink-0">
              {badge}
            </span>
          )}
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{description}</p>
      </div>
    </div>
  );
}