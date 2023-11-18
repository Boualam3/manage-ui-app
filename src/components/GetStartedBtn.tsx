import React, { AnchorHTMLAttributes } from 'react'

import cn from 'classnames'

const GetStartedBtn: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  ...rest
}) => {
  return (
    <a
      {...rest}
      href="#"
      className={cn(
        'p-3 px-6 pt-2 rounded-full text-white bg-brightRed hover:bg-brightRedLight',
        className,
      )}
    >
      Get Started
    </a>
  )
}

export default GetStartedBtn
