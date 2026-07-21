import type { Mission } from '../data/missions'

export function MissionImage({ mission }: { mission: Mission }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-ink/10 bg-[#0c0c0e]">
      <img
        src={mission.image}
        alt={mission.title}
        loading="lazy"
        className="h-full w-full object-contain"
      />
    </div>
  )
}
