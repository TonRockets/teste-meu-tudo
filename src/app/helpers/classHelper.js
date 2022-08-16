import { changeRoute, setSelectedValues } from '../features/userSlice';
class ClassHelper {
  constructor(dispatch, navigate) {
    this.dispatch = dispatch;
    this.navigate = navigate;
  }
  selectPage(page, value) {
    let handlePage;
    if (page === 'values') {
      handlePage = 'Valores';
      console.log('ROTA PADRÃO, A PARTIR DA HOME', page, value);
      this.dispatch(changeRoute({ page: handlePage }));
      this.navigate(`/${page}`, { state: value });
    }
    if (page === 'period') {
      handlePage = 'Períodos';
      console.log('ROTA PARA PERIODS', page, value);
      this.dispatch(changeRoute({ page: handlePage }));
      this.dispatch(setSelectedValues({ loanValue: value }));
      this.navigate(`/${page}`, { state: value });
    }
    if (page === 'options') {
      handlePage = 'Opções';
      console.log('ROTA PARA OPTIONS', page, value);
      this.dispatch(changeRoute({ page: handlePage }));
      this.dispatch(setSelectedValues({ installments: value }));
      this.navigate(`/${page}`, { state: value });
    }
    if (page === '/') {
      console.log('ROTA PARA HOME', page, value);
      this.dispatch(changeRoute({ home: value, page: page }));
      this.navigate(page, { replace: true });
    }
  }

  formatCurrency(value) {
    if (value !== undefined) {
      let format = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
      return format.format(value);
    }
  }
}

export default ClassHelper;
