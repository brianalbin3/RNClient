import React, { ReactChildren, ReactChild } from 'react';


import Header from './Header';

interface MainProps {
  children: any; /* ReactChild | ReactChildren; */
}

interface MainState {}

class Main extends React.Component <{}, MainState > {
  constructor(props: MainProps) {
    super(props);
}

  render() {
    return (
      <div>
        <Header/>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Main;