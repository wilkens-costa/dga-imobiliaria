import { SearchIcon } from "@/components/icons";

export function PropertySearch() {
  return (
    <div className="property-search-shell">
      <form className="property-search-form" action="/imoveis" method="get">
        <div className="form-field">
          <label htmlFor="transaction">Finalidade</label>
          <select id="transaction" name="finalidade" defaultValue="">
            <option value="">Selecione</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="type">Tipo de imóvel</label>
          <select id="type" name="tipo" defaultValue="">
            <option value="">Selecione</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="neighborhood">Bairro</label>
          <input id="neighborhood" name="bairro" placeholder="Informe o bairro" />
        </div>
        <div className="form-field">
          <label htmlFor="bedrooms">Quartos</label>
          <select id="bedrooms" name="quartos" defaultValue="">
            <option value="">Selecione</option>
          </select>
        </div>
        <button type="submit" className="button button-primary contact-form-button">
          <SearchIcon /> Buscar imóveis
        </button>
      </form>
      <p className="search-availability">
        O catálogo está sendo preparado. Os filtros serão liberados conforme os imóveis forem publicados.
      </p>
    </div>
  );
}
