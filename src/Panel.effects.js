import {createStore, createEvent} from 'effector'
import {createComponent} from 'effector-react'
import moment from 'moment';

export const setD = createEvent('setD')
export const setO = createEvent('setO')
export const setH = createEvent('setH')
export const setL = createEvent('setL')
export const setC = createEvent('setC')

export const panelData = createStore({ 
  time: '2019-05-28', 
  open: 194.38, 
  high: 200.47, 
  low: 193.75, 
  close: 200 
  })
.on(setD, (state, newData) => ({...state, time: moment(newData).format('YYYY-MM-DD')}))
.on(setO, (state, newData) => ({...state, open: newData}))
.on(setH, (state, newData) => ({...state, high: newData}))
.on(setL, (state, newData) => ({...state, low: newData}))
.on(setC, (state, newData) => ({...state, close: newData}))
  

