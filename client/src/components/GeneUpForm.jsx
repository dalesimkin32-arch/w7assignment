/* import { useNavigate } from "react-router";  */
import { useState } from "react";

export default function GeneUpForm() {
  const [formData, setFormData] = useState();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page refreshing on form submit etc.
    // have the formData
    fetch(`http://locahost:8080/geneUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // use useNavigate to redirect user after the form is submitted
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* have the input names here be the same as the columns in your database */}
      <input name="gene_name" label="Genome Name" onChange={handleChange} />
      <input
        name="application"
        label="Application of Use for Gene"
        onChange={handleChange}
      />
      <input
        name="source_organism"
        label="Source Organism of Gene"
        onChange={handleChange}
      />
      <input
        name="image_description"
        label="Image of Use Description"
        onChange={handleChange}
      />
      <input name="image_url" label="Image of Use" onChange={handleChange} />
      <input
        name="primary_article_url"
        label="Link to primary research article"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

/*  DBase structure
    gene_name VARCHAR(100),
    application TEXT,
    source_organism VARCHAR(100),
    image_description TEXT,
    image_url TEXT,                  - mostly fails webpage urls not images so need re-sourcing
    primary_article_url TEXT         - added in to spawn a link to oen in new window if can
*/
