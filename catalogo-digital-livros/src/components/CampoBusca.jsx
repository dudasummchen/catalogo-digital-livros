function CampoBusca({ valor, aoAlterar }) {
// Atencao: buscas em listas muito grandes podem exigir debounce para evitar re-render excessivo.
// Interessante: componente controlado (value + onChange) deixa o estado centralizado no App.
return (
<label className="campo-busca">
<input
type="search"
value={valor}
onChange={(evento) => aoAlterar(evento.target.value)}
placeholder="Buscar por título, autor ou tag"
/>
</label>
)
}
export default CampoBusca