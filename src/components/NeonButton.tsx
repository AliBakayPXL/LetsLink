import React, { memo } from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  LinkComponent?: React.ComponentType<any>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const NeonButton = memo<NeonButtonProps>(({
  children,
  href,
  to,
  onClick,
  className = "",
  LinkComponent,
  disabled = false,
  type = "button"
}) => {
  const baseClasses = `
    relative px-6 py-2 text-white font-semibold bg-transparent
    border-2 border-purple-500 rounded-full overflow-hidden group
    transition-all duration-300 hover:scale-105 backdrop-blur-md
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim();

  const content = (
    <>
      {/* Pulsating gradient background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 animate-pulse opacity-90"></div>

      {/* Subtle soft glow */}
      <div className="absolute inset-0 rounded-full blur-sm bg-purple-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

      {/* Button text */}
      <span className="relative z-10 whitespace-nowrap">{children}</span>

      {/* Extra styles for animation */}
      <style>{`
        @keyframes neon-glow {
          0%, 100% {
            box-shadow:
              0 0 5px #9333ea,
              0 0 10px #9333ea,
              0 0 15px #c084fc;
          }
          50% {
            box-shadow:
              0 0 10px #a855f7,
              0 0 20px #e9d5ff;
          }
        }

        .group:hover {
          animation: neon-glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );

  if (LinkComponent && to) {
    return (
      <LinkComponent to={to} className={baseClasses} onClick={onClick}>
        {content}
      </LinkComponent>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
});

NeonButton.displayName = 'NeonButton';

export default NeonButton;
