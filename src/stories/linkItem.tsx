import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import cx from 'classnames';

interface LinkItemProps {
  href: string;
  target?: string;
  classNames?: string;
}

const LinkItem = ({ children, href, target, classNames }: PropsWithChildren<LinkItemProps>) => (
  <Link className={ cx("link-item", classNames && classNames) } href={ href } target={ target || "_self" }>
    {children}
  </Link>
);

export default LinkItem;