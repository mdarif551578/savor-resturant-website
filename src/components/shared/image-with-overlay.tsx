
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  'data-ai-hint'?: string;
  layout?: "fill" | "intrinsic" | "responsive" | undefined;
  objectFit?: "cover" | "contain" | undefined;
  priority?: boolean;
}

export function ImageWithOverlay({
  className,
  imageClassName,
  overlayClassName,
  ...props
}: ImageWithOverlayProps) {
  const imageProps = { ...props };
  // The overlayClassName is part of `props` and was being passed to `<Image />`.
  // We need to remove it from imageProps.
  if ('overlayClassName' in imageProps) {
    delete (imageProps as any).overlayClassName;
  }
  
  if (props.layout !== 'fill') {
    imageProps.width = props.width || 600;
    imageProps.height = props.height || 400;
  }

  return (
    <div className={cn('relative h-full w-full overflow-hidden', className)}>
      <Image
        {...imageProps}
        className={cn('w-full h-full object-cover', imageClassName)}
      />
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10", overlayClassName)} />
    </div>
  );
}
