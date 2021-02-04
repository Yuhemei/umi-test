import React, { useEffect } from 'react';
interface BasicLayoutProps {}
const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children } = props;
  useEffect(() => {
    return () => {};
  }, []);
  return <div>
    <article>{children}</article>
  </div>;
};
export default BasicLayout;
