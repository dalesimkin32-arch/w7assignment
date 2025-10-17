/* import { useNavigate } from "react-router";  */
import { useState } from "react";
import { useNavigate } from "react-router";

export default function GeneUpForm() {
  const [formData, setFormData] = useState();
  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page refreshing on form submit etc.
    // have the formData
    fetch(`https://w7assignment.onrender.com/usefulgenes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // use useNavigate (onSuccess in form tag) to redirect user after the form is submitted
  }

  return (
    <form
      onSubmit={handleSubmit}
      onSuccess={() => {
        navigate("/");
      }}
    >
      {/* have the input names here be the same as the columns in your database */}
      {/* <label>Genome Name</label> */}
      <label>
        Gene Name:
        <input name="gene_name" label="Gene Name" onChange={handleChange} />
      </label>
      <label>
        Application of Use for Gene:
        <input
          name="application"
          label="Application of Use for Gene"
          onChange={handleChange}
        />
      </label>
      <label>
        Source Organism of Gene:
        <input
          name="source_organism"
          label="Source Organism of Gene"
          onChange={handleChange}
        />
      </label>
      <label>
        Image of Use: Description:
        <input
          name="image_description"
          label="Image of Use: Description"
          onChange={handleChange}
        />
      </label>
      <label>
        Image of Use:
        <input name="image_url" label="Image of Use" onChange={handleChange} />
      </label>
      <label>
        Link to primary research article:
        <input
          name="primary_article_url"
          label="Link to primary research article"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

/*  DBase structure
    gene_name VARCHAR(100),
    application TEXT,
    source_organism VARCHAR(100),
    image_description TEXT,
    image_url TEXT,                  - seed mostly fails webpage urls not images so need re-sourcing
    primary_article_url TEXT         - added in to spawn a link to open in new window if can
*/
