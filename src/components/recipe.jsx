export default function Recipe({ recipeText }) {
  return (
    <section className="bg-red-300">
      <h2>Generated Recipe</h2>
      <div style={{ whiteSpace: "pre-wrap" }}>{recipeText}</div>
    </section>
  );
}
