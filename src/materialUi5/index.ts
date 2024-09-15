import { getComponentMap, getPropsMap } from './mapping'

export function materialUi5() {
  return {
    uiName: 'materialUi5',
    map: getPropsMap(),
    lib: '@mui/material',
  }
}

export function materialUi5Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: '@mui/material',
    isReact: true,
  }
}
