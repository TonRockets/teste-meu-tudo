import http from '../configs/http';

export const getHomeValues = (value) => http.get('/');

export const getLoanValues = (value) => http.get('/values');

export const getPeriodsValues = (value) => http.get('/installments');

export const getSimulationValue = (value) => http.get('/simulation');
