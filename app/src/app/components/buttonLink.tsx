import React from 'react';
import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} className="mx-3 px-4 py-2 text-black font-semibold hover:bg-green-200 rounded transition duration-300 m-5">
        {text}
    </Link>
  );
}

export default ButtonLink;
