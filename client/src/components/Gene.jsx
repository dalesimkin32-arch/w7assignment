import "./Gene.css";

export default function Gene({
  gene_name,
  application,
  source_organism,
  image_description,
  image_url,
  primary_article_url,
}) {
  return (
    <div className="Gene">
      <h4>Gene Name: {gene_name}</h4>
      <p>Where used: {application}</p>
      <p>Source Organism: {source_organism}</p>
      <figure>
        <title>Showing use in: {image_description}</title>
        <img src={image_url} alt={image_description} />
      </figure>
      <a target="_blank" href={primary_article_url}>
        Open primary journal article
      </a>
    </div>
  );
}
