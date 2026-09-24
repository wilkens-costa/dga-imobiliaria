import { SearchIcon } from "@/components/icons";

export function PropertySearch() {
  return (
    <form className="property-search-form" action="/imoveis" method="get">
      <div className="form-field">
        <label htmlFor="transaction">Finalidade</label>
        <select id="transaction" name="finalidade" defaultValue="">
          <option value="">Comprar ou vender</option>
          <option value="compra">Comprar</option>
          <option value="venda">Vender</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="type">Tipo</label>
        <select id="type" name="tipo" defaultValue="">
          <option value="">Todos os tipos</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="terreno">Terreno</option>
          <option value="comercial">Comercial</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="neighborhood">Bairro</label>
        <input id="neighborhood" name="bairro" placeholder="Digite o bairro" />
      </div>
      <div className="form-field">
        <label htmlFor="bedrooms">Quartos</label>
        <select id="bedrooms" name="quartos" defaultValue="">
          <option value="">Qualquer quantidade</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>
      <button type="submit" className="button button-primary contact-form-button">
        <SearchIcon /> Buscar imóveis
      </button>
    </form>
  );
}
