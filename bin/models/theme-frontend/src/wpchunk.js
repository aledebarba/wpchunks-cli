export const _app = {
    pages: ()=> {
      let instance = document.querySelector('[wpchunk-theme-frontend]').dataset.instance;
      let name = document.querySelector('[wpchunk-theme-frontend]').dataset.wpchunk;
      let dataElement = JSON.parse( document.querySelector(`pre[class="${name}"][instance="${instance}"]`).textContent );
      return dataElement.pages; 
    },
    params: ()=> {
      let instance = document.querySelector('[wpchunk-theme-frontend]').dataset.instance;
      let name = document.querySelector('[wpchunk-theme-frontend]').dataset.wpchunk;
      let dataElement = JSON.parse( document.querySelector(`pre[class="${name}"][instance="${instance}"]`).textContent );
      return dataElement.params[0]; 
    },
    adminUrl: ()=> {
      let instance = document.querySelector('[wpchunk-theme-frontend]').dataset.instance;
      let name = document.querySelector('[wpchunk-theme-frontend]').dataset.wpchunk;
      let dataElement = JSON.parse( document.querySelector(`pre[class="${name}"][instance="${instance}"]`).textContent );
      return dataElement.adminUrl; 
    },
    themeUrl: ()=> {
      let instance = document.querySelector('[wpchunk-theme-frontend]').dataset.instance;
      let name = document.querySelector('[wpchunk-theme-frontend]').dataset.wpchunk;
      let dataElement = JSON.parse( document.querySelector(`pre[class="${name}"][instance="${instance}"]`).textContent );
      return dataElement.themeUrl; 
    },
    primaryMenu: ()=> {
      let instance = document.querySelector('[wpchunk-theme-frontend]').dataset.instance;
      let name = document.querySelector('[wpchunk-theme-frontend]').dataset.wpchunk;
      let dataElement = JSON.parse( document.querySelector(`pre[class="${name}"][instance="${instance}"]`).textContent );      
      return dataElement.primaryMenu; 
    }
  }

  export const Styles = ( { css } ) => <style>{ css }</style>;