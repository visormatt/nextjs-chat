// Vendor
import * as React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

export interface ChatLinkProps {
  className?: string;
  sender?: boolean;
}

/**
 * @name ChatLink
 * @description TODO:
 */
const ChatLink: React.FC<ChatLinkProps> = (props) => {
  const { className, sender = false } = props;

  // Setup
  const title = 'Example Title';

  // Styles
  const tailwind = 'items-center flex message p-2 rounded-lg text-sm';
  const classes = classnames(tailwind, className, {
    sender: sender,
    receiver: !sender
  });

  return (
    <div className={classes} style={{ maxWidth: 300 }}>
      <div>
        <img
          alt={title}
          height={50}
          loading="lazy"
          src="https://placeimg.com/50/50/people"
          width={50}
        />
      </div>
      <span className="ml-4" />
      <Link href="/">
        <a className="overflow-ellipsis">
          <h3 className="font-bold text-base">{title}</h3>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
        </a>
      </Link>
    </div>
  );
};

export { ChatLink, ChatLink as default };
