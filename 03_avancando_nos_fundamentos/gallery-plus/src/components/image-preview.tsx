import { tv } from "tailwind-variants"

export const imagePreviewVariants = tv({
  base: 'rounded-lg overflow-hidden'
})

interface ImagePreviewProps extends React.ComponentProps<'img'> {
  imageClassName?: string
}

export const imagePreviewImageVariants = tv({
  base: 'w-full h-full object-cover',
})

export function ImagePreview({ className, imageClassName, ...props }: ImagePreviewProps) {
  return (
    <div className={imagePreviewVariants({ className })}>
      <img {...props} className={imagePreviewImageVariants({ className: imageClassName })} />
    </div>
  )
}