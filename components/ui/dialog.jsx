import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import Image from "next/image"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-38px)] max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-[10px]",
        className
      )}
      {...props}>
      {children}
      <DialogPrimitive.Close
        className="absolute right-5 top-4 transition-opacity hover:opacity-80 data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <Image
          src="/assets/icons/close.svg"
          alt="Icon Close"
          width={18}
          height={24}
          className="w-auto h-auto"
        />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogCloseButton = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      "px-5 py-[15px] rounded-[10px] border border-solid border-black shadow-md w-full hover:bg-opacity-10 hover:bg-black hover:scale-95",
      className
    )}
    {...props}>
    <div className="text-[#192028] font-medium">
      Batal
    </div>
  </DialogPrimitive.Close>
))
DialogCloseButton.displayName = DialogPrimitive.Close.displayName

const DialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("bg-black rounded-t-[10px] -mx-[1px] space-y-1.5 text-center sm:text-left px-5 py-[15px]", className)}
    {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex justify-center gap-5 px-[35px] py-5", className)}
    {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogBody = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col gap-5 text-[#0C0C0C] py-5 px-[35px]", className)}
    {...props} />
)
DialogBody.displayName = "DialogBody"

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("font-semibold text-white flex gap-[5px]", className)}
    {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogCloseButton,
}
