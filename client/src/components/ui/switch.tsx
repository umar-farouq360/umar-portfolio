import * as React from "react"
import { cn } from "cn"
import { Switch as SwitchPrimitive } from "radix-ui"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 cursor-pointer items-center rounded-full border shadow-xs transition-colors duration-200 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50",
        // Track dimensions
        "data-[size=default]:h-[20px] data-[size=default]:w-[36px]",
        "data-[size=sm]:h-[16px] data-[size=sm]:w-[28px]",
        // Switched ON: bright brand lime accent track
        "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
        // Switched OFF: clear muted track with a visible border
        "data-[state=unchecked]:bg-muted/80 data-[state=unchecked]:border-border hover:data-[state=unchecked]:bg-muted",
        "dark:data-[state=unchecked]:bg-surface-raised dark:data-[state=unchecked]:border-border",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full ring-0 shadow-sm transition-transform duration-200",
          // Thumb dimensions
          "group-data-[size=default]/switch:size-4",
          "group-data-[size=sm]/switch:size-3",
          // Thumb translation (2px inset on both ends)
          "group-data-[size=default]/switch:data-[state=unchecked]:translate-x-[2px]",
          "group-data-[size=default]/switch:data-[state=checked]:translate-x-[18px]",
          "group-data-[size=sm]/switch:data-[state=unchecked]:translate-x-[2px]",
          "group-data-[size=sm]/switch:data-[state=checked]:translate-x-[14px]",
          // Switched ON: dark thumb contrasting with bright lime track
          "data-[state=checked]:bg-primary-foreground",
          // Switched OFF: soft visible thumb contrasting with dark/muted track
          "data-[state=unchecked]:bg-muted-foreground dark:data-[state=unchecked]:bg-fg-muted"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
