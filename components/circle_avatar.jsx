import React from 'react'

function CircleAvatar({src,alt,size}) {
    const avatarSize = size || 'h-10 w-10';
  return (
    <img
        src={src}
        alt={alt}
        className={`rounded-full ${avatarSize} object-conver`}
    />
  )
}

export default CircleAvatar