import React from 'react';
import { DefaultButton } from '@fluentui/react';
import { Link } from 'react-router-dom';

const NavigationLink = (props: {
  linkPath: string
  linkName: string
}) => {
  const { linkPath, linkName } = props;
  return (
    <Link to={linkPath}>
      <DefaultButton>
        {linkName}
      </DefaultButton>
    </Link>
  );
};
export default NavigationLink;
