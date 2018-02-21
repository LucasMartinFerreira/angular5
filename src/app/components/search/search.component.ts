import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

/**
 * FilterPipe
 * @class
 * @description Filtra un array en relacción a los paramtros que reciba
 */
export class FilterPipe implements PipeTransform {
  /**
   * @function transform
   * @param value : Array sobre el que se quiere trabajar
   * @param keys : Claves por el que se filtrará
   * @param searchText : Texto por el que se desea filtrar
   * @param currentDateTime : Parámetro cualquiera para forzar la recarga del pipe
   * @description Filtra un array buscando el texto a buscar en los campos que se hayan especificado
   */
  public transform(value, keys: string, searchText: string, currentDatetime: Date) {
    if (!searchText) return value;
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(searchText, 'gi').test(item[key])));
  }
}
