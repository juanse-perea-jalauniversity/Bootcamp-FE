import { useState } from "react"
import type { KeyboardEvent, ReactNode } from "react"
import "./SectionPanel.css"

export interface PanelSection {
  id: string
  label: string
  content: ReactNode
}

type SectionPanelProps = {
  sections: PanelSection[]
  initialSectionId?: string
  ariaLabel?: string
}

export function SectionPanel({
  sections,
  initialSectionId,
  ariaLabel = "Sections",
}: SectionPanelProps) {
  const [activeId, setActiveId] = useState(initialSectionId ?? sections[0]?.id)

  if (sections.length === 0) {
    return null
  }

  const active =
    sections.find((section) => section.id === activeId) ?? sections[0]

  const moveFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    const offset =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0

    if (offset === 0) {
      return
    }

    event.preventDefault()
    const currentIndex = sections.findIndex((section) => section.id === active.id)
    const nextIndex = (currentIndex + offset + sections.length) % sections.length
    setActiveId(sections[nextIndex].id)
  }

  return (
    <div className="dc-panel">
      <div
        className="dc-panel__tabs"
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={moveFocus}
      >
        {sections.map((section) => {
          const isActive = section.id === active.id

          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              id={`dc-tab-${section.id}`}
              className={`dc-panel__tab${isActive ? " dc-panel__tab--active" : ""}`}
              aria-selected={isActive}
              aria-controls={`dc-panel-${section.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(section.id)}
            >
              {section.label}
            </button>
          )
        })}
      </div>

      <div
        className="dc-panel__body"
        role="tabpanel"
        id={`dc-panel-${active.id}`}
        aria-labelledby={`dc-tab-${active.id}`}
        tabIndex={0}
      >
        {active.content}
      </div>
    </div>
  )
}
