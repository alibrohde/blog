export const Code = ({ children }) => {
  return (
    <code
      className={`
        [p_&]:text-sm
        [p_&]:px-1
        [p_&]:py-0.5
        [p_&]:rounded-sm
        [p_&]:bg-stone-200
        dark:[p_&]:bg-stone-800
      `}
    >
      {children}
    </code>
  );
};
