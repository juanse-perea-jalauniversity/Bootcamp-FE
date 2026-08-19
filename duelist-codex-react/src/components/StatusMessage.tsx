import type { ReactNode } from "react"
import "./StatusMessage.css"

type StatusVariant = "loading" | "empty" | "error"

type StatusMessageProps = {
  variant: StatusVariant
  title: string
  description?: string
  action?: ReactNode
}

const ICONS: Record<StatusVariant, string> = {
  loading: "◈",
  empty: "⌕",
  error: "!",
}

export function StatusMessage({
  variant,
  title,
  description,
  action,
}: StatusMessageProps) {
  return (
    <div
      className={`dc-status dc-status--${variant}`}
      role={variant === "error" ? "alert" : "status"}
    >
      {variant === "loading" ? (
        <span className="dc-status__spinner" aria-hidden="true" />
      ) : (
        <span className="dc-status__icon" aria-hidden="true">
          {ICONS[variant]}
        </span>
      )}

      <h2 className="dc-status__title">{title}</h2>
      {description ? <p className="dc-status__text">{description}</p> : null}
      {action ? <div className="dc-status__action">{action}</div> : null}
    </div>
  )
}
