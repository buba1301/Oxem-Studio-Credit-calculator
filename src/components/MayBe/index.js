/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

const Maybe = ({ test, children }) => <>{test && children}</>;

export default Maybe;
