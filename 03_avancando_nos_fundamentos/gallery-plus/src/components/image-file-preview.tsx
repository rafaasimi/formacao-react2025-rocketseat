import { tv } from "tailwind-variants"

export const imageFilePreviewVariants = tv({
  base: 'rounded-lg overflow-hidden'
})

interface ImageFilePreviewProps extends React.ComponentProps<'img'> {
  imageClassName?: string
}

export const imageFilePreviewImageVariants = tv({
  base: 'w-full h-full object-cover',
})

export function ImageFilePreview({ className, imageClassName, ...props }: ImageFilePreviewProps) {
  return (
    <div className={imageFilePreviewVariants({ className })}>
      <img {...props} className={imageFilePreviewImageVariants({ className: imageClassName })} />
    </div>
  )
}