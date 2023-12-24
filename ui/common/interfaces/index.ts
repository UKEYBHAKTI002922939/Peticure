import React, { ReactNode } from 'react';

// Interface representing a key for a list item
export interface IListKey {
  key: React.Key;
}

// Interface representing props with optional children
export interface IPropsChildren {
  children?: ReactNode;
}

