import * as React from 'react'
import styled from 'styled-components'
import { system, BorderRadiusProps, LayoutProps } from 'styled-system'
import { omit } from '../../../utils'
import { useImage, UseImageProps } from './use-image'

interface ImageOptions {
  /**
   * Fallback image `src` to show if image is loading or image fails.
   *
   * Note 🚨: We recommend you use a local image
   */
  fallbackSrc?: string
  /**
   * Fallback element to show if image is loading or image fails.
   * @type React.ReactElement
   */
  fallback?: React.ReactElement
  /**
   * Defines loading strategy
   */
  loading?: 'eager' | 'lazy'
  /**
   * How the image to fit within its bounds.
   * It maps to css `object-fit` property.
   * @type SystemProps["objectFit"]
   */
  fit?: React.CSSProperties['objectFit']
  /**
   * How to align the image within its bounds.
   * It maps to css `object-position` property.
   * @type SystemProps["objectPosition"]
   */
  align?: React.CSSProperties['objectPosition']
  /**
   * If `true`, opt out of the `fallbackSrc` logic and use as `img`
   */
  ignoreFallback?: boolean
  /**
   * The width and height of the image
   */
  boxSize?: LayoutProps['size']
  /**
   * The borderRadius for the image
   */
  borderRadius?: BorderRadiusProps['borderRadius']
}

export interface ImageProps
  extends UseImageProps,
    ImageOptions,
    Omit<React.ComponentPropsWithoutRef<'img'>, keyof UseImageProps> {}

const BaseImage = styled.img`
  ${system({
    boxSize: {
      properties: ['width', 'height']
    },
    borderRadius: {
      property: 'borderRadius'
    }
  })}
`

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    const {
      fallbackSrc,
      fallback,
      src,
      align,
      fit,
      loading,
      ignoreFallback,
      crossOrigin,
      alt,
      ...delegated
    } = props

    const shouldIgnore = loading != null || ignoreFallback

    const status = useImage({
      ...props,
      ignoreFallback: shouldIgnore
    })

    const shared = {
      objectFit: fit,
      objectPosition: align,
      ...(shouldIgnore ? delegated : omit(delegated, ['onError', 'onLoad']))
    }

    if (status !== 'loaded') {
      if (fallback) return fallback

      return <BaseImage ref={ref} src={fallbackSrc} alt={alt} {...shared} />
    }

    return (
      <BaseImage
        ref={ref}
        src={src}
        alt={alt}
        crossOrigin={crossOrigin}
        loading={loading}
        {...shared}
      />
    )
  }
)
