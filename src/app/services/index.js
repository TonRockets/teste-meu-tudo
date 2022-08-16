import http from '../configs/http';

export const getHomeValues = () => http.get('/');

export const getLoanValues = () => http.get('/values');

export const getPeriodsValues = () => http.get('/installments');

export const getSimulationValue = () => http.get('/simulation');
