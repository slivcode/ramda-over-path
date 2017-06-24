import over = require('ramda/src/over');
import lensPath = require('ramda/src/lensPath');
import curry = require('ramda/src/curry');

export interface IPathArr {
  [s: number]: (string | number);
}

export interface IOverPath {
  <Root, Inner>(pathArr: IPathArr, f: (i: Inner) => Inner, r: Root);

  <Root, Inner>(pathArr: IPathArr, f: (i: Inner) => Inner): (r: Root) => Root;

  <Root, Inner>(pathArr: IPathArr): (f: (i: Inner) => Inner) => (r: Root) => Root;
}

export const overPath: IOverPath = curry(
  (pathArr: IPathArr, transformer: Function, state: any) => over(lensPath(pathArr), transformer, state),
);