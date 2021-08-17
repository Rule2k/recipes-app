import React from 'react';

const Loader = ({ failed }: { failed?: boolean }) =>
  failed ? <div>Erreur !</div> : <div>Loading !</div>;

export default Loader;
