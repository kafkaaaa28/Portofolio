import './SkillsScroll.css';

const StarBorder = ({ as: Component = 'button', className = '', color = 'white', speed = '6s', thickness = 1, children, ...rest }) => {
  return (
    <Component
      className={`star-border-containers ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottoms"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-tops"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-contents">{children}</div>
    </Component>
  );
};

export default StarBorder;
