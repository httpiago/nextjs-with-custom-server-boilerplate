import React, { FunctionComponent } from 'react'

type Props = {
  title: string,
}

const Header: FunctionComponent<Props> = ({ title }) => {
  return (
    <h1>{title}</h1>
  );
}

export default Header
