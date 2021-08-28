import * as React from 'react'
import styled from 'styled-components'
import { variant, ResponsiveValue } from 'styled-system'

import { isDark, randomColor } from '../../../utils'
import { AvatarFallback } from '../icons'
import { useImage, Image, ImageProps } from '../image'
import { BoxProps, Box } from '../layout'

interface AvatarOptions {
  /**
   * The name of the person in the avatar.
   *
   * - if `src` has loaded, the name will be used as the
   * `alt` attribute of the `img`
   * - If `src` is not loaded, the name will be used to create the initials
   */
  name?: string
  /**
   * If `true`, the `Avatar` will show a border around it.
   *
   * Best for a group of avatars
   */
  showBorder?: boolean
  /**
   * The image url of the `Avatar`
   */
  src?: string
  /**
   * List of sources to use for different screen resolutions
   */
  srcSet?: string
  /**
   * Defines loading strategy
   */
  loading?: 'eager' | 'lazy'
  /**
   * Function called when image failed to load
   */
  onError?: () => void
  /**
   * The default avatar used as fallback when `name`, and `src`
   * is not specified.
   * @type React.ReactElement
   */
  icon?: React.ReactElement
  /**
   * Function to get the initials to display
   */
  getInitials?: (name: string) => string
}

export interface AvatarBadgeProps extends BoxProps {}

const BaseAvatarBadge = styled(Box)<AvatarBadgeProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  transform: translate(55%, 35%);
  border-radius: 9999px;
`

export const AvatarBadge = React.forwardRef<HTMLDivElement, AvatarBadgeProps>(
  (props, ref) => {
    const {
      borderWidth = '0.2em',
      borderStyle = 'solid',
      borderColor = 'white',
      ...delegated
    } = props

    return (
      <BaseAvatarBadge
        ref={ref}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        borderColor={borderColor}
        {...delegated}
      />
    )
  }
)

function initials(name: string) {
  const [firstName, lastName] = name.split(' ')
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

interface AvatarNameProps
  extends BoxProps,
    Pick<AvatarOptions, 'name' | 'getInitials'> {}

const AvatarName: React.FC<AvatarNameProps> = (props) => {
  const { name, getInitials, ...delegated } = props

  return <Box {...delegated}>{name ? getInitials?.(name) : null}</Box>
}

export type AvatarSizes =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'full'

export interface AvatarProps
  extends Omit<BoxProps, 'onError' | 'size'>,
    AvatarOptions {
  iconLabel?: string
  s?: ResponsiveValue<AvatarSizes>
}

interface AvatarImageProps
  extends ImageProps,
    Pick<AvatarProps, 'getInitials' | 'borderRadius' | 'icon' | 'name'> {
  iconLabel?: string
}

const AvatarImage: React.FC<AvatarImageProps> = (props) => {
  const {
    src,
    onError,
    getInitials,
    name,
    borderRadius,
    loading,
    iconLabel,
    icon = <AvatarFallback />
  } = props

  const status = useImage({ src, onError })

  const hasLoaded = status === 'loaded'

  const showFallback = !src || !hasLoaded

  if (showFallback) {
    return name ? (
      <AvatarName getInitials={getInitials} name={name} />
    ) : (
      React.cloneElement(icon, {
        role: 'img',
        'aria-label': iconLabel
      })
    )
  }

  return (
    <Image
      src={src}
      alt={name}
      loading={loading}
      boxSize='100%'
      fit='cover'
      borderRadius={borderRadius ?? '2px'}
    />
  )
}

const BaseAvatar = styled(Box)<AvatarProps>`
  ${({ name, bg, backgroundColor, theme: { colors } }) => {
    const avatarBg = name ? randomColor() : colors.gray400
    const color = isDark(avatarBg) ? 'white' : colors.gray800

    return {
      backgroundColor: backgroundColor ?? bg ?? avatarBg,
      color,
      borderColor: 'white',
      verticalAlign: 'top',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 500,
      position: 'relative',
      flexShrink: 0
    }
  }}

  ${variant({
    prop: 's',
    variants: {
      '2xs': {
        size: '1rem',
        fontSize: 'calc(1rem / 2.5)'
      },
      xs: {
        size: '1.5rem',
        fontSize: 'calc(1.5rem / 2.5)'
      },
      sm: {
        size: '2rem',
        fontSize: 'calc(2rem / 2.5)'
      },
      md: {
        size: '3rem',
        fontSize: 'calc(3rem / 2.5)'
      },
      lg: {
        size: '4rem',
        fontSize: 'calc(4rem / 2.5)'
      },
      xl: {
        size: '6rem',
        fontSize: 'calc(6rem / 2.5)'
      },
      '2xl': {
        size: '8rem',
        fontSize: 'calc(8rem / 2.5)'
      },
      full: {
        size: '100%',
        fontSize: 'calc(100% / 2.5)'
      }
    }
  })}
`

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (props, ref) => {
    const {
      src,
      name,
      s = 'md',
      borderRadius = '9999px',
      showBorder,
      borderWidth,
      onError,
      getInitials = initials,
      icon = <AvatarFallback />,
      iconLabel = ' avatar',
      loading,
      children,
      ...delegated
    } = props

    return (
      <BaseAvatar
        ref={ref}
        s={s}
        name={name}
        borderWidth={showBorder ? '2px' : borderWidth}
        borderRadius={borderRadius}
        {...delegated}
      >
        <AvatarImage
          src={src}
          loading={loading}
          onError={onError}
          getInitials={getInitials}
          name={name}
          borderRadius={borderRadius}
          icon={icon}
          iconLabel={iconLabel}
        />
        {children}
      </BaseAvatar>
    )
  }
)
